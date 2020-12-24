import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({// асинхронний
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
                status: e.currentTarget.value
            });
    }

    render() {
        return (<div>
            Profile status:
            {!this.state.editMode &&
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
            }
            {this.state.editMode &&
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                   value={this.state.status}/>
            }

        </div>)
    }
}

export default ProfileStatus;