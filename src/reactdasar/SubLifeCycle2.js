import React, { Component } from 'react'

export default class SubLifeCycle2 extends Component {
    componentWillUnmount(){
        this.props.ubahHalaman("main,content")
    }
    render() {
        return (
            <div>
                <h2>halaman sub 2 </h2>
            </div>
        )
    }
}
