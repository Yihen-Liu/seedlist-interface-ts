import React from "react";
import {IBaseProps} from "../../interfaces/props";
import {Select} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

const Menu:React.FC<IBaseProps> = (props:IBaseProps) =>{
    return(
        <>
        <Box width="10px" />
        <Box>
                <Select variant="unstyled" placeholder="Language">
                    <option>中文</option>
                    <option>English</option>
                </Select>
        </Box>
        </>
    );
}
export {Menu}