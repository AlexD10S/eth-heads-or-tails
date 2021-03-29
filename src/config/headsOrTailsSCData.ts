// import {AbiItem} from 'web3';

const SC_ADDRESS = "0x95fF44594E5Ec40A33ec5dE7f357Dea370A1fc7a";

const SC_ABI: any = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "result",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "addressFriend",
				"type": "address"
			}
		],
		"name": "CoinTossed",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "deleteGameAgainstFriend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "nonce",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "coinPicked",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "commitment",
				"type": "string"
			}
		],
		"name": "ProofSent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressFriend",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_nonce",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_coinPicked",
				"type": "uint8"
			}
		],
		"name": "sendProof",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_result",
				"type": "uint8"
			}
		],
		"name": "sendResult",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressFriend",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_commitment",
				"type": "string"
			}
		],
		"name": "startGameAgainstFriend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_commitment",
				"type": "string"
			}
		],
		"name": "startGameNoAdversary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startGameRandomAdversary",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "player",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "commitment",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nonce",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "result",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "coinPicked",
						"type": "uint8"
					}
				],
				"internalType": "struct HeadsOrTails.Game",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "friendGames",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "commitment",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nonce",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "result",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "coinPicked",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressFriend",
				"type": "address"
			}
		],
		"name": "getGameAgainstFriend",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProof",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressFriend",
				"type": "address"
			}
		],
		"name": "getResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "waitingListPlayers",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "commitment",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nonce",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "result",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "coinPicked",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export {SC_ADDRESS, SC_ABI}