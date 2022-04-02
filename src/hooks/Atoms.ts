import {atom} from "recoil";

export const generatorState = atom(
	{
		key:"walletGeneratorTag",
		default:"puzzle"
	}
);
