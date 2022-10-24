import './App.css';

import React, {ComponentType} from 'react';

import {Nav} from "./Components/Nav/Nav";
import {withRouter} from "./Components/Pages/PagesContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseAppTC} from "./Redux/app-reduсer";
import {reduxStateType} from "./Redux/redax-store";
import {Preloader} from "./Components/common/preloader/Preloader";
import {PagesRouters} from "./routes/PagesRouters";
import {HeaderContainer} from "./Components/Header/HeaderContainer";


class App extends React.Component<appPropsType> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        debugger
        return !this.props.initialised ? <Preloader/> : (
            <div className='app-wrapper'>
                <Nav/>
                <div className='app-wrapper-area-content'>
                    <div className="main-container">

                            <HeaderContainer/>
                            <PagesRouters/>


                    </div>
                </div>
            </div>
        );
    }
}


type MapDispatchToProps = {
    initialiseApp: () => void
}
type MapStateToPropsType = {
    initialised: boolean
}
const mapStateToProps = (state: reduxStateType) => ({
    initialised: state.app.initialized
})

export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialiseApp: initialiseAppTC}))(App);


type appPropsType = MapDispatchToProps & MapStateToPropsType