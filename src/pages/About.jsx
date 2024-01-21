import React from 'react';
import { skills } from '../constants/index,js';

const About = () => {
  return (
   <section
   className='max-container'>
    <h1 className='head=text'>
      Hello I'm <span className='blue-gradient_text front-semibold
      drop-shadow'>Krushna </span>
    </h1>
    <div
    className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>Enthusiast Machine Learning and Artificial Enginner, flattered on how 
         Back-End developnment make so sense behind the scene.
      </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          Tech-Stack
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) =>(
              <div>
                <div>
                  <img 
                  src={skill.imageUrl}
                  alt = {skill.name}
                  className='w-1/2 h-1/2 object-contain'>
                  </img>
                </div>
              </div>
          ))}
          
        </div>
      </div>
   </section>
  )
}

export default About