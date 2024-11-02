import { useState } from "react"
import { TitleApp, CardBiography, Card, Menu, /*LoginPage*/ } from "../components"
import '../components/css/CardAlbum.css'
import { Footer } from "../components/Footer"




export const CardAlbum = () => {

  const [pictures, ] = useState([
    {
      id:1,
      imagen:'https://drive.google.com/thumbnail?id=1I3ln6DixA6IEJuoTHfQgu9JPz_1t473N',
      titlePhoto:'',
      descPhoto:'',
      more:''
     
    },
    {
      id:2,
      imagen:'https://drive.google.com/thumbnail?id=1WtslEJtkO1oaxRKxNwkBbsuBDRtkVMnx',
      titlePhoto:'',
      descPhoto:'',
      more:''
      

    },
    {
      id:3,
      imagen:'https://drive.google.com/thumbnail?id=1u54o6T79LkDhmxxhM0AIUBpNsBsEfMo6',
      titlePhoto:'',
      descPhoto:'',
      more:''

    },
    {
      
      id:4,
      imagen:'https://drive.google.com/thumbnail?id=1qb3h4roCzTfz37oSt_1hKKZXAG1rTlNz',
      titlePhoto:'',
      descPhoto:' ',
      more:''
    },
    {
      id:5,
      
      imagen:'https://drive.google.com/thumbnail?id=1ldPPJnfG7hOghACCGk4_1frxwPJgb3Le',
      titlePhoto:'',
      descPhoto:' ',
      more:''
    },
    
   
    {
      id:6,
      imagen:'https://drive.google.com/thumbnail?id=1XtJtmKi60D_AFY8wXtRxVwiAeK0BkAWR',
      titlePhoto:'',
      descPhoto:' ',
      more:''
        
    },
    {
      id:7,
      imagen:'https://drive.google.com/thumbnail?id=1CmS9u6ukAQKT9RfV7xVjE1aQOVmb6yPl',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:8,
      
      imagen:'https://drive.google.com/thumbnail?id=1fsN_rlGn4h4AkM2zN9Jc6zdGyCy_HDDv',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:9,
      imagen:'https://drive.google.com/thumbnail?id=1OsnvipV6AS7aRthHqNHJ5XdhNnb8_ei3',
      titlePhoto:'',
      descPhoto:'',
      more:''
     
    },
    {
      id:10,
      imagen:'https://drive.google.com/thumbnail?id=1BfqkrFz0L70dIaUkGMueydk-1REvyvXN',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:11,
      imagen:'https://drive.google.com/thumbnail?id=1TRHuTHnO2tAQrnD_0bmiByGAX_DY9INB',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:12,
      imagen:'https://drive.google.com/thumbnail?id=1-WTlsAKye4u8itS5WvKAeHSOHqKIl0BZ',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:13,
      imagen:'https://drive.google.com/thumbnail?id=1FKcjZHNQ3gXZ3I-npdalM81g09KAaNRT',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    },
    {
      id:14,
      imagen:'https://drive.google.com/thumbnail?id=1BRzEBgfF5ay4JpUoQN5xcRms1o84N8ie',
      titlePhoto:'',
      descPhoto:'',
      more:''
        
    }

    

    


    


  ])

 

  return (

    <>
    
    <TitleApp/>
    <CardBiography/>
    <Menu/>

    <div className='titleCard' >Memorias</div>
    

    <div className="bodyAlbum">

      {pictures.map(picture => {
        return(
          <Card
          key={picture.id}
          imagen={picture.imagen}
          titlePhoto={picture.titlePhoto}
          descPhoto={picture.descPhoto}
          more={picture.more}
           />
        )
      })}


    </div>

    <Footer/>


    </>
    


  )
}


