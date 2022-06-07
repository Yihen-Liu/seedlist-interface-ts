import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {
	bitcoinWalletState,
	ethereumWalletState,
	generatorState,
	labelState, languageState,
	vaultNameState,
	vaultPasswordState
} from "../../hooks/Atoms";
import {puzzleState} from "../../hooks/Atoms";
import {useWarningToast} from "../../hooks/useToast";

const WalletButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [label,] = useRecoilState(labelState)
	const [puzzle,] = useRecoilState(puzzleState)
	const [vaultName,] = useRecoilState(vaultNameState);
	const [password, ] = useRecoilState(vaultPasswordState);
	const [, setBitcoinWallet] = useRecoilState(bitcoinWalletState);
	const [, setEthereumWallet] = useRecoilState(ethereumWalletState);
	const [generator, ] = useRecoilState(generatorState);
	const [lang, ] = useRecoilState(languageState)
	const warningToast = useWarningToast()

	const doClick = useCallback(()=>{
		if(generator === "puzzle"){
			if(puzzle==="" || puzzle===undefined){
				if(lang==="zh-CN"){
					warningToast("密码短语不许为空")
				}
				if(lang==="en-US"){
					warningToast("Puzzle not allow empty")
				}
				return;
			}

			if(puzzle.length<16){
				if(lang==="zh-CN"){
					warningToast("密码短语长度最少16位")
				}
				if(lang==="en-US"){
					warningToast("Puzzle length must more than 16 chars")
				}
				return;
			}		}

		if(generator === "entropy"){
			if(vaultName==="" || password==="" || vaultName===undefined || password===undefined){
				if(lang==="zh-CN"){
					warningToast("保险库名称及密码不许为空")
				}
				if(lang==="en-US"){
					warningToast("Vault name and password not allow empty")
				}
				return;
			}
		}

		if(label==="ethereum"){
			setEthereumWallet(true);
			setBitcoinWallet(false);
		}
		if(label==="bitcoin"){
			setBitcoinWallet(true);
			setEthereumWallet(false);
		}
	},[label, puzzle, generator, lang, vaultName, password])

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
