import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Authentication
import { ProtectedRoute } from "./components/auth/ProtectedRoute";


// IMPORT PAGES

import About from './components/page/about'
import Concert from './components/page/concert'
import Gallery from './components/gallery.jsx'
import Home from './components/page/home'
import Contact from './components/page/contact'
import Dashboard from './components/page/dashboard'
import Dashboard_user from './components/page/dashboard_user'
import profilEdit from './components/profil_edit'
import SignIn from './components/page/signin'
import Signup from './components/page/signup'
import NotFound from './components/page/NotFound.jsx'
import NavMain from './components/nav/navMain.jsx'
import Manage_users from './components/page/manage_users'
import Manage_posts from './components/page/manage_posts'
import Add_photos from './components/add_photos'
import Footer from './components/footer/footer'

// IMPORT STYLES
import './styles/App.css'
import './styles/photos.css'
import './styles/footer.css'

function App () {
  return (
    <div className='App'>
      <NavMain />

      <main>
        {/* <Dashboard/> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/concert' component={Concert} />
          <Route path='/galeries/:name' component={Gallery} />
          <Route path='/contact' component={Contact} />
          {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          <Route path='/dashboard' component={Dashboard_user} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={Signup} />
          <Route path='/manage_users' component={Manage_users} />
          <Route path='/manage_posts' component={Manage_posts} />
          <Route path='/add_photos' component={Add_photos} />
          {/* <Route path='/profil_edit' component={profilEdit} /> */}

          <Route path='*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <script src='jquery.watermark.js' type='text/javascript'></script>
      <script src='/path/to/masonry.pkgd.min.js'></script>
    </div>
  )
}

export default App
