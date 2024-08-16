import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to Chic Boutique! Step into our cozy space where 
                style meets affordability. Our racks are filled with 
                carefully curated pieces that are perfect for any occasion.
                From trendy tops to comfortable denim, we've got you covered.
                Our friendly staff is here to help you find the perfect outfit
                that suits your unique style. Come visit us and elevate your
                wardrobe with our stylish collection!</p>
            <p>Step into our petite paradise where fashion meets comfort.
                Our quaint shop may be small in size, but it's bursting with big
                style! Explore our handpicked selection of trendy pieces and
                wardrobe essentials that will elevate your everyday look.
                From cozy sweaters to stylish accessories,
                we've got everything you need to stay on-trend and confident.
                Our friendly staff is here to help you find the perfect outfit that
                suits your unique style and fits your budget.
                Join us at Style Haven, where fashion is fun and every visit
                feels like a stylish adventure!</p>
        </div>
    </div>
  )
}

export default DescriptionBox