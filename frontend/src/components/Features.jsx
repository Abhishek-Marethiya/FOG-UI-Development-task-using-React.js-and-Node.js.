import React from 'react'

function Features() {
  return (
    <div className="features">
    <div className="feature">
      <img src="/icons/trophy-1.svg" alt="High Quality" />
      <h4>High Quality</h4>
      <p>crafted from top materials</p>
    </div>
    <div className="feature">
      <img src="/icons/guarantee.svg" alt="Warranty Protection" />
      <h4>Warranty Protection</h4>
      <p>Over 2 years</p>
    </div>
    <div className="feature">
      <img src="/icons/shipping.svg" alt="Free Shipping" />
      <h4>Free Shipping</h4>
      <p>Order over 150 $</p>
    </div>
    <div className="feature">
      <img src="/icons/customer-support.svg" alt="24/7 Support" />
      <h4>24 / 7 Support</h4>
      <p>Dedicated support</p>
    </div>
  </div>
  )
}

export default Features