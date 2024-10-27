
import { Routes, Route, Navigate } from 'react-router-dom'
import './config/theme/App.css'
import { Biografia, CardAlbum,} from './screens'


import './screens/css/PrincipalCss.css'
import { CardVideos } from './components'



function App() {
  

  return (
    <>
     < div className="body">

     

    <Routes>
      
      <Route path='/fotos' element={<CardAlbum/>}/>
      <Route path='/videos' element={<CardVideos/>}/>
      <Route path='/biografia' element={<Biografia/>}/>

      <Route path='/*' element={ <Navigate to = '/fotos' />} />


    </Routes>


    </div>
     
    </>
  )
}

export default App
