import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-color:#333333;
`;

const Image1 = styled.img`
    transition:all .5s;
    position:absolute;
`;

const Image2 = styled.img`
    transition:all .5s;
    position:absolute;
`;

const Button = styled.button`
    position:absolute;
    left:200px;
    top:50px;
`;

class TestPhotoTransform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { img_style: [{},{opacity:0}] };
    }
    handleClick() {
        this.setState({ img_style:[this.state.img_style[1],this.state.img_style[0]] });
        console.log(111);
        window.addEventListener('scroll',function(){console.log("scroll listener test");console.log(window.scrollY+window.innerHeight);});
    }

    

    render() {
        return (
            <Div className="photo-transform-container route-page">
                <Image1 className="photo-transform img1" 
                src="https://static.biligame.com/deadcells/gw/pc/images/right-nav/nav-news.png?4d900a6d" 
                style={this.state.img_style[0]}/>
                <Image2 className="photo-transform img2"
                src="https://static.biligame.com/deadcells/gw/pc/images/right-nav/nav-achieve.png?38e1ca77"
                style={this.state.img_style[1]} />
                <Button onClick={() => this.handleClick()} className="tranform-button">click to transfrom</Button>
            </Div>
        )
    }

}

export default TestPhotoTransform;