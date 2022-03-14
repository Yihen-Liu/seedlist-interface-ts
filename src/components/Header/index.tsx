import { Text, Box, HStack, Container, Center } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import {Seedlist} from "./seedlist";
/*import { useWeb3 } from "../../helpers/web3"; */
import React from "react";
import {PageRouter} from "./routers";
import {Wallet} from "./wallet";

/*
class Header extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container maxW="container.xl">
                <HStack py={5} wrap="wrap" spacing={0}>
                    <Seedlist />
                    <PageRouter />
                    <Wallet />
                </HStack>
            </Container>
        )
    }
}
*/
interface IProps {

}
const Header:React.FC<IProps> = (props:IProps)=>{
    return(
        <Container maxW="container.xl">
            <HStack py={5} wrap="wrap" spacing={0}>
                <Seedlist />
                <PageRouter />
                <Wallet />
            </HStack>
        </Container>
    );
}
export {Header};