import React from "react";
import {Box, Center, Container, HStack, Text} from "@chakra-ui/layout";
import { IBaseProps } from "../../interfaces/props";
import {Image} from "@chakra-ui/react";
import {Trans} from "@lingui/macro";

const Document:React.FC<IBaseProps> = (props:IBaseProps)=>{
	return(
			<Center>
					<Box>
							<Text> Seedlist Encrypto: </Text>
						<Center>
							<Image marginY="10px" boxShadow="1024" src="./media/encrypt-flow.png" />
						</Center>
						<Center>
							<Text>encrypt-process.jpg</Text>
						</Center>
					</Box>


			</Center>
);
}

export {Document};
