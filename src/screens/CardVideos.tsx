

import '../components/css/CardVideo.css';
import { CardBiography } from '../components/CardBiography';
import { TitleApp } from '../components/TitleApp';
import { Menu } from '../components/Menu';
import { Video } from '../components/Video';
import { useState } from 'react';


export const CardVideos = () => {

     const [videos, ] = useState([

          {
        
            id:1,
            url:'',
            
            descPhoto:'Video',
            
        },
        
        {
          id:2,
          url: '',
         
          descPhoto: 'Video',
        
        },
        
        {
          id:2,
          url: '',
         
          descPhoto: 'Video',
         
        },
        
        {
          id:2,
          url: '',
          
          descPhoto: 'Video',
          
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