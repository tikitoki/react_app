import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import BpmTest from '../Tools/BpmTest'
import TestPhotoTransform from '../Tools/TestPhotoTransform'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ReactHook from './ReactHook'

const Div = styled.div`
    // background-color:#d74234;
`;

const react_hook_component=ReactHook;

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Div className="header">
                    <BrowserRouter>
                        <div className="nav">
                            <Link to="/">Home</Link>
                            <Link to="/tools/bpm_test">BpmTest</Link>
                            <Link to='/react_hook'>ReactHook</Link>
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


const Home = () => {
    // const [count,setCount]=useState(0);
    // setCount(prevCount=>prevCount+1);
    setTimeout(() => {
        
    }, timeout);
    return (
        <div className="route-page">
            <h1>Home Page</h1>
        </div>)
};

export default App;