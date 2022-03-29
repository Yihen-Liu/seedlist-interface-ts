import {HStack, Text} from "@chakra-ui/layout";
import React from "react";
import {IBaseProps} from "../../interfaces/props";

const Seedlist:React.FC<IBaseProps>=(props:IBaseProps) => {
    return(
			<HStack spacing={2}>
				<Text fontSize="5xl">
					seedlist
				</Text>
			</HStack>
    );
}

export {Seedlist};