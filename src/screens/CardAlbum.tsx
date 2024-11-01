import { useState } from "react"
import { TitleApp, CardBiography, Card, Menu, /*LoginPage*/ } from "../components"
import '../components/css/CardAlbum.css'




export const CardAlbum = () => {

  const [pictures, ] = useState([
    {
      id:1,
      imagen:'https://drive.google.com/thumbnail?id=1I3ln6DixA6IEJuoTHfQgu9JPz_1t473N',
      titlePhoto:'Compartiendo',
      descPhoto:'Con los pequeños de la casa.',
      more:''
     
    },
    {
      id:2,
      imagen:'https://drive.google.com/thumbnail?id=1WtslEJtkO1oaxRKxNwkBbsuBDRtkVMnx',
      titlePhoto:'Un día Especial',
      descPhoto:'Reunion con todos los nietos.',
      more:''
      

    },
    {
      id:3,
      imagen:'https://drive.google.com/thumbnail?id=1u54o6T79LkDhmxxhM0AIUBpNsBsEfMo6',
      titlePhoto:'Playa',
      descPhoto:'Un dia de esparicimiento',
      more:''

    },
    {
      
      id:4,
      imagen:'https://drive.google.com/thumbnail?id=1qb3h4roCzTfz37oSt_1hKKZXAG1rTlNz',
      titlePhoto:'Veronica',
      descPhoto:'Foto de Veronica favorita de Fransicsco, siempre aseguro que este momento jamas lo olvidaria a traves del tiempo ',
      more:''
    },
    {
      id:5,
      
      imagen:'https://drive.google.com/thumbnail?id=1ldPPJnfG7hOghACCGk4_1frxwPJgb3Le',
      titlePhoto:'Dia de Jubilo',
      descPhoto:'Casamiento ',
      more:''
    },
    
   
    {
      id:6,
      imagen:'https://drive.google.com/thumbnail?id=1XtJtmKi60D_AFY8wXtRxVwiAeK0BkAWR',
      titlePhoto:'Don Badillo',
      descPhoto:'Foto ',
      more:''
        
    },
    {
      id:7,
      imagen:'https://drive.google.com/thumbnail?id=1CmS9u6ukAQKT9RfV7xVjE1aQOVmb6yPl',
      titlePhoto:'Cenando en Familia',
      descPhoto:'Un dia normal no tan normal con los nietos',
      more:''
        
    },
    {
      id:8,
      
      imagen:'https://drive.google.com/thumbnail?id=1fsN_rlGn4h4AkM2zN9Jc6zdGyCy_HDDv',
      titlePhoto:'Cumpleaños',
      descPhoto:'Celebrando un año mas de uno de sus nietos mas especiales.',
      more:''
        
    },
    {
      id:9,
      imagen:'https://drive.google.com/thumbnail?id=100qnosM-SCEJ368x3p8IEFT_iU0ti1aG',
      titlePhoto:'Real de Catorce',
      descPhoto:'Viaje familiar ',
      more:''
        
    },
    {
      id:10,
      imagen:'https://drive.google.com/thumbnail?id=1BfqkrFz0L70dIaUkGMueydk-1REvyvXN',
      titlePhoto:'Don Badillo',
      descPhoto:'Siempre compartiendo con su nieto',
      more:''
        
    },
    {
      id:11,
      imagen:'https://drive.google.com/thumbnail?id=1TRHuTHnO2tAQrnD_0bmiByGAX_DY9INB',
      titlePhoto:'Don Badillo',
      descPhoto:'Foto',
      more:''
        
    },
    {
      id:12,
      imagen:'https://drive.google.com/thumbnail?id=1-WTlsAKye4u8itS5WvKAeHSOHqKIl0BZ',
      titlePhoto:'Don Badillo',
      descPhoto:'Foto',
      more:''
        
    },
    {
      id:13,
      imagen:'https://drive.google.com/thumbnail?id=1FKcjZHNQ3gXZ3I-npdalM81g09KAaNRT',
      titlePhoto:'Regalo',
      descPhoto:'Don Badillo recbiendo un regalo emocionado.',
      more:''
        
    },
    {
      id:14,
      imagen:'https://drive.google.com/thumbnail?id=1BRzEBgfF5ay4JpUoQN5xcRms1o84N8ie',
      titlePhoto:'Descance en Paz',
      descPhoto:'Lugar de descando del Sr. Badillo',
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


    </>
    


  )
}


