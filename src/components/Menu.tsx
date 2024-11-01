import { Link } from 'react-router-dom';
import './css/Menu.css';


export const Menu = () => {
  return (
    <>
    <nav>
    <ul>
  <li><Link to= '/'>Picture Memories</Link></li>
  <li><Link to='/videos'>video Memories</Link></li>
  <li><a href="contact.asp">Time line</a></li>
  <li><Link to='/biografia'>Knowing More</Link></li>
   </ul>
   </nav>
    </>
  )
}
