import React from 'react'
import VideoCard from './VideoCard'
import "../styles/Videos.css"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item,index)=>(
                <VideoCard index={index} name={item.name} key={item.image} image={item.image} />
            ))
        }
    </div>
  )
}

export default Videos