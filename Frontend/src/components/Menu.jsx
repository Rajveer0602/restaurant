import React from 'react'
import {data} from '../pages/restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <div className="heading">POPULAR DISHES</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, exercitationem? Recusandae beatae incidunt magni error! Laudantium labore tenetur quas amet.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu
