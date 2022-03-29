import {Box, HStack, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React from "react";
import {IBaseProps} from "../../interfaces/props";
import {useSelector} from "react-redux";
import {StateType} from "../../reducers/state";

const SaveArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

    return(
        <VStack spacing={0}  color="black">
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <Stack spacing={2}>
                    <TextInput
	                    placeholder={'seedlist space name ...'}
	                    type={'text'}
	                    disabled={!isConnection}
/*
                        disabled={this.state.spacename.disabled}
                        onChange={this.setSpaceName}
                        placeholder={this.state.spacename.message}
*/
                    />
                </Stack>
            </Box>
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <HStack spacing={2}>
                    <Box w="30%">
                        <TextInput
	                        placeholder={'label ...'}
	                        type={'text'}
	                        disabled={!isConnection}
/*
                            disabled={this.state.label.disabled}
                            onChange={this.setLabel}
                            placeholder={this.state.label.message}
*/
                        />
                    </Box>

                    <Box w="70%">
                        <TextInput
	                        placeholder={'saved content ...'}
	                        type={'text'}
	                        disabled={!isConnection}
/*
                            disabled={this.state.content.disabled}
                            onChange={this.setContent}
                            placeholder={this.state.content.message}
*/
                        />
                    </Box>

                </HStack>
            </Box>
        </VStack>

    );
}

export {SaveArea};