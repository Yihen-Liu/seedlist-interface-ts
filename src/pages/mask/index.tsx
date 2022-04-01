import React from "react";
import {Center, Container, Text} from "@chakra-ui/layout";
import { IBaseProps } from "../../interfaces/props";

const Mask:React.FC<IBaseProps> = (props:IBaseProps)=>{
	return(
		<Center>
			<Container>
				<Center>
					<Text fontSize="4xl" fontWeight="extrabold">
						IN CRYPTO, WE TRUST
					</Text>
				</Center>
				<Center>
					coming soon...
				</Center>
			</Container>
		</Center>
);
}

export {Mask};
