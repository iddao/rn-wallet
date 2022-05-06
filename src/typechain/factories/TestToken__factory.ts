/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
    inputs: [],
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [],
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
    inputs: [],
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405260096080819052682a32b9ba1021b7b4b760b91b60a09081526200002c916006919062000700565b5060408051808201909152600480825263151154d560e21b60209092019182526200005a9160079162000700565b506aa56fa5b99019a5c80000006009553480156200007757600080fd5b50600680546200008790620007a6565b80601f0160208091040260200160405190810160405280929190818152602001828054620000b590620007a6565b8015620001065780601f10620000da5761010080835404028352916020019162000106565b820191906000526020600020905b815481529060010190602001808311620000e857829003601f168201915b5050505050600780546200011a90620007a6565b80601f01602080910402602001604051908101604052809291908181526020018280546200014890620007a6565b8015620001995780601f106200016d5761010080835404028352916020019162000199565b820191906000526020600020905b8154815290600101906020018083116200017b57829003601f168201915b50508451620001b393506003925060208601915062000700565b508051620001c990600490602084019062000700565b5050600580543361010081026001600160a81b031990921691909117601217909155600954620001fa9250620003cd565b600880546001600160a01b031916339081179091556200023b9073e3f345ef7695535387e792e3057492f2635316a06a084595161401484a000000620004bc565b6200026733733e4b1bbb86399bb0716c287bbac8cab19440e1016a084595161401484a000000620004bc565b62000293337367ef210f4232c7c133fc955707036bdda236b3886a084595161401484a000000620004bc565b620002bf33739da232019d5ffb079bb2de216b7fe5f093b90ea86a084595161401484a000000620004bc565b620002eb3373c841077406ff128b03c50f2625b38c08c05b959b6a084595161401484a000000620004bc565b6200031733731184cfde16593db91938cc6f73240a53b20d6ea46a084595161401484a000000620004bc565b6200034333739700d276fe9bd24327c7a2b6e54e0bf320efff2f6a084595161401484a000000620004bc565b6200036f3373ed64754fda773980f583690a4ed3ba88822696e16a084595161401484a000000620004bc565b6200039b3373fedd04ee9e6625184d33e50650dc061c31f7cf356a084595161401484a000000620004bc565b620003c73373bc7824469e942b145b64debaf50a51d00829471f6a084595161401484a000000620004bc565b62000886565b6001600160a01b038216620004295760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b62000445816002546200065760201b620004561790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620004789183906200045662000657821b17901c565b6001600160a01b03831660008181526020818152604080832094909455925184815291929091600080516020620013ec833981519152910160405180910390a35050565b6001600160a01b038316620005225760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840162000420565b6001600160a01b038216620005865760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840162000420565b620005d181604051806060016040528060268152602001620013c6602691396001600160a01b03861660009081526020818152604090912054929190620004bc620006c1821b17901c565b6001600160a01b0380851660009081526020818152604080832094909455918516815291909120546200060f9183906200045662000657821b17901c565b6001600160a01b03838116600081815260208181526040918290209490945551848152909291861691600080516020620013ec833981519152910160405180910390a3505050565b600080620006668385620007f9565b905083811015620006ba5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015260640162000420565b9392505050565b60008184841115620006e85760405162461bcd60e51b815260040162000420919062000814565b506000620006f784866200086c565b95945050505050565b8280546200070e90620007a6565b90600052602060002090601f0160209004810192826200073257600085556200077d565b82601f106200074d57805160ff19168380011785556200077d565b828001600101855582156200077d579182015b828111156200077d57825182559160200191906001019062000760565b506200078b9291506200078f565b5090565b5b808211156200078b576000815560010162000790565b600181811c90821680620007bb57607f821691505b60208210811415620007dd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156200080f576200080f620007e3565b500190565b600060208083528351808285015260005b81811015620008435785810183015185820160400152820162000825565b8181111562000856576000604083870101525b50601f01601f1916929092016040019392505050565b600082821015620008815762000881620007e3565b500390565b610b3080620008966000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806340c10f1911610081578063a457c2d71161005b578063a457c2d7146101ad578063a9059cbb146101c0578063dd62ed3e146101d357600080fd5b806340c10f191461016757806370a082311461017c57806395d89b41146101a557600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461015457600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e161020c565b6040516100ee91906108e2565b60405180910390f35b61010a610105366004610953565b61029e565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a36600461097d565b6102b4565b60055460405160ff90911681526020016100ee565b61010a610162366004610953565b61031d565b61017a610175366004610953565b610353565b005b61011e61018a3660046109b9565b6001600160a01b031660009081526020819052604090205490565b6100e16103eb565b61010a6101bb366004610953565b6103fa565b61010a6101ce366004610953565b610449565b61011e6101e13660046109d4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461021b90610a07565b80601f016020809104026020016040519081016040528092919081815260200182805461024790610a07565b80156102945780601f1061026957610100808354040283529160200191610294565b820191906000526020600020905b81548152906001019060200180831161027757829003601f168201915b5050505050905090565b60006102ab3384846104f6565b50600192915050565b60006102c184848461064f565b610313843361030e85604051806060016040528060288152602001610aae602891396001600160a01b038a16600090815260016020908152604080832033845290915290205491906104bc565b6104f6565b5060019392505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102ab91859061030e9086610456565b60055461010090046001600160a01b031633146103dd5760405162461bcd60e51b815260206004820152602260248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60448201527f6e2e00000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103e78282610804565b5050565b60606004805461021b90610a07565b60006102ab338461030e85604051806060016040528060258152602001610ad6602591393360009081526001602090815260408083206001600160a01b038d16845290915290205491906104bc565b60006102ab33848461064f565b6000806104638385610a58565b9050838110156104b55760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016103d4565b9392505050565b600081848411156104e05760405162461bcd60e51b81526004016103d491906108e2565b5060006104ed8486610a70565b95945050505050565b6001600160a01b0383166105715760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103d4565b6001600160a01b0382166105ed5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103d4565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106cb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103d4565b6001600160a01b0382166107475760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103d4565b61078481604051806060016040528060268152602001610a88602691396001600160a01b03861660009081526020819052604090205491906104bc565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107b39082610456565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610642565b6001600160a01b03821661085a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d4565b6002546108679082610456565b6002556001600160a01b03821660009081526020819052604090205461088d9082610456565b6001600160a01b038316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b8181101561090f578581018301518582016040015282016108f3565b81811115610921576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461094e57600080fd5b919050565b6000806040838503121561096657600080fd5b61096f83610937565b946020939093013593505050565b60008060006060848603121561099257600080fd5b61099b84610937565b92506109a960208501610937565b9150604084013590509250925092565b6000602082840312156109cb57600080fd5b6104b582610937565b600080604083850312156109e757600080fd5b6109f083610937565b91506109fe60208401610937565b90509250929050565b600181811c90821680610a1b57607f821691505b60208210811415610a3c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a6b57610a6b610a42565b500190565b600082821015610a8257610a82610a42565b50039056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220fc64cb4e7802a8e1ada611f0fc57dd7b79de2e10bb3f1a5d6ec15ceba772fe7964736f6c6343000809003345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

export class TestToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}