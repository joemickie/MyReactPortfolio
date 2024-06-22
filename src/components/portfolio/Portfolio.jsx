import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
          <h3>Network ChatApp</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/LetsChat.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/LetsChat.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
          <h3>Gaming App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/Gammer-App.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/Gammer-App.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         </article>

      <article className='portfolio__item'>
          <h3>Convenience Store</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/Convenience-Store.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/Convenience-Store.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
          <h3>To-Do-List App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/todo-list-react.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/todo-list-react.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         </article>

      <article className='portfolio__item'>
          <h3>Clothing Site</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/Mini_store.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/Mini_store.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
          <h3>Data Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/joemickie/react-data-fintech.git" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/joemickie/react-data-fintech.git" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
           </article>
    </div>
   </section>
  )
}

export default Portfolio