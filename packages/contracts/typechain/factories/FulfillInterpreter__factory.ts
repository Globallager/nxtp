/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FulfillInterpreter,
  FulfillInterpreterInterface,
} from "../FulfillInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x96d668da",
        type: "bytes32",
      },
    ],
    name: "c_0x96d668da",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fallbackAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000819055506116d2806100286000396000f3fe6080604052600436106100295760003560e01c80635b5120f71461002e5780635c19b1711461004a575b600080fd5b61004860048036038101906100439190610fcf565b610073565b005b34801561005657600080fd5b50610071600480360381019061006c919061108a565b610596565b005b600260005414156100b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b09061135c565b60405180910390fd5b60026000819055506100ed7f9968bc3200ac430adaba820a082319f01aab463abd77299d50c2259e974cb43160001b610596565b6101197fbee18106f974dde15cf090c6f5a6813687bff178eede9d7265d4351df3a1c97660001b610596565b6101457fd995d0f4358a47097f62199624fde2cab85f971dbae723324689cf331d943abc60001b610596565b600061015086610599565b905061017e7f5028af3abc4f312051c3fa98eb8da5f9dff45e5f13553d0985d3aad46b50f70d60001b610596565b6101aa7f9d4b5a583f96955cbdea011a447e3f39e1ba0afeaad11a3eb80bb2d4dbe0e98260001b610596565b80610243576101db7f3f9b5ff994058c308f8db5418d72f27a5b21f918a665aa474ee45de07e19b58e60001b610596565b6102077f4da36766f41f962b4a8d9208588da356210a53ebdc6f8cfde8f6d3ecac41ab7a60001b610596565b6102337ff76cc371b206e790074e07789b6c03d41d260a8990a23294881053a06333acd160001b610596565b61023e868886610656565b610270565b61026f7f787e92bf93f4a65c8da421a777be60abe7827abb6378db380708146115b89e0d60001b610596565b5b61029c7f980b7f41c95f59bdf17b93ff9ea470f0167f298897d4bc9e68a63b6d284ec7c060001b610596565b6102c87ffa4559cfeac1906d39f469e3d0da23e980e254e27b9ada3c960e504f5e7b3f0760001b610596565b6000808873ffffffffffffffffffffffffffffffffffffffff16836102ee5760006102f0565b865b8686604051610300929190611238565b60006040518083038185875af1925050503d806000811461033d576040519150601f19603f3d011682016040523d82523d6000602084013e610342565b606091505b50915091506103737f9fb8f46850dfcdedfb4f2451f569b589db57fc82bd8751abba8dcb78e58132c360001b610596565b61039f7f847694e10bb423888d42e25f0da1a9bfb5d182e0fe81f7b719f19bcd1369a61260001b610596565b81610556576103d07f7c89a754228305d64c29259c69e9462369d13ec35ae4afbd60bb2d5ebaea140060001b610596565b6103fc7fe0176c6bcd43d170e646c33be219f881dc4fdaa39f4a5bb2f5513978954a1e6460001b610596565b6104287fb41e02dced4c32ff283b4fa9b0cea6e85104d6c68bc6d1ccdce2ea512d56dcfa60001b610596565b6104338888886106ea565b61045f7fd2c03906a3762930e16837a0320f512bb2cbddc3225e0b70df7d449f3ad94bd360001b610596565b61048b7f7072c97478931ad490a8023fef09690787c6485a2d81f3ec5eff34076c8b885460001b610596565b82610524576104bc7f5e3fa505cd30214492a2a176b7c95aeff0046a7c98cb2273cee0256fd924ddeb60001b610596565b6104e87f895480497ff3e0d5d7e4541f15a846d194821768e19da0f64971b5c3fc52732d60001b610596565b6105147f8c193bf194ff3475bbe6e9079eacf0edabb734985da8275cef7beee026af6c5260001b610596565b61051f888a8861079b565b610551565b6105507f9c37d0b93dc98d5caf5a8e8aa20a1fc7ba644b2c9d2379e2fd316719b643018d60001b610596565b5b610583565b6105827fc2e8d875a049b59556326caf32872c8d58600473b5f9ca908fc6083e8f04b26960001b610596565b5b5050506001600081905550505050505050565b50565b60006105c77fe74d3bf5d343e3316beb207a38168ee59d74663e3a3fb0929f61dd5e8f24d6e360001b61082f565b6105f37fc6447d64bf0c80f184f71c923e77c9cc86f84c25ed2d208b05a862eda4eeea9560001b61082f565b61061f7f4ee1d7f77d6ba549754071140c254f86be7e035f2c4624c2dcd681660496d9ae60001b61082f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6106827f0e5b6e23fc733337d48275a550ae6ae854dfdd54334973314911f6e7192e4e9160001b61082f565b6106ae7f26301377955f57ee2af589b55b67acc6237461c646c57490ffb3134a3d54162160001b61082f565b6106da7f166ec284bca667b87b44427c094f0599cc679467f18975db34bfe0404f0a6ffe60001b61082f565b6106e5838383610832565b505050565b6107167f9c1192522ed404332a2d7d1a80b7ad817f70c1f6a8af221f3c040d59ef4e127160001b61082f565b6107427f0168ac6c7d2d25350f4bf14b865d18dacaa977c9d8ede32042cedd047edaf25360001b61082f565b61076e7f895b9ebb1fd8a25e9cd0066a4dcafa3aebc62333246c2461e1a059f88cb54cf860001b61082f565b61077783610599565b61078b57610786838383610953565b610796565b6107958282610a6a565b5b505050565b6107c77f08bdb2a16571ac95085388de1221fff03d0f9c68f8c86ab318882d09f3fbf86560001b61082f565b6107f37fcf6cf45045c837dd6ee9bbf1739f950b8ffe9b66a44d55380acd49c3d8296a3d60001b61082f565b61081f7fd551783d944757b23e7fe87aae6b9baba30bcdb0d5e4da379b62b2d002b7664e60001b61082f565b61082a838383610b39565b505050565b50565b6000818473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30866040518363ffffffff1660e01b8152600401610870929190611268565b60206040518083038186803b15801561088857600080fd5b505afa15801561089c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c091906110b3565b6108ca91906113ae565b905061094d8463095ea7b360e01b85846040516024016108eb929190611291565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c9a565b50505050565b61097f7fa204dd2175f9bd0af6ff6c41f54dbaad7a8fe0452b52f38c08bad1dad42d23ad60001b61082f565b6109ab7ff798f16718148904f23b4a2c7f042f8be367883d38374c87e0d8fd44a20d825c60001b61082f565b6109d77f1c4667e907fa81165cca71b1910cd3bb16fbb9acc22178d6c37b57ebcc305aa160001b61082f565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610a12929190611291565b602060405180830381600087803b158015610a2c57600080fd5b505af1158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611061565b50505050565b610a967fd7351ce214b1feb59e7ef5eb05925a06330c27e57f3e1350dbc336bcc5bba12960001b61082f565b610ac27faeff790d8746aeae5c96cf16007aa1d3c0a3310cfdf0dbf222029f3750f58fbf60001b61082f565b610aee7f7cbbc28866cd9cc6e9fdd8ad3ac8348b4042ed2cd22991fad1352d8bfacbed2e60001b61082f565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610b34573d6000803e3d6000fd5b505050565b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610b76929190611268565b60206040518083038186803b158015610b8e57600080fd5b505afa158015610ba2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc691906110b3565b905081811015610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c02906112dc565b60405180910390fd5b60008282039050610c938563095ea7b360e01b8684604051602401610c31929190611291565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c9a565b5050505050565b6000610cfc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d619092919063ffffffff16565b9050600081511115610d5c5780806020019051810190610d1c9190611061565b610d5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d529061133c565b60405180910390fd5b5b505050565b6060610d708484600085610d79565b90509392505050565b606082471015610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db5906112fc565b60405180910390fd5b610dc785610e8d565b610e06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfd9061131c565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e2f9190611251565b60006040518083038185875af1925050503d8060008114610e6c576040519150601f19603f3d011682016040523d82523d6000602084013e610e71565b606091505b5091509150610e81828286610ea0565b92505050949350505050565b600080823b905060008111915050919050565b60608315610eb057829050610f00565b600083511115610ec35782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef791906112ba565b60405180910390fd5b9392505050565b600081359050610f1681611629565b92915050565b600081359050610f2b81611640565b92915050565b600081519050610f4081611657565b92915050565b600081359050610f558161166e565b92915050565b60008083601f840112610f6d57600080fd5b8235905067ffffffffffffffff811115610f8657600080fd5b602083019150836001820283011115610f9e57600080fd5b9250929050565b600081359050610fb481611685565b92915050565b600081519050610fc981611685565b92915050565b60008060008060008060a08789031215610fe857600080fd5b6000610ff689828a01610f1c565b965050602061100789828a01610f07565b955050604061101889828a01610f1c565b945050606061102989828a01610fa5565b935050608087013567ffffffffffffffff81111561104657600080fd5b61105289828a01610f5b565b92509250509295509295509295565b60006020828403121561107357600080fd5b600061108184828501610f31565b91505092915050565b60006020828403121561109c57600080fd5b60006110aa84828501610f46565b91505092915050565b6000602082840312156110c557600080fd5b60006110d384828501610fba565b91505092915050565b6110e581611404565b82525050565b60006110f78385611392565b9350611104838584611468565b82840190509392505050565b600061111b8261137c565b6111258185611392565b9350611135818560208601611477565b80840191505092915050565b600061114c82611387565b611156818561139d565b9350611166818560208601611477565b61116f816114d9565b840191505092915050565b600061118760298361139d565b9150611192826114ea565b604082019050919050565b60006111aa60268361139d565b91506111b582611539565b604082019050919050565b60006111cd601d8361139d565b91506111d882611588565b602082019050919050565b60006111f0602a8361139d565b91506111fb826115b1565b604082019050919050565b6000611213601f8361139d565b915061121e82611600565b602082019050919050565b6112328161145e565b82525050565b60006112458284866110eb565b91508190509392505050565b600061125d8284611110565b915081905092915050565b600060408201905061127d60008301856110dc565b61128a60208301846110dc565b9392505050565b60006040820190506112a660008301856110dc565b6112b36020830184611229565b9392505050565b600060208201905081810360008301526112d48184611141565b905092915050565b600060208201905081810360008301526112f58161117a565b9050919050565b600060208201905081810360008301526113158161119d565b9050919050565b60006020820190508181036000830152611335816111c0565b9050919050565b60006020820190508181036000830152611355816111e3565b9050919050565b6000602082019050818103600083015261137581611206565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006113b98261145e565b91506113c48361145e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113f9576113f86114aa565b5b828201905092915050565b600061140f8261143e565b9050919050565b60006114218261143e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561149557808201518184015260208101905061147a565b838111156114a4576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f5361666545524332303a2064656372656173656420616c6c6f77616e6365206260008201527f656c6f77207a65726f0000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b61163281611404565b811461163d57600080fd5b50565b61164981611416565b811461165457600080fd5b50565b61166081611428565b811461166b57600080fd5b50565b61167781611434565b811461168257600080fd5b50565b61168e8161145e565b811461169957600080fd5b5056fea2646970667358221220b5c0f63a2f251ca239248c183358ce4b3a4c6e268ada2c648bdf646953788dd564736f6c63430008040033";

export class FulfillInterpreter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FulfillInterpreter> {
    return super.deploy(overrides || {}) as Promise<FulfillInterpreter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FulfillInterpreter {
    return super.attach(address) as FulfillInterpreter;
  }
  connect(signer: Signer): FulfillInterpreter__factory {
    return super.connect(signer) as FulfillInterpreter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FulfillInterpreterInterface {
    return new utils.Interface(_abi) as FulfillInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FulfillInterpreter {
    return new Contract(address, _abi, signerOrProvider) as FulfillInterpreter;
  }
}