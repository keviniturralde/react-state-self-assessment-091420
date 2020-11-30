import React from 'react';
import {yes, no} from './objects'

class Drake extends React.Component {

    state = {
        viewCard: false 
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                viewCard: !prevState.viewCard
            }
        })
    }

    render() {
        return (
            <>
                {this.state.viewCard ? (<h1>{yes["yes-statement"]}</h1>) : (<h1>{no["no-statement"]}</h1>)}
                {this.state.viewCard ? (<img onClick={this.handleClick} alt="yes-drake" src={yes["yes-image"]}/>) : (<img onClick={this.handleClick} alt="no-drake" src={no["no-image"]}/>)}
            </>   
        )
    }
}


export default Drake;