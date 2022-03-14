import React from "react";
import {Button} from "@chakra-ui/button";

/*
class Query extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         message:"Query",
          activeLabel:props.activeLabel
      }
   }

    setActiveLabel = (label)=>{
        this.props.setActiveLabel(label);
        this.setState({activeLabel:label})
    }

   render() {
     return(
         <Button
             colorScheme="blackAlpha"
             fontSize="xl"
             onClick={()=>{this.setActiveLabel("query")}}
             w={["32", "40"]}
         >
             {this.state.message}
         </Button>
     );
   }
}
*/

interface IProps {

}

const QueryLabel:React.FC<IProps> = (props:IProps)=>{
    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={()=>{}}
            w={["32", "40"]}
        >
            Query
        </Button>
    );
}
export {QueryLabel};