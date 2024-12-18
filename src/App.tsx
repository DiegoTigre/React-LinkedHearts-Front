
import { Routes, Route, Navigate } from 'react-router-dom'
import './config/theme/App.css'
import { Biografia, CardAlbum,} from './screens'


import './PrincipalCss.css'
import { CardVideos, /*LoginPage*/  } from './components'




function App() {
  

  return (
    <>
     < div className="body">

     

    <Routes>
      <Route path='/React-LinkedHearts-Front' element={<CardAlbum/>}/>
      <Route path='/React-LinkedHearts-Front/videos' element={<CardVideos/>}/>
      <Route path='/React-LinkedHearts-Front/bio' element={<Biografia/>}/>
      {/*<Route path='/login' element={<LoginPage/>}/>*/ }
      {/*<Route path='/users' element={<UsersPage/>}/>*/ }

      <Route path='/*' element={ <Navigate to = '/React-LinkedHearts-Front' />} />

  


    </Routes>


    </div>
     
    </>
  )
}

export default App

   // 