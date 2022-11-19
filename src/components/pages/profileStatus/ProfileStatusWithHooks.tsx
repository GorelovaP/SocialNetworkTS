import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    return (
        <div>
            {!editMode &&
            <div>
                        <span onDoubleClick={() => {
                            setEditMode(true)
                        }}>
                            {status || "----"}
                        </span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)}
                    autoFocus={true}
                    onBlur={() => {
                        setEditMode(false)
                        props.updateStatus(status)
                    }}
                    value={status}
                    type="text"/>
            </div>
            }
        </div>
    )
}

