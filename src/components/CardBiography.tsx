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
    style={{borderRadius: '20px', }}/>
   </div>

   <div style={{
    marginTop: '-250px', 
 
    width:'100%', 
    height:'50px',
   
    textAlign:'center'

    }}>
   <div className='textBody'>
    <br></br>
    <h1 className="title">Jose Santos Badillo Cruz</h1>
    <h5>Noviembre 01 1938 - octubre  21 2008</h5>
  
  
  
  
  <div style={{paddingLeft:25, paddingRight: 25, paddingTop:0 }}>
  <p style={{justifyContent: "center"}}>Persona memorable, noble, sencilla 
  y a la vez maravillosa, cuya partida 
  ha dejado un gran dolor y vacío en el 
  corazón .</p>
  <br></br>
  </div>
 
  </div>


  
  
  
  
  </div>
 
  <br></br>
  
  
</div>
<br></br>
<div style={{ textAlign:'center',marginTop: '250px',}}>
  <a href="">Twitter<i className="fa fa-twitter"></i></a>
  <a href="">Linkedin<i className="fa fa-linkedin"></i></a>
  <a href="">Facebook<i className="fa fa-facebook"></i></a>
  </div>


  

 
    
    </>
    
  )
}
