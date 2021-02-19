import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import BpmTest from '../Tools/BpmTest'
import TestPhotoTransform from '../Tools/TestPhotoTransform'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group'
import ReactHook from '../Home/ReactHook'
import Home from '../Home/Home'
import DataVisualization from '../Tools/DataVisualization'

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
                                <li><Link to="/"><span>主页</span></Link></li>
                                <li><Link to="/tools/data_visualization"><span>数据可视化</span></Link></li>
                                <li><Link to="/react_hook"><span>项目2(空)</span></Link></li>
                                <li><Link to="/tools/test_photo_transform"><span>项目3(空)</span></Link></li>
                                <li><Link to="/tools/canvas_showcase"><span>项目4(空)</span></Link></li>
                                <li><Link to="/tools/bpm_test"><span>项目5(空)</span></Link></li>
                                {/* <li><Link to="/pages/citrus"><span>Citrus</span></Link></li> */}
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
                                        {/* <Route path="/tools/bpm_test" component={BpmTest} />
                                        <Route path="/react_hook" component={react_hook_component} />
                                        <Route path="/tools/test_photo_transform" component={TestPhotoTransform} /> */}
                                        <Route path="/tools/data_visualization" component={DataVisualization} />
                                        {/* <Route path="/pages/citrus"/> */}
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