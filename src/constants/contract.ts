// keccak256('EIP712Domain(string name, string version, uint256 chainId, address VaultHubContract)');
export const DOMAIN_SEPARATOR = "0x98c7c3628f4516ee8688ffc97700337684424c569733dd3fe3afc76b731e1597";

// keccak256('savePrivateDataWithMinting(address addr, string memory data, string memory cryptoLabel,
// address receiver, uint deadline)');
export const MINT_SAVE_PERMIT_TYPE_HASH =
	"0xc7c597494eec6dbc8ccea152a67ae6a2c377f2c8973e00d770d0d56739bd6de4";

// keccak256('savePrivateDataWithoutMinting(address addr, string memory data,
// string memory cryptoLabel, uint deadline)');
export const SAVE_PERMIT_TYPE_HASH = "0xd13e83bcf4fce4727bb85a65a6934ff2f1d0e8c4fd78e9aec10a9ec368be85d0";

//keccak256('queryPrivateDataByIndex(address addr, uint64 index, uint deadline)')
export const INDEX_QUERY_PERMIT_TYPE_HASH =
	"0x46104079641008f73d549d958985fcf7fbbc01bd836d18b08a6adb8a3364a833";

//keccak256('queryPrivateDataByName(address addr, string memory label, uint deadline)')
export const NAME_QUERY_PERMIT_TYPE_HASH =
	"0xe024d3867535747968844166b70261c903bc195d9c853ac1546b35d14d6bddb6";

//keccak256('initPrivateVault(address addr, uint deadline)')
export const INIT_VAULT_PERMIT_TYPE_HASH = "0xa57c24b72b0018db8ef11f3c9cffba3de9a9cf6331cd5f147e4331469bf522d7";

//keccak256('vaultHasRegister(address addr, uint deadline)')
export const VAULT_HAS_REGISTER_PERMIT_TYPE_HASH = "0x947a6f26b1c641ab3c37f620097351cbec591d3712ba6316cfa30a7ca2a900ca";

//keccak256('hasMinted(address addr, uint deadline)')
export const HAS_MINTED_PERMIT_TYPE_HASH = "0x7a2c93e46f7853693d19a4204fa50c182a9635ca7d56bf509fc5310086bb5b40";

//keccak256('totalSavedItems(address addr, uint deadline)')
export const TOTAL_SAVED_ITEMS_PERMIT_TYPE_HASH = "0xc8091172f8dd383be784278ec56d588ae0fa98ad55e1be233bde3cfa4847e19e";

//keccak256('getLabelNameByIndex(address addr, uint256 deadline, uint64 index)')
export const GET_LABEL_NAME_BY_INDEX = "0xbd5bc3ca2c7ea773b900edfe638ad04ce3697bf85885abdbe90a2f7c1266d9ee";
