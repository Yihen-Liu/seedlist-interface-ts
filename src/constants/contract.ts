// keccak256('EIP712Domain(string name, string version, uint256 chainId, address VaultHubContract)');
export const DOMAIN_SEPARATOR = "0x0a649d1d16975cf8ed13b50c2bacf9612da88ed1990943291c41b5fcc5c8b2c0";

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

//keccak256('queryPrivateVaultAddress(address addr, uint deadline)')
export const QUERY_PRIVATE_VAULT_ADDRESS_PERMIT_TYPE_HASH = "0xf63b757fe5d6cdcf507967b75ba29c7b30eb7a73f255ccde1db9178daf683f69";

// private vault contract caller used
export const PRIVATE_VAULT_DOMAIN = "0x33993b0a0c04c5525c02867be7cc2bcdd49fe2643cfab46c731ff30cc29f3124"
//keccak256('labelNameDirectly(uint64 index, uint256 deadline)')
export const LABEL_NAME_PERMIT_TYPE_HASH =
	"0xcbb2475c190d2e287f7de56c688846f7612f70b210a3856ad34c475cbad0dda7";

//keccak256('getPrivateDataByNameDirectly(string memory name, uint256 deadline)')
export const  GET_PRIVATE_DATA_BY_NAME_PERMIT_TYPE_HASH =
	"0x83a9c8c05ed0fb1e4d4baaef671e3f96099729926f732e6aaac34a751230c7b8";

//keccak256('getPrivateDataByIndexDirectly(uint64 index, uint256 deadline)')
export const  GET_PRIVATE_DATA_BY_INDEX_PERMIT_TYPE_HASH =
	"0x17558919af4007c4fb94572ba8e807922ff7db103814e127ad21ef481ca35d98";

//keccak256('saveWithoutMintingDirectly(string memory data, string memory cryptoLabel, uint256 deadline)')
export const  SAVE_WITHOUT_MINTING_PERMIT_TYPE_HASH =
	"0xdf412ff5be017ec35abe4df3f9a2b33c93ab92336a734ac392576c30bad057f5";

//keccak256('saveWithMintingDirectly(string memory data, string memory cryptoLabel, uint256 deadline)')
export const SAVE_WITH_MINTING_PERMIT_TYPE_HASH =
	"0xd9066cfdcd2adeb7f91eaa0872abd8e0ce6c9e7c131f920e0b52e3b052a791c8";