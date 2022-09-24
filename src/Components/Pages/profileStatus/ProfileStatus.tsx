import React from "react";

type ProfileStatusPropsType = {
    status: string;
}

type StateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state: StateType = {
        editMode: false
    }

    activateEditMode() {
        debugger
        this.setState({
            editMode: true
        })//setState - асинхронный
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })//setState - асинхронный
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onDoubleClick={() => {
                            console.log("fghj")
                            this.activateEditMode()
                        }}>
                            {this.props.status}
                        </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={() => this.deactivateEditMode()}
                           value={this.props.status}
                           type="text"/>
                </div>
                }


            </div>
        )
    }
}


