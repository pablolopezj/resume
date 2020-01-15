import React, { Component } from "react";

class HookComponent extends Component {
    state =  {
        active: true,
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Ocultar</button>
                {this.state.active &&
                    <h1>Hook component</h1>
                }
            </div>
        );
    }
}

export default HookComponent;
