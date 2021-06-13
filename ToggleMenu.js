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
    render() {
        const {children}=this.props;
        return children({
                on:this.state.on,
                toggle:this.toggle
            });
    }
}