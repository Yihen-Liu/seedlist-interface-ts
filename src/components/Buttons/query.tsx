import React from "react";
import {Button} from "@chakra-ui/button";
import QueryPubSub from "../../eventbus/query";

/*
class Query extends React.Component {
   constructor(props) {
       super(props);
       this.enableQuery = this.enableQuery.bind(this);
       this.state = {
           message:"Qurey",
           spacename:"",
       }
   }

   changeSpaceName = (msg)=> {
        this.setState({spacename: msg});
   }

   componentDidMount() {
       QueryPubSub.on("ChangeSpaceNameInQuery", this.changeSpaceName);
   }

   componentWillUnmount() {
       QueryPubSub.off("ChangeSpaceNameInQuery", this.changeSpaceName);
   }

    enableQuery(){
       this.props.setPwdDrawerActive(true);
    }

   render() {
       return(
           <Button
               colorScheme="blackAlpha"
               fontSize="xl"
               onClick={this.enableQuery}
               w="100%"
           >
               {this.state.message}
           </Button>
       );
   }
}
*/
interface IProps {

}

const QueryButton:React.FC<IProps> = ()=>{
   return(
       <Button
           colorScheme="blackAlpha"
           fontSize="xl"
           onClick={()=>{} }
           w="100%"
       >
          Query
       </Button>
   );
}

export {QueryButton};