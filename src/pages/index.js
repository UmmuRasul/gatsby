import React from "react"

//import React, {Component} from "react"
// class Swahilibox extends Component {

// }

// import Header from '../component/header'

//func components
class Swahilibox extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        index:0,
    }
}
    render(){

        const resetCounter = ()=> this.setState({ index:0 })

        return(
            <div>
            <h1>Iam learning react!</h1>
            <p>current index:{""}
                {this.state.index}
            </p>
            <button onClick={() =>
                this.setState({
                   index: this.state.index +5,
                })
                }
                >
                Bump index
                </button>
                <button onClick={resetCounter}>Reset</button>
            </div>
        )
    }
}

export default Swahilibox
// export default () => <div>SwahiliBox<Header  workshopNumber={677}/></div>