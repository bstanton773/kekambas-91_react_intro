import React, { Component } from 'react'

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = {
            kekambas: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => this.setState({kekambas: data}))
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Kekambas Class</h1>
                <ul>
                    {this.state.kekambas.map(k => <li key={k.id}>{k.first_name} {k.last_name}</li>)}
                </ul>
            </>
        )
    }
}
