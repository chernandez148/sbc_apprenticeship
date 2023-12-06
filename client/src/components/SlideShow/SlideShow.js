import React, { useEffect, useState } from 'react'
import './styles.css'

function SlideShow({ gallery }) {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex === gallery.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => {
            clearInterval(imageInterval);
        }
    }, [gallery]);

    return (
        <div className='SlideShow'>
            {gallery.map((image, index) => (
                <img
                    style={{ opacity: imageIndex === index ? "1" : "0" }}
                    key={index}
                    src={image.image}
                    alt={image.alt}
                />
            ))}
        </div>
    )
}

export default SlideShow