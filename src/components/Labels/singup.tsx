import React from "react";
import {Button} from "@chakra-ui/button";
import {Tooltip} from "@chakra-ui/react";

/*
class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message:"Signup",
            activeLabel: props.activeLabel
        }
    }

    setActiveLabel=(label)=>{
        this.props.setActiveLabel(label);
        this.setState({activeLabel:label})
    }

    render() {
        return(
            <Tooltip placement="left" hasArrow={true} fontSize={18} label="User have to sign up a spacename before save or query content.">
                <Button
                colorScheme="blackAlpha"
                fontSize="xl"
                onClick={()=>this.setActiveLabel("signup")}
                w={["32", "40"]}
            >
                {this.state.message}
            </Button>
            </Tooltip>
        );
    }
}
*/

interface IProps {

}
const SignupLabel:React.FC<IProps> = (props:IProps) =>{
    return(
        <Tooltip placement="left" hasArrow={true} fontSize={18} label="User have to sign up a spacename before save or query content.">
            <Button
                colorScheme="blackAlpha"
                fontSize="xl"
                onClick={()=>{}}
                w={["32", "40"]}
            >
                Sign Up
            </Button>
        </Tooltip>
    );
}
export {SignupLabel};