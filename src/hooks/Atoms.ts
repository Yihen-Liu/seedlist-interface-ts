import {atom} from "recoil";

export const generatorState = atom(
	{
		key:"walletGeneratorTag",
		default:"puzzle"
	}
);
export const pageState = atom(
	{
		key:"pageTag",
		default:"entropy"
	}
);

export const puzzleState = atom(
	{
		key:"puzzleInWalletGenerate",
		default:""
	}
);

export const languageState = atom(
	{
		key:"language",
		default:"en-US"
	}
);

export const labelState = atom(
	{
		key:"labelTag",
		default:"bitcoin"
	}
);
export const networkState = atom(
	{
		key:"networkTag",
		default:"rinkeby"
	}
);

export const tokenReceiverAddr = atom(
	{
		key:"tokenReceiverAddrTag",
		default:""
	}
)