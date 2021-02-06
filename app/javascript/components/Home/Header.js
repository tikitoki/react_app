import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import BpmTest from '../Tools/BpmTest'
import TestPhotoTransform from '../Tools/TestPhotoTransform'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
// import Home from './Home'

const Div = styled.div`
    // background-color:#d74234;
`;

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Div className="header">
                    <img className="icon header-icon" src="/images/logo.jpeg" alt="" width="50px" height="50px" />
                    <div className="header-items">
                        <a href="#">食天下是个什么网站</a>
                        <a href="#">新用户注册</a>
                        <a href="#">登录</a>
                    </div>
                    <BrowserRouter>
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={500}
                                    classNames="item"

                                >
                                    <Switch>
                                        <Route path="/" exact component={Home} />
                                        <Route path="/tools/bpm_test" component={BpmTest} />
                                        
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

//doesn't work
// Home(){
//     <div>
//         <h1>Home Page</h1>
//     </div>
// }

//works
// function Home(){
//     <div>
//         <h1>Home Page</h1>
//     </div>
// }


//doesn't work
// Home=function(){
//     <div>
//         <h1>Home Page</h1>
//     </div>
// }

// works
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/tools/bpm_test">
                <p>食天下是个什么网站</p>
            </Link>
        </div>)
};

export default Header;