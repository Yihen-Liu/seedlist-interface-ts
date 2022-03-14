import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React from "react";
import QueryPubSub from "../../eventbus/query";

/*
class QueryArea extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            spacename:{
                message:"spacename in query...",
                value:"value in query"
            },
            activeLabel: props.activeLabel
        }

        this.setSpaceName = this.setSpaceName.bind(this)
    }

    setSpaceName(msg){
        QueryPubSub.commit("ChangeSpaceNameInQuery", msg);
    }

    render() {
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
                            onChange={this.setSpaceName}
                            placeholder={this.state.spacename.message}
                        />
                    </Stack>
                </Box>
            </VStack>
        );
    }
}
*/

interface IProps {

}

const QueryArea:React.FC<IProps> = (props:IProps)=>{
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
/*
                        onChange={()=>{}}
                        placeholder={"placeholder..."}
*/
                    />
                </Stack>
            </Box>
        </VStack>
);
}
export {QueryArea};

