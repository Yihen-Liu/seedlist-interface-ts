import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {bitcoinWalletState, ethereumWalletState, labelState} from "../../hooks/Atoms";
import {GenBitcoinBrainWalletByPuzzle, GenEthereumBrainWalletByPuzzle} from "../../lib/brainwallet";
import {puzzleState} from "../../hooks/Atoms";

const WalletButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [label,] = useRecoilState(labelState)
	const [puzzle,] = useRecoilState(puzzleState)
	const [bitcoinWallet, setBitcoinWallet] = useRecoilState(bitcoinWalletState);
	const [ethereumWallet, setEthereumWallet] = useRecoilState(ethereumWalletState);
	const doClick = useCallback(()=>{
		if(label==="ethereum"){
			setEthereumWallet(true);
			setBitcoinWallet(false);
		}
		if(label==="bitcoin"){
			setBitcoinWallet(true);
			setEthereumWallet(false);
		}
	},[label, puzzle])

	return(
		<Button
			colorScheme="blackAlpha"
			fontSize="xl"
			onClick={()=>doClick()}
			w="100%"
		>
			<Trans>Let's Generate </Trans>
		</Button>
	);
}

export {WalletButton};
