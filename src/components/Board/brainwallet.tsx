import React from "react";
import {Box, Center, HStack, Stack} from "@chakra-ui/layout";
import {IBaseProps} from "../../interfaces/props";
import {WalletLabels} from "../Labels/wallet";
import {WalletButton} from "../Buttons/wallet";
import {WalletPuzzleArea} from "../TextInput/brainwallet/PuzzelArea";
import {WalletEntropyArea} from "../TextInput/brainwallet/EntropyArea";
import {useRecoilState} from "recoil";
import {generatorState} from "../../hooks/Atoms";

const WalletBoard:React.FC<IBaseProps>=(props:IBaseProps)=>{
	const [generator, ] = useRecoilState(generatorState)
	return(
		<Center>
			<Stack>
				<Box bgColor="#2b2d32" p="5" w="100%" maxW="lg" borderRadius="8" >
					<Stack spacing={6}>

						<WalletLabels />

						{generator==='puzzle' && <WalletPuzzleArea />}
						{generator==='entropy' && <WalletEntropyArea />}

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
