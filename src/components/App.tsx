import React, { useState } from "react";
import {Labels} from "./Labels/labels";
import {Buttons} from "./Buttons/buttons"
import {Box, Center, Container, Stack, Text} from "@chakra-ui/layout";
import {Header} from "./Header";
import {Button, ButtonGroup} from "@chakra-ui/button";
import {Footer} from "./Footer";
import {SignBody} from "./Body/signup";
import {SaveBody} from "./Body/save";
import {QueryBody} from "./Body/query";
import {Heading} from "@chakra-ui/react";

interface IProps {

}

const App:React.FC<IProps> = (props:IProps)=>{
        const [label, setLabel] = useState<string>("signup");
        return(
            <Box minH="100vh" color="white">
                <Heading>
                    <title>seedlist.org</title>
                </Heading>
                <Stack spacing={20}>
                    <Header />
                    <Center>
                        <Container>
                            <Center>
                                <Text fontSize="4xl" fontWeight="extrabold">
                                    IN CRYPTO, WE TRUST
                                </Text>
                            </Center>
                            {label === "signup" && <SignBody />}
                            {label === "query" && <QueryBody />}
                            {label === "save" && <SaveBody />}
                        </Container>
                    </Center>
                </Stack>
                <Footer/>
            </Box>
        );
}
/*
class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeLabel:"no",
            interactBody:""
        }
    }

    setActiveLabel=(label)=>{
        this.setState({activeLabel:label})
    }

    render() {
        if(this.state.activeLabel=="no"){
            this.state.interactBody = <SignBody activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>;
        }

        if(this.state.activeLabel == "signup"){
            this.state.interactBody = <SignBody activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>;
        }

        if(this.state.activeLabel == "save"){
            this.state.interactBody = <SaveBody activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>;
        }

        if(this.state.activeLabel == "query"){
            this.state.interactBody = <QueryBody activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>;
        }

        return (
            <Box minH="100vh" color="white">
                <Heading>
                    <title>seedlist.org</title>
                </Heading>
                <Stack spacing={20}>
                    <Header />
                    <Center>
                        <Container>
                            <Center>
                                <Text fontSize="4xl" fontWeight="extrabold">
                                    IN CRYPTO, WE TRUST
                                </Text>
                            </Center>
                            {this.state.interactBody}
                        </Container>
                    </Center>
                </Stack>
                <Footer/>
            </Box>
        )
    }
}
*/
export {App};