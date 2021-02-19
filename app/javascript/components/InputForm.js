import React, { Component } from 'react'
import styled from 'styled-components'

const P=styled.p`
    margin:0;
    color: rgba(200,0,0,1);
    font-weight: bold;
    font-size: 0.8rem;
`;


export default class InputForm extends Component {
    render() {
        if(this.props.showWarning){
            return (
                <div>
                    <P className="animate__animated animate__shakeX">无效的值</P>
                    <input maxlength={this.props.maxLength} form="text" value={this.props.value} onChange={this.props.onChangeFunction}></input>
                </div>
            )
        }
        else{
            return (
                <div>
                    <P style={{opacity:0}}>无效的值</P>
                    <input maxlength={this.props.maxLength} form="text" value={this.props.value} onChange={this.props.onChangeFunction}></input>
                </div>
            )
        }
    }
}
