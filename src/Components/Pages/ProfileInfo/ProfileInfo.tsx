import React, {useEffect, useState} from 'react';
import {profileType, updateProfileInformationTC} from "../../../Redux/profilePage-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css"
import {BsFillPencilFill} from "react-icons/bs";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../Redux/redax-store";

type ProfileInfoType = {
    profile: profileType
    status: string
    loggedUserId: number
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const [isChange, setIsChange] = useState(false)
    const [profileChange, setChangeProfile] = useState<profileType>(props.profile)
    const dispatch = useDispatch<AppDispatch>()

    // const startName = profileChange.fullName == "" ? "Start Name" : profileChange.fullName
    // const aboutMe = profileChange!.aboutMe ? "AboutMe..." : profileChange!.aboutMe
    // const lookingForAJobDescription = profileChange!.fullName ? "lookingForAJobDescription" : profileChange!.fullName
    // const website = profileChange!.contacts.website ? "website" : profileChange!.contacts.website
    // const instagram = profileChange!.contacts.instagram ? "website" : profileChange!.contacts.instagram
    // const github = profileChange!.contacts.github ? "website" : profileChange!.contacts.github

    useEffect(() => {
        setChangeProfile(props.profile)
    }, [props.profile.fullName,props.profile.aboutMe,props.profile.lookingForAJobDescription,props.profile.contacts.website,props.profile.contacts.instagram,props.profile.contacts.github])

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            website: props.profile.contacts.website,
            instagram: props.profile.contacts.instagram,
            github: props.profile.contacts.github,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('* Subject field is required'),
            aboutMe: Yup.string().required('* Subject field is required'),
            lookingForAJobDescription: Yup.string().required('* Subject field is required'),
            website: Yup.string().required('* Subject field is required'),
            github: Yup.string().required('* Subject field is required'),
        }),
        onSubmit: values => {
            setIsChange(false)
            let date = {
                userId: props.loggedUserId,
                AboutMe: values.aboutMe,
                lookingForAJob: true,
                LookingForAJobDescription: values.lookingForAJobDescription,
                FullName: values.fullName,
                contacts: {
                    github: values.github,
                    website: values.website,
                    instagram: values.instagram,
                }
            }
            dispatch(updateProfileInformationTC(date))
        }
    })

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <h3 className={s.info}>Info{!isChange &&
            <BsFillPencilFill onClick={() => setIsChange(true)} className={s.pencil}/>}</h3>
            <form name="info" onSubmit={formik.handleSubmit}>
                <div className={s.infoArea}>
                    <div className={s.block}>
                        <span className={s.label}>FullName:</span>

                        {isChange ? <input type="text"
                                           className={s.styledInput}
                                           {...formik.getFieldProps("fullName")}
                        /> : <span>{profileChange!.fullName}</span>}
                    </div>
                    <div className={s.block}>
                        <span className={s.label}>AboutMe:</span>
                        {isChange ? <input type="text"
                                           className={s.styledInput}
                                           {...formik.getFieldProps("aboutMe")}
                        /> : <span>{profileChange!.aboutMe !== "" ? profileChange!.aboutMe : "-"}</span>}
                    </div>
                    <div className={s.block}>
                        <span className={s.label}>Description:</span>
                        {isChange ? <input type="text"
                                           className={s.styledInput}
                                           {...formik.getFieldProps("lookingForAJobDescription")}
                            /> :
                            <span>{profileChange!.lookingForAJobDescription !== "" ? profileChange!.lookingForAJobDescription : "-"}</span>}
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className={s.info}> Contacts </h3>
                        <div className={s.block}>
                            <span className={s.label}>Website:</span>
                            {isChange ? <input type="text"
                                               className={s.styledInput}
                                               {...formik.getFieldProps("website")}
                                /> :
                                <span>{profileChange!.contacts.website !== "" ? profileChange!.contacts.website : "-"}</span>}

                        </div>
                        <div className={s.block}>
                            <span className={s.label}>Github:</span>
                            {isChange ? <input type="text"
                                               className={s.styledInput}
                                               {...formik.getFieldProps("github")}
                                /> :
                                <span>{profileChange!.contacts.github !== "" ? profileChange!.contacts.github : "-"}</span>}
                        </div>
                        <div className={s.block}>
                            <span className={s.label}>Instagram:</span>
                            {isChange ? <input type="text"
                                               className={s.styledInput}
                                               {...formik.getFieldProps("instagram")}
                                /> :
                                <span>{profileChange!.contacts.instagram !== "" ? profileChange!.contacts.instagram : "-"}</span>}
                        </div>
                    </div>
                </div>
                {isChange && <button type={"submit"} className={s.submitBtn}> Save </button>}
            </form>
        </div>
    );
}

