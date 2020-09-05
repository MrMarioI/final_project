import React from 'react'
// import Commandes from './Commandes'
import './../../styles/dashboard_admin.css'
import './../../styles/tables.css'


export default function Dashboardadmin () {
  // state = {
  //   photos: []
  // }

  // async componentDidMount () {
  //   const apiRes = await handler.getAll()
  //   this.setState({ photos: apiRes.data })
  // }
  // const { photos } = this.state;
  return <div>
    <h1 className='form-title'>Bienvenue sur votre tableau de bord !</h1>
      <ul className="dashadm">
      <a className="adadmin" href="/add_photos">Ajouter une photo</a>
      <a className="adadmin" href="/manage_posts">Manager le contenu</a>
      <a className="adadmin" href="/manage_users">Manager les utilisateurs</a>
      </ul>
      <hr/>

      {/* Div + display none pour afficher les LI en mobile/tablettes */}
      {/* <h1 className='form-title'>Commandes</h1> */}

{/* <Commandes/> */}


  </div>
}
