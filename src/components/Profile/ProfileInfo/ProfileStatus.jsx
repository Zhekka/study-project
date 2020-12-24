import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        //console.log(this.state.editMode); // false
        this.setState({// асинхронний
            editMode: true
        });
        //console.log(this.state.editMode); // false
        // this.forceUpdate();// update UI
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (<div>
            Profile status:
            {!this.state.editMode &&
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            }
            {this.state.editMode &&
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
            }

        </div>)
    }
}

export default ProfileStatus;