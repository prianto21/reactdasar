import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        return (
            <div>
                <h2>Operan yang menjadi Props: {this.props.minuman}</h2>
            </div>
        )
    }
}
