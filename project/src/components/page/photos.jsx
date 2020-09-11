import React, { Component } from 'react'
import { ApiHandler } from './../../api/handler'
import './../../styles/tables.css'

const handler = new ApiHandler('/galeries')

export default class Photos extends Component {
  state = {
    galeries: []
  }

  async componentDidMount () {
    const apiRes = await handler.getAll()
    this.setState({ galeries: apiRes.data })
  }

  render () {
    const { galeries } = this.state
    return (
      <div>
        <div
          className='grid'
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

// import React from 'react'

// export default function photos() {
//     return (
//         <div>

//         </div>
//     )
// }
