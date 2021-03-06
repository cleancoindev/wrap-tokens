//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.7.1;

import "./ERC20NoSymbol.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./ERC20FromERC1155.sol";

// This contract has a bug: It does not emit ERC-20 events.
contract ERC20OverERC1155 is ERC20FromERC1155 {
    using SafeMath for uint256;

    mapping (address => mapping (address => uint256)) private _allowances;

    function balanceOf(address account) public override view returns (uint256) {
        return erc1155.balanceOf(account, tokenId);
    }

    // This contract needs first be approved for ERC-1155 tranfers.
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        // solhint-disable indent
        // solhint-disable no-unused-vars
        try erc1155.safeTransferFrom(msg.sender, recipient, tokenId, amount, "") {
            return true;
        } catch Error(string memory /*reason*/) {
            return false;
        }
        // solhint-enable no-unused-vars
        // solhint-enable indent
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        return _approve(msg.sender, spender, amount);
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender].add(addedValue));
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        _approve(msg.sender, spender, _allowances[msg.sender][spender].sub(subtractedValue, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    // This contract needs first be approved for ERC-1155 tranfers.
    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        // solhint-disable indent
        // solhint-disable no-unused-vars
        if (sender != msg.sender) {
            decreaseAllowance(msg.sender, amount);
        }
        try erc1155.safeTransferFrom(sender, recipient, tokenId, amount, "") {
            return true;
        } catch Error(string memory /*reason*/) {
            return false;
        }
        // solhint-enable no-unused-vars
        // solhint-enable indent
    }

    function totalSupply() public view override returns (uint256) {
        return erc1155.totalSupply(tokenId);
    }

    function _approve(address owner, address spender, uint256 amount) internal virtual returns (bool) {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);

        // Comes last to prevent reentrancy attack
        // solhint-disable indent
        // solhint-disable no-unused-vars
        try erc1155.setApprovalForAll(spender, amount != 0) {
            return true;
        } catch Error(string memory /*reason*/) {
            return false;
        }
        // solhint-enable indent

    }
}
