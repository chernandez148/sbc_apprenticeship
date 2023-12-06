import React from 'react'
import './styles.css'

function GalleryGrid({ images }) {
    return (
        <div className='GalleryGrid'>
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img className="gallery-image" src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    )
}

export default GalleryGrid