import React, { Component } from 'react'

export default class SubLifeCycle extends Component {

    componentWillUnmount(){
        this.props.ubahMakanan("Sate,Rendang")
    }
    render() {
        return (
            <div>
                <h2>Component Sub Life Cycle</h2>
            </div>
        )
    }
}
