import React from 'react'
import './MenuFilteringCard.css'

function MenuFilteringCard({ name, src, alt }) {
    return (
        <div className='menu-filtering-card'>
            <img src={src} alt={alt} />
            <p>{name}</p>
        </div>
    )
}

export default MenuFilteringCard