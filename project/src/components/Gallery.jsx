import React, { Component } from 'react'
import Photos from './page/photos'
import axios from "axios"

export default class Gallery extends Component {
    state = {
Galeries:[]
    }


   async componentWillMount() {
        // console.log(this.props.match.params.name)
        const data = await axios.get(process.env.REACT_APP_BACKEND_URL + "/galeries")
       console.log(data)
        //  .then(res =>{
        this.setState({ galeries: this.state.photos })
  
        //  })
    }
    render() {
        // const { galerie } = this.state
        return (
            <div>
    {this.state.galeries && this.state.galeries.map((galerie, i) => (
            <div key={i} >
        <Photos props={this.state.galerie}/>
    {galerie.image}
            </div>
            ))}
            </div>
        )
    }
}
