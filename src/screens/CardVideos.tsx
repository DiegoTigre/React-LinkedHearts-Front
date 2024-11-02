

import '../components/css/CardVideo.css';
import { CardBiography } from '../components/CardBiography';
import { TitleApp } from '../components/TitleApp';
import { Menu } from '../components/Menu';
import { Video } from '../components/Video';
import { useState } from 'react';
import { Footer } from '../components/Footer';



export const CardVideos = () => {

     const [videos, ] = useState([

          {
        
            id:1,
            url:'https://www.youtube.com/watch?v=04e_we-jP1o',
            
            descPhoto:'Video Homenaje',
            
        },
        
      
        
        ])
        


  return (
    <>

 

<TitleApp/>
<CardBiography/>
<Menu/>

    <div className='titleCard'>Video Memorias</div>
    <div className='bodyVideo' >

    
          {videos.map(video => {
               return(
                    <Video
                     key={video.id}
                     url={video.url}
                     descVideo={video.descPhoto}
                     />
               )
          })}
     </div>

     <Footer/>
  
 
  
    
    </>
    
  )
}


/*

     <Video
     url='https://youtu.be/jnvTEps8wMQ'
     descVideo='video disfrutando con su familia'
     />

     <Video
     url='https://youtu.be/AojCrrVKBiY'
     descVideo='Siempre listo'
     />

<Video
     url='https://youtu.be/jnvTEps8wMQ'
     descVideo='video disfrutando con su familia'
     />

<Video
     url='https://youtu.be/jnvTEps8wMQ'
     descVideo='video disfrutando con su familia'
     />

<Video
     url='https://youtu.be/jnvTEps8wMQ'
     descVideo='video disfrutando con su familia'
     /> 

     

*/