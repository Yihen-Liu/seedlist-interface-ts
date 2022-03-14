import {Box, HStack, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React from "react";
import SavePubSub from "../../eventbus/save";

interface IProps {

}

const SaveArea:React.FC<IProps> = (props:IProps)=>{
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
/*
                            disabled={this.state.label.disabled}
                            onChange={this.setLabel}
                            placeholder={this.state.label.message}
*/
                        />
                    </Box>

                    <Box w="70%">
                        <TextInput
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
/*
class SaveArea extends React.Component{
   constructor(props) {
       super(props);

       this.state = {
           spacename:{
               message:"spacename...",
               disabled:false
           },
           label:{
               message:"label...",
               disabled:false
           },
           content:{
               message:"content...",
               disabled:false
           },
           activeLabel:props.activeLabel
       };

   }
    setSpaceName= (msg)=>{
        SavePubSub.commit("ChangeSpaceNameInSave", msg);
    }

   setLabel = (msg)=>{
        SavePubSub.commit("ChangeLabelInSave", msg);
   }

   setContent = (msg)=>{
        SavePubSub.commit("ChangeContentInSave", msg);
   }

    render() {
       return (
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
                           disabled={this.state.spacename.disabled}
                           onChange={this.setSpaceName}
                           placeholder={this.state.spacename.message}
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
                               disabled={this.state.label.disabled}
                               onChange={this.setLabel}
                               placeholder={this.state.label.message}
                           />
                       </Box>

                       <Box w="70%">
                           <TextInput
                               disabled={this.state.content.disabled}
                               onChange={this.setContent}
                               placeholder={this.state.content.message}
                           />
                       </Box>

                   </HStack>
               </Box>
           </VStack>
       );
    }
}*/

export {SaveArea};