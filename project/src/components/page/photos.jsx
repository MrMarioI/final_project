import React, { Component } from 'react'
import { ApiHandler } from './../../api/handler'
import AuthProvider from './../auth/AuthContext'
import './../../styles/tables.css'
import axios from 'axios'

const handler = new ApiHandler('/galeries')

export default class Photos extends Component {
  state = {
    galeries: []
  }

  static contextType = AuthProvider;

  async componentDidMount () {
    const apiRes = await axios.get('http://localhost:5555/photos')
    const photos = apiRes.data.filter(photo => photo.user == this.context.currentUser)
    this.setState({ galeries: photos })
  }

  render () {
    const { galeries } = this.state
    return (
      <div>
        	<h1 className="form-title">Votre galerie</h1>
        <div className='grid'
          data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
        >
          {galeries.map((galeries, i) => (
            <div key={i} className='grid-item'>
              {galeries.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

