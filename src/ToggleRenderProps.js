import React, { Component } from 'react'
import styled from 'styled-components'

export default class ToggleMenu extends Component {
    state={
        on:false,
    }
    toggle=()=>{
        this.setState({
            on:!this.state.on
        })
    }
    render(object) {
        const {render}=this.props;
        return (
            <div>{render({
                on:this.state.on,
                toggle:this.toggle
            })}
            </div>
        );
    }
}