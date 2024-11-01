import './css/Card.css'

import './css/Header.css'
import { Header } from './Header';

export const CardBiography = () => {

   


  return (
    <>



    <Header/>
    <div className='body'>

  

    
    
    
  <div className="cardPrincipal">
  <img className='img' src="https://drive.google.com/thumbnail?id=1XtJtmKi60D_AFY8wXtRxVwiAeK0BkAWR" 
    style={{borderRadius: 200, maxWidth: 280,}}/>
   
   <div className='textBody'>
    <h1 className="title">Arquitecto Francisco de la O.</h1>
    <h5>Sep 27 1970 - Febrero 27 2015</h5>
  
  
  
  
  <div style={{paddingLeft:25, paddingRight: 25, paddingTop:0 , borderRadius:10}}>
  <p style={{justifyContent: "center"}}>Persona memorable, noble, sencilla 
  y a la vez maravillosa, cuya partida 
  ha dejado un gran dolor y vacío en el 
  corazón .</p>
  </div>


  
  
  
  
  </div>
 
  
  
  
</div>
<div style={{textAlign: 'center', marginTop: '-150px'}}>
  <a href="https://x.com/?lang=es">Twitter<i className="fa fa-twitter"></i></a>
  <a href="https://www.linkedin.com/feed/">Linkedin<i className="fa fa-linkedin"></i></a>
  <a href="https://es-es.facebook.com/">Facebook<i className="fa fa-facebook"></i></a>
  </div>


  </div>
    
    </>
    
  )
}
