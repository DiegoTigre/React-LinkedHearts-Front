import { Link } from 'react-router-dom';
import './css/Menu.css';


export const Menu = () => {
  return (
    <>
    <nav>
    <ul>
  <li><Link to= '/React-LinkedHearts-Front'>Picture Memories</Link></li>
  <li><Link to='/React-LinkedHearts-Front/videos'>video Memories</Link></li>
  <li><a href="/React-LinkedHearts-Front/">Time line</a></li>
  <li><Link to='/React-LinkedHearts-Front/biografia'>Knowing More</Link></li>
   </ul>
   </nav>
    </>
  )
}
