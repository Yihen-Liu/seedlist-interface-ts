import React from "react";
import {SignupButton} from "./signup";
import {SaveButton} from "./save";
import {QueryButton} from "./query";


/*
class Buttons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeLabel:props.activeLabel,
            activeButton:"",
        }
    }

    setActiveLabel = (label)=>{
        this.setState({activeLabel:label});
        this.props.setActiveLabel(label);
    }

    setPwdDrawerActive = (value)=>{
        this.props.setPwdDrawerActive(value);
    }

    render() {
        if(this.state.activeLabel=="no"){
            this.state.activeButton = <Signup activeLabel={this.state.activeLabel}/>;
        }

        if(this.state.activeLabel=="signup"){
            this.state.activeButton= <Signup activeLabel={this.state.activeLabel}/>;
        }

        if(this.state.activeLabel=="save"){
            this.state.activeButton=<Save activeLabel={this.state.activeLabel} setPwdDrawerActive={this.setPwdDrawerActive}/>;
        }

        if(this.state.activeLabel=="query"){
            this.state.activeButton=<Query activeLabel={this.state.activeLabel} setPwdDrawerActive={this.setPwdDrawerActive}/>;
        }

        return(
            <>
                {this.state.activeButton}
            </>
        );
    }
}
*/

interface IProps {

}

const Buttons:React.FC<IProps> = (props:IProps) => {
    return(
        <div>
            buttons
        </div>
    );
}

export {Buttons};