/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { ERC1155OverERC20 } from "./ERC1155OverERC20";

export class ERC1155OverERC20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(uri_: string, overrides?: Overrides): Promise<ERC1155OverERC20> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155OverERC20>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155OverERC20 {
    return super.attach(address) as ERC1155OverERC20;
  }
  connect(signer: Signer): ERC1155OverERC20Factory {
    return super.connect(signer) as ERC1155OverERC20Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155OverERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155OverERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "batchBalances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d4e38038062001d4e833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052505050620001106301ffc9a760e01b6200015860201b60201c565b62000121816200026160201b60201c565b6200013963d9b67a2660e01b6200015860201b60201c565b6200015163c2a743b060e01b6200015860201b60201c565b5062000333565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8060029080519060200190620002799291906200027d565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002b5576000855562000301565b82601f10620002d057805160ff191683800117855562000301565b8280016001018555821562000301579182015b8281111562000300578251825591602001919060010190620002e3565b5b50905062000310919062000314565b5090565b5b808211156200032f57600081600090555060010162000315565b5090565b611a0b80620003436000396000f3fe608060405234801561001057600080fd5b50600436106100b25760003560e01c80634e1273f4116100715780634e1273f4146105325780634e41a1fb146106d3578063a22cb4651461077a578063bd85b039146107ca578063e985e9c51461080c578063f242432a14610886576100b2565b8062ad800c146100b7578062fdd58e1461015e57806301ffc9a7146101c05780630e89341c146102235780632eb2c2d6146102ca5780633f47e662146104ed575b600080fd5b6100e3600480360360208110156100cd57600080fd5b8101908080359060200190929190505050610995565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610123578082015181840152602081019050610108565b50505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101aa6004803603604081101561017457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610add565b6040518082815260200191505060405180910390f35b61020b600480360360208110156101d657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b89565b60405180821515815260200191505060405180910390f35b61024f6004803603602081101561023957600080fd5b8101908080359060200190929190505050610bf0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028f578082015181840152602081019050610274565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104eb600480360360a08110156102e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561033d57600080fd5b82018360208201111561034f57600080fd5b8035906020019184602083028401116401000000008311171561037157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103d157600080fd5b8201836020820111156103e357600080fd5b8035906020019184602083028401116401000000008311171561040557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561046557600080fd5b82018360208201111561047757600080fd5b8035906020019184600183028401116401000000008311171561049957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610c94565b005b6105196004803603602081101561050357600080fd5b8101908080359060200190929190505050611063565b604051808260ff16815260200191505060405180910390f35b61067c6004803603604081101561054857600080fd5b810190808035906020019064010000000081111561056557600080fd5b82018360208201111561057757600080fd5b8035906020019184602083028401116401000000008311171561059957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105f957600080fd5b82018360208201111561060b57600080fd5b8035906020019184602083028401116401000000008311171561062d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506110ed565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106bf5780820151818401526020810190506106a4565b505050509050019250505060405180910390f35b6106ff600480360360208110156106e957600080fd5b8101908080359060200190929190505050611291565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561073f578082015181840152602081019050610724565b50505050905090810190601f16801561076c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107c86004803603604081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506113d9565b005b6107f6600480360360208110156107e057600080fd5b8101908080359060200190929190505050611572565b6040518082815260200191505060405180910390f35b61086e6004803603604081101561082257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115fc565b60405180821515815260200191505060405180910390f35b610993600480360360a081101561089c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561090d57600080fd5b82018360208201111561091f57600080fd5b8035906020019184600183028401116401000000008311171561094157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611690565b005b60608173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156109dd57600080fd5b505afa1580156109f1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610a1b57600080fd5b8101908080516040519392919084640100000000821115610a3b57600080fd5b83820191506020820185811115610a5157600080fd5b8251866001820283011164010000000082111715610a6e57600080fd5b8083526020830192505050908051906020019080838360005b83811015610aa2578082015181840152602081019050610a87565b50505050905090810190601f168015610acf5780820380516001836020036101000a031916815260200191505b506040525050509050919050565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b4657600080fd5b505afa158015610b5a573d6000803e3d6000fd5b505050506040513d6020811015610b7057600080fd5b8101908080519060200190929190505050905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c885780601f10610c5d57610100808354040283529160200191610c88565b820191906000526020600020905b815481529060010190602001808311610c6b57829003601f168201915b50505050509050919050565b8151835114610cee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806119ae6028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d74576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806119376025913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610e345750600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610e89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061190e6029913960400191505060405180910390fd5b60005b835181101561105b57838181518110610ea157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3876000196040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610f1b57600080fd5b505af1158015610f2f573d6000803e3d6000fd5b505050506040513d6020811015610f4557600080fd5b810190808051906020019092919050505050838181518110610f6357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166323b872dd8787868581518110610f9457fe5b60200260200101516040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561100c57600080fd5b505af1158015611020573d6000803e3d6000fd5b505050506040513d602081101561103657600080fd5b810190808051906020019092919050505061105057600080fd5b806001019050610e8c565b505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156110ab57600080fd5b505afa1580156110bf573d6000803e3d6000fd5b505050506040513d60208110156110d557600080fd5b81019080805190602001909291905050509050919050565b60608151835114611149576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806119856029913960400191505060405180910390fd5b825167ffffffffffffffff8111801561116157600080fd5b506040519080825280602002602001820160405280156111905781602001602082028036833780820191505090505b50905060005b825181101561128a578281815181106111ab57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318583815181106111da57fe5b60200260200101516040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561122c57600080fd5b505afa158015611240573d6000803e3d6000fd5b505050506040513d602081101561125657600080fd5b810190808051906020019092919050505082828151811061127357fe5b602002602001018181525050806001019050611196565b5092915050565b60608173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156112d957600080fd5b505afa1580156112ed573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561131757600080fd5b810190808051604051939291908464010000000082111561133757600080fd5b8382019150602082018581111561134d57600080fd5b825186600182028301116401000000008211171561136a57600080fd5b8083526020830192505050908051906020019080838360005b8381101561139e578082015181840152602081019050611383565b50505050905090810190601f1680156113cb5780820380516001836020036101000a031916815260200191505b506040525050509050919050565b8173ffffffffffffffffffffffffffffffffffffffff166113f8611905565b73ffffffffffffffffffffffffffffffffffffffff161415611465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061195c6029913960400191505060405180910390fd5b8060016000611472611905565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661151f611905565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115ba57600080fd5b505afa1580156115ce573d6000803e3d6000fd5b505050506040513d60208110156115e457600080fd5b81019080805190602001909291905050509050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611716576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806119376025913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806117d65750600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b61182b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061190e6029913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd8686856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156118ba57600080fd5b505af11580156118ce573d6000803e3d6000fd5b505050506040513d60208110156118e457600080fd5b81019080805190602001909291905050506118fe57600080fd5b5050505050565b60003390509056fe455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368a26469706673582212209f087774990ada40d0ee6cf367844700e6303a97511367da357240473a034fac64736f6c63430007050033";