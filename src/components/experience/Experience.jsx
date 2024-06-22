import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Professional Skills</h5>
      <h2>My Experience</h2>

     <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>TypeScript</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ReactJS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NextJS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ChartJs</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Charkra UI</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>
        </div>
        </div>



        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Spring Boot</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NestJS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ExpressJS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Django</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Docker</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL(Postgres/MySQL)</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NoSQL(MongoDB)</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>DevOps</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>AWS</h4>
            <small className='text-light'>Experinced</small>
            </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience