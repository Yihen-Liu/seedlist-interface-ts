import React, {useMemo, useState} from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import {IBaseProps} from "../../interfaces/props";
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/useLanguage";
import {puzzleState} from "../../hooks/usePuzzle";

const WalletArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [puzzleValue, setPuzzleValue] = useState<string>("")
	const [, setPuzzle] = useRecoilState(puzzleState)
	const handlePuzzleChange = (event: { target: { value: React.SetStateAction<string>; }; })=>{
		setPuzzleValue(event.target.value)
		setPuzzle(event.target.value)
	}

	const [lang, ] = useRecoilState(languageState)
	const [phraseHolder, setPhraseHolder]	= useState<string>("enter your stronger phrase ...")
	useMemo(()=>{
		if(lang==='zh-CN'){
			setPhraseHolder("请输入一个足够健壮的初始熵 ...")
		}

		if(lang==='en-US'){
			setPhraseHolder("enter your stronger puzzle ...")
		}
	},[lang])


	return(
		<VStack spacing={0}  color="black">
			<Box
				w="100%"
				bg="whiteAlpha"
				p={4}
				borderRadius={8}
				boxShadow="lg"
			>
				<Stack spacing={2} width={"450px"}>
					<TextInput
						placeholder={phraseHolder}
						type={'text'}
						value={puzzleValue}
						onChange={handlePuzzleChange}
					/>
				</Stack>
			</Box>
		</VStack>

	);
}

export {WalletArea};
