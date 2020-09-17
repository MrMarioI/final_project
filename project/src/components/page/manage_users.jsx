import React from 'react'
import './../../styles/tables.css'

export default function Manage_users() {
    // state = {
  //   users: []
  // }

  // async componentDidMount () {
  //   const apiRes = await handler.getAll()
  //   this.setState({ users: apiRes.data })
  // }
  // const { users } = this.state;
    return (
        <div>
          <h1 className='form-title'>Edition et suppression des users !</h1>
             <ul className="dashadm">
      <a className="adadmin" href="/dashboard-admin">Retour au tableau de bord</a>
      <a className="adadmin" href="/manage_posts">Manager le contenu</a>
      <a className="adadmin" href="/manage_users">Manager les utilisateurs</a>
      </ul>
      <hr/>
<h1 className='form-title'>Liste des utilisateurs </h1>
<div className="table">
            <table className="product-manage-table">
    <thead>
      <tr className="table-row">
        <th className="table-head">Nom utilisateurs</th>
        <th className="table-head">Mail utilisateurs</th>
        <th className="table-head">Edit</th>
        <th className="table-head">Delete</th>
      </tr>
    </thead>

    <tbody>
      {/* {{#each users}} */}
      <tr className="table-row">
        {/* {{> users}} */}
      </tr>
      {/* {{/each}} */}
      {/* {{#unless users}} */}
      <tr>
        <td colspan="6">Aucun utilisateur pour le moment...</td>
      </tr>
      {/* {{/unless}} */}
    </tbody>
  </table>
        </div>
        </div>
    )
}
