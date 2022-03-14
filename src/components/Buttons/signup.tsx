import React from "react";
import {Button} from "@chakra-ui/button";
import {WarningIcon} from "@chakra-ui/icons";
import SignUpPubSub from "../../eventbus/signup";

/*
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.enableSignup = this.enableSignup.bind(this);
        this.state = {
            BtnDrawer:"",
            message:"Sign up",
            activeLabel: props.activeLabel,
            spacename:"",
            password:""
        }
    }

    enableSignup(){

    }

    changeSpaceName = (msg)=>{
        this.setState({spacename:msg});
    }

    changePassword = (msg)=>{
        this.setState({password:msg});
    }

    componentDidMount() {
        SignUpPubSub.on("ChangeSpaceNameInSignUp", this.changeSpaceName);
        SignUpPubSub.on("ChangePasswordInSignUp", this.changePassword);
    }

    componentWillUnmount() {
        SignUpPubSub.off("ChangeSpaceNameInSignUp", this.changeSpaceName);
        SignUpPubSub.off("ChangePasswordInSignUp", this.changePassword);
    }

    invalidButton = ()=>{
        return (
        <Button
            width="100%"
            colorScheme="blackAlpha"
            disabled={true}
            size="lg"
        >
            <WarningIcon w={5} h={5} color="red.500" /> Please connect wallet firstly
        </Button>
        );
    }

    activeButton = ()=>{
        return (
            <>
                <Button
                    width="100%"
                    colorScheme="blackAlpha"
                    fontSize="xl"
                    onClick={this.enableSignup}
                >
                    {this.state.message}
                </Button>
            </>
        );
    }

    render() {
        if(this.state.activeLabel=="no") {
            this.state.BtnDrawer = this.invalidButton();
        }
        if(this.state.activeLabel =="signup"){
            this.state.BtnDrawer = this.activeButton();
        }
        return(
            <>
                {this.state.BtnDrawer}
            </>
        );
    }
}
*/

interface IProps {

}

const SignupButton:React.FC<IProps> = (props:IProps) => {
    return(
        <div>
            Sign up
        </div>
    );
}

export {SignupButton};
