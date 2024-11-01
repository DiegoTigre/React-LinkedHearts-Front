import { Link } from 'react-router-dom';
import './css/Menu.css';


export const Menu = () => {
  return (
    <>
    <nav>
    <ul>
  <li><Link to= '/React-LinkedHearts-Front'>Memorias</Link></li>
  <li><Link to='/React-LinkedHearts-Front/videos'>Video Memorias</Link></li>
  <li><a href="/React-LinkedHearts-Front/">Linea del Tiempo</a></li>
  <li><Link to='/React-LinkedHearts-Front/biografia'>Biografia</Link></li>
   </ul>
   </nav>
    </>
  )
}
