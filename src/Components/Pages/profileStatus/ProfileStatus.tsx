import React, {ChangeEvent} from "react";
import {BsFillPencilFill} from "react-icons/bs";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state: StateType = {
        editMode: false,
        status: this.props.status
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
        })
        this.props.updateStatus(this.state.status)
        //setState - асинхронный
    }

    onChangeStatus(value: string) {

        this.setState({
            status: value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onDoubleClick={() => {
                            this.activateEditMode()
                        }}>
                            {this.props.status || "----"}
                             <BsFillPencilFill/>
                        </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.onChangeStatus(e.currentTarget.value)}
                        autoFocus={true}
                        onBlur={() => this.deactivateEditMode()}
                        value={this.state.status}
                        type="text"
                    />
                </div>
                }
            </div>
        )
    }
}


