import React from 'react';
import { skills } from '../constants/index.js';

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
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className=
                    {
                      skill.type === 'Frontend'
                        ? 'w-1/2 h-1/2 object-contain'
                        : skill.type === 'Programming_Language' && skill.style
                        ? `w-${skill.style.width} h-${skill.style.height} object-contain`
                        : skill.type === 'ML' && skill.style
                        ? `w-${skill.style.width} h-${skill.style.height} object-contain`
                        : 'w-1/2 h-1/2 object-contain'
                    }/>
                </div>
              </div>
          ))}
          
        </div>
      </div>

      <div>
        <h3 className='py-16'> Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Embarking on the intersection of AI/ML and 
            backend development, my journey unfolds through 
            intricate flows of coding wizardry, crafting 
            solutions that elevate technology, and bring 
            simplicity to the complex world of artificial 
            intelligence on the backend.</p>

            <div className='mt-12 flex'>
                    
            </div>
        </div>
      </div>
   </section>
  )
}

export default About