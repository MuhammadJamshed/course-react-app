import React, { useState } from 'react'
import card1 from '../../assets/card_2.png'
export default function Card(prob) {
    const [product, setProduct] = useState(prob.product)
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={card1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">{product.category}</a>
                </div>
            </div>
        </div >
    )
}
