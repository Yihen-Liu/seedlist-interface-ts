import React from "react";
import {Box, Center, Container, Stack, Text} from "@chakra-ui/layout";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {SignBoard} from "./Board/signup";
import {SaveBoard} from "./Board/save";
import {QueryBoard} from "./Board/query";
import {Heading} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {pageState, StateType} from "../reducers/state";
import {IBaseProps} from "../interfaces/props";

const App:React.FC<IBaseProps> = (props:IBaseProps)=>{
        const label= useSelector((state:StateType)=>state.page);

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
                            {label === pageState.SIGNUP && <SignBoard />}
                            {label === pageState.QUERY && <QueryBoard />}
                            {label === pageState.SAVE && <SaveBoard />}
                        </Container>
                    </Center>
                </Stack>
                <Footer/>
            </Box>
        );
}

export {App};