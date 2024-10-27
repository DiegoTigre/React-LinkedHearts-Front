


import { FC} from 'react';
import ReactPlayer from 'react-player'
import './css/CardVideo.css';



interface Props {
    url: string;
    descVideo: string;

}

export const Video:FC <Props> = ({url, descVideo}) => {

 

  return (
    <>

<div className='videoCard'>
        <div className='videoContent'>
          
          <div className=''>
            <ReactPlayer
            className='react-player'
            controls
            url={url}
            width='100%'
            ></ReactPlayer>
                
            <p>{descVideo}</p>
          </div>
          
        </div>

      </div>

    </>
  )
}
