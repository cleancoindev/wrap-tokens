//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.7.1;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ERC1155.sol";
import "./ERC1155FromERC721.sol";

// This contract has a bug: It does not emit ERC-1155 events.
contract ERC1155OverERC721 is ERC1155FromERC721, Context, ERC165, IERC1155 {
    bytes4 private constant _INTERFACE_ID_ERC1155 = 0xd9b67a26;

    /*
     *     bytes4(keccak256('totalSupply(uint256)')) == 0xbd85b039
     *     bytes4(keccak256('name(uint256)')) == 0x00ad800c
     *     bytes4(keccak256('symbol(uint256)')) == 0x4e41a1fb
     *     bytes4(keccak256('decimals(uint256)')) == 0x3f47e662
     *     bytes4(keccak256('uri(uint256)')) == 0x0e89341c
     *
     *     => 0xbd85b039 ^ 0x00ad800c ^ 0x4e41a1fb ^ 0x3f47e662 ^ 0x0e89341c == 0xc2a743b0
     */
    bytes4 private constant _INTERFACE_ID_ERC1155_VIEWS = 0xc2a743b0;

    // Mapping from account to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    string internal _uri;

    // solhint-disable func-visibility
    constructor(string memory uri_) {
        _setURI(uri_);

        // register the supported interfaces to conform to ERC1155 via ERC165
        _registerInterface(_INTERFACE_ID_ERC1155);

        // register the supported interfaces to conform to ERC1155Views via ERC165
        _registerInterface(_INTERFACE_ID_ERC1155_VIEWS);
    }
    // solhint-enable func-visibility

    function balanceOf(address account, uint256 id) public view override returns (uint256) {
        ERC721Token memory _token = tokens[id];
        IMyERC721 _erc721Contract = _token.erc721Contract;
        uint256 _erc721TokenId = _token.erc721TokenId;
        return _erc721Contract.ownerOf(_erc721TokenId) == account ? 1 : 0;
    }

    function balanceOfBatch(
        address[] memory accounts,
        uint256[] memory ids
    )
        public view override returns (uint256[] memory batchBalances)
    {
        require(accounts.length == ids.length, "ERC1155: accounts and ids length mismatch");

        batchBalances = new uint256[](accounts.length);

        for (uint i = 0; i < ids.length; ++i) {
            batchBalances[i] = balanceOf(accounts[i], ids[i]);
        }
    }

    /// This contract needs first be approved for the ERC-20 transfers (the recommended approval sum is ~uint256(0)).
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    )
        public virtual override
    {
        require(to != address(0), "ERC1155: transfer to the zero address");
        require(from == msg.sender || _operatorApprovals[from][msg.sender], "ERC1155: caller is not owner nor approved");
        _doTransferFrom(from, to, id, amount, data);
    }        

    /// This contract needs first be approved for the ERC-20 transfers (the recommended approval sum is ~uint256(0)).
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data) public virtual override
    {
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");
        require(to != address(0), "ERC1155: transfer to the zero address");
        require(from == msg.sender || _operatorApprovals[from][msg.sender], "ERC1155: caller is not owner nor approved");

        for (uint i = 0; i < ids.length; ++i) {
            _doTransferFrom(from, to, ids[i], amounts[i], data);
        }
    }

    function isApprovedForAll(address account, address operator) external view override returns (bool) {
        return _operatorApprovals[account][operator];
    }

    function setApprovalForAll(address operator, bool approved) external override {
        require(_msgSender() != operator, "ERC1155: setting approval status for self");

        _operatorApprovals[_msgSender()][operator] = approved;
        emit ApprovalForAll(_msgSender(), operator, approved);
    }

    function uri(uint256 /*_id*/) external view override returns (string memory) {
        return _uri; // We intentionally don't use `erc721.tokenURI()`.
    }

    function _setURI(string memory newuri) internal virtual {
        _uri = newuri;
    }

    function _doTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data) internal virtual 
    {
        if (amount != 0) {
            require(amount == 1, "No more than 1.");
            ERC721Token memory _token = tokens[id];
            IMyERC721 _erc721Contract = _token.erc721Contract;
            uint256 _erc721TokenId = _token.erc721TokenId;
            _erc721Contract.safeTransferFrom(from, to, _erc721TokenId, data);
        }
    }
}
