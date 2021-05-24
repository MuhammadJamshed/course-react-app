import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import Card from '../../components/card/Card'

export default function Home(prob) {
    const [pro, Setpro] = useState(prob.products)
    return (
        <div>
            <Header />


            <Slider />
            <div className="card-wrapper" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                <div className="row" >
                    {pro.map((p) => <Card key={p.id} product={p} />)}

                </div>
            </div>

        </div>
    )
}
