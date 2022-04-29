import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {bitcoinWalletState, ethereumWalletState, labelState} from "../../hooks/Atoms";
import {GenBitcoinBrainWallet, GenEthereumBrainWallet} from "../../lib/brainwallet";
import {puzzleState} from "../../hooks/Atoms";

const WalletButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [label,] = useRecoilState(labelState)
	const [puzzle,] = useRecoilState(puzzleState)
	const [bitcoinWallet, setBitcoinWallet] = useRecoilState(bitcoinWalletState);
	const [ethereumWallet, setEthereumWallet] = useRecoilState(ethereumWalletState);
	const doClick = useCallback(()=>{
		if(label==="ethereum"){
			setEthereumWallet(true);
			let addrs = GenEthereumBrainWallet(0,10, puzzle)
			console.log("ethereum:")
			console.log(addrs)
		}
		if(label==="bitcoin"){
			setBitcoinWallet(true);
			let addrs = GenBitcoinBrainWallet(0, 10, puzzle)
			console.log("bitcoin:")
			console.log(addrs)
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
