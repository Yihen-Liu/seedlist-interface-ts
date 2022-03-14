import React from "react";
import{QueryLabel} from "./query";
import {SaveLabel} from "./save";
import {SignupLabel} from "./singup";
import {ButtonGroup} from "@chakra-ui/button";
import {Center} from "@chakra-ui/layout";

/*
class Labels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLabel: props.activeLabel
        }
    }

    setActiveLabel=(label)=>{
        this.setState({activeLabel:label});
        this.props.setActiveLabel(label);
    }

    render() {
        return(
            <Center>
                <ButtonGroup spacing="1">
                    <Signup activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>
                    <Save activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>
                    <Query activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>
                </ButtonGroup>
            </Center>
        );
    }
}
*/

interface IProps {

}

const Labels:React.FC<IProps>=(props:IProps)=>{
    return(
        <Center>
            <ButtonGroup spacing="1">
                <SignupLabel />
                <SaveLabel />
                <QueryLabel />
            </ButtonGroup>
        </Center>
    );
}

export {Labels};