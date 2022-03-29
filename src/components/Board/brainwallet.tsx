import React from "react";
import {Box, Center, HStack, Stack} from "@chakra-ui/layout";
import {Labels} from "../Labels/labels";
import {InputAreas} from "../TextInput/inputareas";
import {Buttons} from "../Buttons/buttons";
import {IBaseProps} from "../../interfaces/props";
import {WalletLabels} from "../Labels/wallet";
import {WalletButton} from "../Buttons/wallet";
import {WalletArea} from "../TextInput/brainwallet";

const WalletBoard:React.FC<IBaseProps>=(props:IBaseProps)=>{
	return(
		<Center>
			<Stack>
				<Box bgColor="#2b2d32" p="5" w="100%" maxW="lg" borderRadius="8" >
					<Stack spacing={6}>

						<WalletLabels />

						<WalletArea />

						<HStack spacing="24px" width="100%">
							<WalletButton />
						</HStack>

					</Stack>
				</Box>
			</Stack>
		</Center>
	);
}

export {WalletBoard};
