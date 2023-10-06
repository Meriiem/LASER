// this file is to display the video player

import React from 'react'
import ReactPlayer from 'react-player/youtube'

export const Youtube = ({youtubeLink}) => {

    return (

        <ReactPlayer style={{paddingLeft:"10%"}} width="100%"height="400px" url={youtubeLink}/>
        
    )
}
