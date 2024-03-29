import React, {useEffect, useState} from 'react';
import {
    profileType,
    setIsChangedInformationAC,
    updateProfileInformationTC
} from "../../../redux/profilePage-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css"
import {BsFillPencilFill} from "react-icons/bs";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/redax-store";

type ProfileInfoType = {
    profile: profileType
    status: string
    loggedUserId: number
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const [profileChange, setChangeProfile] = useState<profileType>(props.profile)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        setChangeProfile(props.profile)
    }, [props.profile.fullName, props.profile.aboutMe, props.profile.lookingForAJobDescription, props.profile.contacts.website, props.profile.contacts.instagram, props.profile.contacts.github])

    useEffect(() => {

    }, [])
    const setIsChange = () => {
        dispatch(setIsChangedInformationAC(true))
    }

    const URL = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%\/@]+)*([^\/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

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
            fullName: Yup.string().max(30, "Max length 30 symbols").required('* Subject field is required'),
            aboutMe: Yup.string().max(60, "Max length 60 symbols").required('* Subject field is required'),
            lookingForAJobDescription: Yup.string().required('* Subject field is required'),
            website: Yup.string().matches(URL, 'Enter a valid url').required('* Subject field is required'),
            github: Yup.string().matches(URL, 'Enter a valid url').required('* Subject field is required'),
            instagram: Yup.string().matches(URL, 'Enter a valid url').required('* Subject field is required'),
        }),
        onSubmit: values => {
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
            <h3 className={s.info}>Info
                {!props.profile.isChanged && props.profile.userId === props.loggedUserId &&
                <BsFillPencilFill onClick={setIsChange} className={s.pencil}/>}</h3>
            <form name="info" onSubmit={formik.handleSubmit}>
                <div className={s.infoArea}>
                    <div className={s.block}>
                        <span className={s.label}>FullName:</span>
                        {props.profile.isChanged ? <> <input type="text"
                                                             className={s.styledInput}
                                                             {...formik.getFieldProps("fullName")}
                        />
                            {formik.errors.fullName && formik.touched.fullName ? (
                                <span className={s.error}>{formik.errors.fullName}</span>
                            ) : null}
                        </> : <span>{profileChange!.fullName}</span>}
                    </div>
                    <div className={s.block}>
                        <span className={s.label}>AboutMe:</span>
                        {props.profile.isChanged ? <>
                            <input type="text"
                                   className={s.styledInput}
                                   {...formik.getFieldProps("aboutMe")}
                            />
                            {formik.errors.aboutMe && formik.touched.aboutMe ? (
                                <span className={s.error}>{formik.errors.aboutMe}</span>
                            ) : null} </> : <span>{profileChange!.aboutMe !== "" ? profileChange!.aboutMe : "-"}</span>}
                    </div>
                    <div className={s.block}>
                        <span className={s.label}>Description:</span>
                        {props.profile.isChanged ? <><input type="text"
                                                            className={s.styledInput}
                                                            {...formik.getFieldProps("lookingForAJobDescription")}
                            /> {formik.errors.lookingForAJobDescription && formik.touched.lookingForAJobDescription ? (
                                <span className={s.error}>{formik.errors.lookingForAJobDescription}</span>) : null}
                            </> :
                            <span>{profileChange!.lookingForAJobDescription !== "" ? profileChange!.lookingForAJobDescription : "-"}</span>}
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className={s.info}> Contacts </h3>
                        <div className={s.block}>
                            <span className={s.label}>Website:</span>
                            {props.profile.isChanged ? <> <input type="text"
                                                                 className={s.styledInput}
                                                                 {...formik.getFieldProps("website")}
                                />
                                    {formik.errors.website && formik.touched.website ? (
                                        <span className={s.error}>{formik.errors.website}</span>) : null}
                                </> :
                                <span>{profileChange!.contacts.website !== "" ?
                                    <a className={s.link}
                                       href={profileChange!.contacts.website}>{profileChange!.contacts.website}</a> : "-"}</span>}

                        </div>
                        <div className={s.block}>
                            <span className={s.label}>Github:</span>
                            {props.profile.isChanged ? <> <input type="text"
                                                                 className={s.styledInput}
                                                                 {...formik.getFieldProps("github")}
                                /> {formik.errors.github && formik.touched.github ? (
                                    <span className={s.error}>{formik.errors.github}</span>) : null}
                                </> :
                                <span>{profileChange!.contacts.github !== "" ?
                                    <a className={s.link}
                                       href={profileChange!.contacts.github}>{profileChange!.contacts.github}</a> : "-"}</span>}
                        </div>
                        <div className={s.block}>
                            <span className={s.label}>Instagram:</span>
                            {props.profile.isChanged ? <> <input type="text"
                                                                 className={s.styledInput}
                                                                 {...formik.getFieldProps("instagram")}
                                /> {formik.errors.instagram && formik.touched.instagram ? (
                                    <span className={s.error}>{formik.errors.instagram}</span>) : null}
                                </> :
                                <span>{profileChange!.contacts.instagram !== "" ?
                                    <a className={s.link}
                                       href={profileChange!.contacts.instagram}>{profileChange!.contacts.instagram}</a> : "-"}</span>}
                        </div>
                    </div>
                </div>
                {props.profile.isChanged && <button type={"submit"} className={s.submitBtn}> Save </button>}
            </form>
        </div>
    );
}

