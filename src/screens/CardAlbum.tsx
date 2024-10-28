import { useState } from "react"
import { TitleApp, CardBiography, Card, Menu } from "../components"
import '../components/css/CardAlbum.css'




export const CardAlbum = () => {

  const [pictures, ] = useState([
    {
      id:1,
      imagen:'https://img.freepik.com/fotos-premium/fotografias-alegres-familia-estadounidense-cada-album-familiar_1199394-210114.jpg?w=740',
      titlePhoto:'Gradiacion Steve Hermano Menor',
      descPhoto:'Dia de orgullo para Francisco al ver terminar sus estudios su hermano.',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
     
    },
    {
      id:2,
      imagen:'https://i.pinimg.com/564x/f3/21/d7/f321d7ea9c83a818236856087dd882c9.jpg',
      titlePhoto:'Un día Especial',
      descPhoto:'Casamiento Arquitecto con su amada esposa Veronica Fernandez',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
      

    },
    {
      id:3,
      imagen:'https://media.istockphoto.com/id/628529940/es/foto/pareja-se-divierte-en-el-muelle-al-atardecer-cerca-del-lago.jpg?s=2048x2048&w=is&k=20&c=6kbwrTdBAggPL6UDzFWdPwXZmuiMwYo3cvqrYOZvQPQ=',
      titlePhoto:'Amor en el Lago ',
      descPhoto:'Un dia romantico con su esposa Veronica, momento inolvidable en la vida de Francisco',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'

    },
    {
      id:4,
      imagen:'https://media.gettyimages.com/id/150484468/es/foto/confidence-woman-sitting-on-car.jpg?s=1024x1024&w=gi&k=20&c=QHNt-qiJAdP6MZh0xbBjrFTe0apW-I8fANnULObhXXU=',
      titlePhoto:'Veronica',
      descPhoto:'Foto de Veronica favorita de Fransicsco, siempre aseguro que este momento jamas lo olvidaria a traves del tiempo ',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
    },
    {
      id:5,
      imagen:'https://img.freepik.com/fotos-premium/fotografias-alegres-familia-estadounidense-cada-album-familiar_1199394-210114.jpg?w=740',
      titlePhoto:'Gradiacion Steve Hermano Menor',
      descPhoto:'Dia de orgullo para Francisco al ,ver terminar sus estudios su hermano.',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
    },
    
   
    {
      id:8,
      imagen:'https://st3.depositphotos.com/1037987/15109/i/450/depositphotos_151097508-stock-photo-portrait-of-friends-with-drinks.jpg',
      titlePhoto:'Año Nuevo',
      descPhoto:'Reunion de viejos amigo, un dia para recordar',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
        
    },
    {
      id:9,
      imagen:'https://media.vogue.es/photos/5cc70dc2860daa5cdcbbba40/master/w_1600%2Cc_limit/nostalgia_dia_de_la_madre_fotos_antiguas_madres_e_hijas_135987185.jpg',
      titlePhoto:'Sus primero alimentos',
      descPhoto:'Un dia normal no tan normal',
      more:'https://us.as.com/actualidad/43-aniversario-de-la-muerte-de-john-lennon-quien-le-mato-como-y-por-que-n/'
        
    }
  ])

  return (

    <>
    <TitleApp/>
    <CardBiography/>
    <Menu/>

    <div className='titleCard' >Memories to remember</div>

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


