import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <div className="heading">ABOUT US</div>
                    <p>The only thing we're serious about is food</p>
                </div>
                <p className="mid">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, eaque? Esse similique reiciendis deserunt eaque laudantium iste debitis! Delectus molestias veritatis maxime possimus et aperiam eius, atque dolorem, quae ab distinctio odio cumque vitae. Similique voluptatum consequuntur aut possimus soluta, ab commodi quisquam dolores delectus sint aspernatur consequatur incidunt maxime.</p>
                <Link to={"/"}>
                    Explore Menu{" "}
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About