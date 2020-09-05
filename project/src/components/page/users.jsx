import React, { Component } from 'react'
import './../../styles/tables.css'

export default class users extends Component {
    render() {
        return (
            <div>
                <td className="table-division">
  <div>{this.name}</div>
</td>
<td className="table-division">
  <div>{this.mail}</div>
</td>
<td className="table-division">
  <a href="/product_edit/{{this._id}}" data-id-sneaker="{{this._id}}" className="fa fa-edit table-icon"></a>
</td>
<td className="table-division">
  <span className="fa fa-trash table-icon" data-id-sneaker="{{this._id}}"  aria-hidden="true"></span>
</td>
            </div>
        )
    }
}



