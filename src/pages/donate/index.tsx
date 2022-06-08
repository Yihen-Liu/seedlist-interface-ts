import React from "react";
import {Box, Center, Container, HStack, Text} from "@chakra-ui/layout";
import { IBaseProps } from "../../interfaces/props";
import {Image} from "@chakra-ui/react";
import {Trans} from "@lingui/macro";

const Donate:React.FC<IBaseProps> = (props:IBaseProps)=>{
	return(
		<Center>
			<Container>
				<Center>
					<HStack spacing="50px" marginY="60px">
						<Box>
							<Center>
								<Text> <Trans>BTC Donate Address</Trans>: </Text>
							</Center>
							<Center>
								<Image marginY="10px" src="./BTC.png" width="120" height="120" />
							</Center>
								<Text>13r8MnUgfsbJUkx2AWvr3tJSxZYwtgjTHU</Text>
						</Box>

						<Box>
							<Center>
								<Text> <Trans>ERC20/ETH Donate Address</Trans>: </Text>
							</Center>
							<Center>
								<Image marginY="10px" src="./ERC20.png" width="120" height="120" />
							</Center>
							<Center>
								0x19959F2b1789A64EB733896064f28A93897088c2
							</Center>
						</Box>
					</HStack>
				</Center>
			</Container>
		</Center>
);
}

export {Donate};
