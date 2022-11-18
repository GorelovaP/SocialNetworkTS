import './App.css';

import React, {ComponentType} from 'react';

import {Nav} from "./Components/Nav/Nav";
import {withRouter} from "./Components/Pages/PagesContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseAppTC, setAppErrorAC} from "./Redux/app-reduсer";
import {reduxStateType} from "./Redux/redax-store";
import {Preloader} from "./Components/common/preloader/Preloader";
import {PagesRouters} from "./routes/PagesRouters";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {SnackBar} from "./Components/common/snackBar/SnackBar";


class App extends React.Component<appPropsType> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        return !this.props.initialised ? <Preloader/> : (
            <div className='app-wrapper'>
                <Nav userId={this.props.userId}/>
                <div className='app-wrapper-area-content'>
                    <div className="main-container">
                        <HeaderContainer/>
                        <PagesRouters/>
                    </div>
                </div>
                {this.props.appError && <SnackBar text={this.props.appError} setAppErrorNull={this.props.setAppError}/>}
            </div>
        );
    }
}


type MapDispatchToProps = {
    initialiseApp: () => void
    setAppError: (error: string) => void
}
type MapStateToPropsType = {
    initialised: boolean
    userId: string | null
    appError: string
}
const mapStateToProps = (state: reduxStateType) => ({
    initialised: state.app.initialized,
    appError: state.app.error,
    userId: state.auth.data.userId
})

export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initialiseApp: initialiseAppTC,
        setAppError: setAppErrorAC
    }))(App);


type appPropsType = MapDispatchToProps & MapStateToPropsType