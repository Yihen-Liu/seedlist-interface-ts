import React from "react";
import {Box, Center, Container, Stack, Text} from "@chakra-ui/layout";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Heading} from "@chakra-ui/react";
import {StateType} from "../reducers/state";
import {IBaseProps} from "../interfaces/props";
import {Navigate, Route, Routes} from "react-router-dom";
import { Mask } from "../pages/mask";
import { Brainwallet } from "../pages/brainwallet";
import {Entropy} from "../pages/entropy";
import {BrowserRouter as Router} from "react-router-dom";

const App:React.FC<IBaseProps> = (props:IBaseProps)=>{

        return(
            <Box minH="100vh" color="white">
                <Heading>
                    <title>seedlist.org</title>
                </Heading>
                <Stack spacing={20}>
					<Router>
						<Header />
						<Routes>
							<Route path="/" element={ <Navigate to="/entropy" />}> </Route>
							<Route path="/entropy" element={<Entropy />}> </Route>
							<Route path="/brainwallet" element={<Brainwallet />}> </Route>
							<Route path="/mask" element={<Mask />}> </Route>
						</Routes>
					</Router>
                </Stack>
                <Footer/>
            </Box>
        );
}

export {App};