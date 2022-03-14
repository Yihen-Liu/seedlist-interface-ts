import React from "react";
import {QueryArea} from "./query";
import {SaveArea} from "./save";
import {SignupArea} from "./signup";

interface IProps {
}

const InputAreas:React.FC<IProps> = (props:IProps) => {
    return(
        <div>

        </div>
    );
}

/*
class InputAreas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            interactInputs: "",
            activeLabel: props.activeLabel
        }
    }

    setActiveLabel = (label) =>{
        this.setState({activeLabel:label});
        this.props.setActiveLabel(label);
    }

    render() {
        if(this.state.activeLabel=="no"){
            this.state.interactInputs = <SignupArea activeLabel={this.state.activeLabel} setActivelabel={this.setActiveLabel} />;
        }

        if(this.state.activeLabel=="signup"){
            this.state.interactInputs = <SignupArea activelabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel} />;
        }

        if(this.state.activeLabel=="save"){
           this.state.interactInputs = <SaveArea activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel} />;
        }

        if(this.state.activeLabel=="query"){
            this.state.interactInputs = <QueryArea activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel} />;
        }
        return (
            <div>
                {this.state.interactInputs}
            </div>
        );
    }
}
*/

export {InputAreas} ;