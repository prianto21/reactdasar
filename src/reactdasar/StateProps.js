import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {

    constructor(props){
        super(props)
        this.state={
            makanan: 'Bakso',
            minuman: 'jus'
        }
    }

    gantimakanan(makanan_baru){
        this.setState({
            makanan:makanan_baru
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <h3>{this.state.minuman}</h3>
                <button onClick={()=>this.gantimakanan("sate")}>ganti makanan</button>
                <button onClick={()=>this.setState({minuman: "Teh"})}>ubah minuman</button>

                <Operan minuman={this.state.minuman}/>
            </div>
        )
    }
}
