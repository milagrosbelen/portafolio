import React, { useState, useEffect } from 'react'
import PhoneFrame from './PhoneFrame'

const PhoneScreenshot = ({ src, alt }) => {
  const [aspectRatio, setAspectRatio] = useState('9 / 19.5')

  useEffect(() => {
    setAspectRatio('9 / 19.5')
    const img = new Image()
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`)
      }
    }
    img.src = src
  }, [src])

  return (
    <PhoneFrame aspectRatio={aspectRatio}>
      <img
        src={src}
        alt={alt}
        className="block h-full w-full select-none"
        draggable={false}
      />
    </PhoneFrame>
  )
}

export default PhoneScreenshot
