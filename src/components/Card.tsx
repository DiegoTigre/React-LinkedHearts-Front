import { FC } from "react";





interface Props {
    imagen?: string;
    titlePhoto: string;
    descPhoto: string;
    more: string;

}

export const Card:FC <Props> = ({imagen, titlePhoto, descPhoto, more}) => {
  return (
    <div className='cardBody'>

          
        
        
        <div className='container'>

          <div className='card'>

          <div style={{backgroundColor:'white'}}>
           <img src={imagen}></img>
           
            <h4 style={{textAlign: 'center'}}>{titlePhoto}</h4>
            <p>{descPhoto} </p>
            <a href={more}>Leer mas..</a>
            </div>


          </div>

          </div>

        </div>

 
     
  )
}


