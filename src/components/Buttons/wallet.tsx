import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {labelState} from "../../hooks/Atoms";
import {GenBitcoinBrainWallet, GenEthereumBrainWallet} from "../../lib/brainwallet";
import {puzzleState} from "../../hooks/Atoms";

const WalletButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [label,] = useRecoilState(labelState)
	const [puzzle,] = useRecoilState(puzzleState)
	const doClick = useCallback(()=>{
		if(label==="ethereum"){
			let addrs = GenEthereumBrainWallet(0,10, puzzle)
			console.log("ethereum:")
			console.log(addrs)
		}
		if(label==="bitcoin"){
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
