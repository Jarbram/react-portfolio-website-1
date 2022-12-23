import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.png'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    id:6,
    image:IMG7,
    title:'USERS REGISTER WITH CRUD FUNCTIONS',
    github: 'https://github.com/Jarbram/reactjs-go-mongo-crud',
    demo: 'https://github.com/Jarbram/reactjs-go-mongo-crud/'
  },
  {
    id:1,
    image:IMG2,
    title:'Landing Page Marea',
    github: 'https://github.com/Jarbram/MareaBartenders',
    demo: 'https://jarbram.github.io/MareaBartenders/'
  },
  {
    id:2,
    image:IMG1,
    title:'Pokedex',
    github: 'https://github.com/Jarbram/pokedex-react',
    demo: 'https://jarbram.github.io/pokedex-react/'
  },
  
  {
    id:3,
    image:IMG3,
    title:'Todos App',
    github: 'https://github.com/Jarbram/Todos',
    demo: 'https://jarbram.github.io/Todos/'
  },
  {
    id:4,
    image:IMG4,
    title:'E-commerce design for a bakery',
    github: 'https://github.com/Jarbram/e-commerce-react',
    demo: 'https://github.com/Jarbram/e-commerce-react'
  },
  {
    id:5,
    image:IMG5,
    title:'bookmark-api-fiber',
    github: 'https://github.com/Jarbram/bookmark-api-fiber',
    demo: 'https://github.com/Jarbram/bookmark-api-fiber'
  },
  {
    id:6,
    image:IMG6,
    title:'Calculator',
    github: 'https://github.com/Jarbram/Calculadora2.0',
    demo: 'https://jarbram.github.io/Calculadora2.0/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container" 
// install Swiper modules
modules={[ Pagination]}
spaceBetween={40}
slidesPerView={1}
pagination={{ clickable: true }}
>
{
data.map(({id,image,title,github,demo}) =>{
return (
<SwiperSlide keys={id} className="project">

<div className="project__img-container">
<img src={image} alt="project one" />
</div>

<h5 className="project__name">{title}</h5>

<div className="portfolio__item-cta">
<a href={github} className='btn' target="_blank">GitHub</a>
<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
</div>

</SwiperSlide>)
})
}
</Swiper>

    </section>
  )
}

export default Portfolio