import React from "react";
import {Button} from "@chakra-ui/button";

/*
class Save extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "Save",
            activeLabel:props.activeLabel
        }
    }

    setActiveLabel=(label)=>{
        this.props.setActiveLabel(label);
        this.setState({activeLabel:label})
    }

    render() {
        return(
            <Button
                colorScheme="blackAlpha"
                fontSize="xl"
                onClick={()=>{this.setActiveLabel("save")}}
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
const SaveLabel:React.FC<IProps> = (iprops:IProps)=>{
    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={()=>{}}
            w={["32", "40"]}
        >
            Save
        </Button>

    );
}
export {SaveLabel};