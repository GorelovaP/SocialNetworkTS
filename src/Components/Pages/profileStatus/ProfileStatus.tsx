import React, {ChangeEvent} from "react";
import {BsFillPencilFill} from "react-icons/bs";
import s from "./Status.module.css"

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void
    userId?: number
    loggedUserId: number
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


        return (<>
                {
                    this.props.userId !== this.props.loggedUserId ?
                        <div>
                            <h3 className={s.status}>
                                {this.props.status || "----"}
                            </h3>
                        </div>
                        :
                        <div>
                            {!this.state.editMode &&
                            <div>
                                <h3 className={s.status} onDoubleClick={() => {
                                    this.activateEditMode()
                                }}>
                                    {this.props.status || "----"}
                                    <BsFillPencilFill className={s.icon}/>
                                </h3>
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
                                    className={s.status}
                                />
                            </div>
                            }
                        </div>
                }
            </>
        )
    }

}


