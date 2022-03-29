import React from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import {IBaseProps} from "../../interfaces/props";

const WalletArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
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
						placeholder={'enter your stronger phrase ...'}
						type={'text'}
					/>
				</Stack>
			</Box>
		</VStack>

	);
}

export {WalletArea};
