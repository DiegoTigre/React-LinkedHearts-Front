import { Link } from 'react-router-dom';
import './css/Menu.css';


export const Menu = () => {
  return (
    <>
    <nav>
    <ul>
  <li><Link to= '/React-LinkedHearts-Front'>Memorias</Link></li>
  <li><Link to='/React-LinkedHearts-Front/videos'>Videos</Link></li>
  <li><a href="/React-LinkedHearts-Front">Linea Tiempo</a></li>
  <li><Link to='/React-LinkedHearts-Front/bio'>Bio</Link></li>
   </ul>
   </nav>
    </>
  )
}
