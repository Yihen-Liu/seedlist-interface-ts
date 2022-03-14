import {HStack, Text} from "@chakra-ui/layout";
import React from "react";
import {Link} from "@chakra-ui/react";

interface IProps {

}

const Seedlist:React.FC<IProps>=(props:IProps) => {
    return(
        <Link href="/">
            <a>
                <HStack spacing={2}>
                    <Text fontSize="4xl" fontWeight="extrabold">
                        seedlist
                    </Text>
                </HStack>
            </a>
        </Link>

    );
}

export {Seedlist};