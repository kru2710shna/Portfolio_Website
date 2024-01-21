import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from "../assets/icons"

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Welcome!! , I'm
        <span className='font-semibold mx-2 text-white'>Krushna Thakkar</span>
        <br />
        An AL/ML and Back-End Engineer from India 🇮🇳
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        From Start to Present: My Work-Experience Story, <br/>Unraveling the Threads of My Professional Life.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Shaping Tomorrow: Advancing the AI Landscape with <br /> Machine Learning Projects and Expert Backend Engineering.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          QuickLook 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Island Connection Hub: Connect for Tech Networking, Collaborations, and Uplifting Conversations.
      </p>

      <Link to='/Contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;