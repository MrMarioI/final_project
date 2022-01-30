import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Authentication
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import AuthProvider from "./components/auth/AuthProvider";

// IMPORT PAGES

import About from './components/page/about'
import Concert from './components/page/concert'
import MainGallery from './components/main_gallery'
import Gallery from './components/gallery'
import Home from './components/page/home'
import Contact from './components/page/contact'
import Dashboard_user from './components/page/dashboard_user'
import DashboardAdmin from './components/page/dashboard_admin'
import SignIn from './components/page/signin'
import Signup from './components/page/signup'
import NotFound from './components/page/notFound.jsx'
import NavMain from './components/nav/navMain.jsx'
import Manage_users from './components/page/manage_users'
import ManagePosts from './components/page/manage_posts'
import UserGallery from './components/page/user_gallery'
import Add_photos from './components/add_photos'
import Footer from './components/footer/footer'
import Mentions from './components/footer/mentions'

// IMPORT STYLES
import './styles/App.css'
import './styles/photos.css'
import './styles/footer.css'

function App () {
  return (
    <div className='App'>
        <AuthProvider>

      <NavMain />

      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/concert' component={Concert} />
          <Route path='/galeries/:name' component={MainGallery} />
          <Route path='/galerie/:name' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <ProtectedRoute path='/dashboard/' component={Dashboard_user} />
          <ProtectedRoute path='/dashboard' component={DashboardAdmin}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={Signup} />
          <Route path='/mentions' component={Mentions} />
          <Route path='/manage_users' component={Manage_users} />
          <Route path='/manage_posts' component={ManagePosts} />
          <Route path='/user_gallery' component={UserGallery} />
          <Route path='/add_photos' component={Add_photos} />

          <Route path='*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
