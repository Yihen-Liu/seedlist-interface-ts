import {Box, Text} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import React from "react";
import {Image} from "@chakra-ui/react";


/*
export default class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:false,
            account:"",
            pending:false
        }
    }
    render() {
        return (
            <Box>
                {(!this.state.active || !this.state.account) && (
                    <Button
                        colorScheme="blackAlpha" bg="#2b2d32" boxShadow="sm"
                        onClick={this.state.activate} isLoading={this.state.pending}
                    >
                        <Image src="./public/media/metamask.svg" width="22" height="22" />

                        <Text fontSize="1xl"> Wallet Connect </Text>
                    </Button>
                )}
                {this.active && this.account && (
                    <ButtonGroup isAttached boxShadow="sm">
                        <Button
                            colorScheme="whiteAlpha"
                            bg="#2b2d32"
                            fontFamily="monospace"
                        >
                            <Image
                                src="./public/media/metamask.svg"
                                width="22"
                                height="22"
                            />

                        </Button>
                    </ButtonGroup>
                )}
            </Box>
        )
    }
}*/
interface IProps {

}

const Wallet:React.FC<IProps> = (props:IProps) => {
    return (
        <Box>
                <Button
                    colorScheme="blackAlpha" bg="#2b2d32" boxShadow="sm"
                    onClick={()=>{}} isLoading={false} >
                    <Image src="./metamask.svg" width="22" height="22" />

                    <Text fontSize="1xl"> Wallet Connect </Text>
                </Button>
        </Box>
    )
}

export {Wallet};