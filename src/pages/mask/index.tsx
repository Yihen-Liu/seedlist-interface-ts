import React from "react";
import {Center, Container, Text} from "@chakra-ui/layout";
import { IBaseProps } from "../../interfaces/props";

const Mask:React.FC<IBaseProps> = (props:IBaseProps)=>{

	return(
		<Center>
			<Container>
					<Text fontSize="4xl" fontWeight="extrabold">
						IN CRYPTO, WE TRUST(mask)
					</Text>
			</Container>
		</Center>
);
}

export {Mask};
