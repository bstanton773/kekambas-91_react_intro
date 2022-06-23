import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = {
            kekambas: []
        }
    }

    // componentDidMount(){
    //     fetch('https://kekambas-bs.herokuapp.com/kekambas')
    //         .then(res => res.json())
    //         .then(data => this.setState({kekambas: data}))
    // }

    handleClick = () => {
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => this.setState({kekambas: data}))
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Kekambas Class</h1>
                <button className='btn btn-success' onClick={this.handleClick}>Get Kekambas</button>
                <ul>
                    {this.state.kekambas.map(k => <li key={k.id}>{k.first_name} {k.last_name}</li>)}
                </ul>
                <Link to='/standings'><button className='btn btn-danger'>Go To Standings</button></Link>
            </>
        )
    }
}
