import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import BpmTest from '../Tools/BpmTest'
import TestPhotoTransform from '../Tools/TestPhotoTransform'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ReactHook from '../Home/ReactHook'
import Home from '../Home/Home'

const Div = styled.div`
    // background-color:#d74234;
`;

const react_hook_component = ReactHook;

class GlobalNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Div className="">
                    <BrowserRouter>
                        <div className="nav">
                            <ul className="page-list">
                                <li><Link to="/"><span>Home</span></Link></li>
                                <li><Link to="/tools/bpm_test"><span>BpmTest</span></Link></li>
                                <li><Link to="/react_hook"><span>ReactHook</span></Link></li>
                                <li><Link to="/tools/test_photo_transform"><span>TestPhotoTransform</span></Link></li>
                                <li><Link to="/tools/canvas_showcase"><span>CanvasShowcase</span></Link></li>
                            </ul>
                        </div>
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={500}
                                    classNames="nav-item"

                                >
                                    <Switch location={location}>
                                        <Route path="/" exact component={Home} />
                                        <Route path="/tools/bpm_test" component={BpmTest} />
                                        <Route path="/react_hook" component={react_hook_component} />
                                        <Route path="/tools/test_photo_transform" component={TestPhotoTransform} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />

                    </BrowserRouter>
                </Div>
            </React.Fragment>
        );
    }
}


export default GlobalNav;