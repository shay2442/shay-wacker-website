import React from 'react'
import {useNavigate} from 'react-router-dom'

const LiveCoding = () => {
  const navigate = useNavigate()

  return (
    <div className="live-coding">
    <input onClick={() => window.location.replace('https://www.loom.com/share/d6af8c505fdd4025aa4ea76b4c146c9a')}className="video-images" type="image" src="/videopic1.png" />
    <input onClick={() => window.location.replace('https://www.loom.com/share/0e9e70f0d8354178a35c866d5f098f69')}className="video-images" type="image" src="/videopic2.png" />
    <input onClick={() => window.location.replace('https://www.loom.com/share/c533ec93ad2346889f35dc290e04bde5')}className="video-images" type="image" src="/videopic3.png" />
    <input onClick={() => window.location.replace('https://www.loom.com/share/37b385f867e4454e9f4554ae1eacffec')}className="video-images" type="image" src="/videopic4.png" />
    <input onClick={() => window.location.replace('https://www.loom.com/share/e0211b6741cf46a9b1f81f75b0ab978e')}className="video-images" type="image" src="/videopic5.png" />
    </div>
  )
}

export default LiveCoding