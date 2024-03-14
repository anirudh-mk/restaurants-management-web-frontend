import React from 'react'
import './ImageCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function ImageCard({ src, alt, name, rating, size }) {
    return (
        <div className='image-card' style={size == 'lg' ? { padding: 0 } : { padding: 5 }}>
            <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={alt}
                className='image-card--image'
                style={size === 'lg' ? { width: '100%' } : null}
            />
            <div className='image-card--headdings' style={size == 'lg' ? { paddingInline: 16 } : {}} >
                <p>Burger</p>
                <div className='image-card--rating'>
                    <FontAwesomeIcon icon={faStar} size='md' color='#FFD600' />
                    <p>4.2</p>
                </div>
            </div>
            <div className='image-card--sub-headding' style={size === 'lg' ? { paddingBottom: 16, paddingInline: 16, justifyContent: 'space-between' } : {}}>
                {size && <div className='image-card-description'>
                    <div className='circle' />
                    <p>veg</p>
                </div>}
                <p className='image-card-amount' style={size !== 'lg' ? { justifyContent: 'end', width: '100%' } : {}}>₹ {120}</p>
            </div>
        </div >
    )
}

export default ImageCard