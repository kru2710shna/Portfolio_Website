import React from 'react'
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='font-medium '>
      As this chapter closes, a new one awaits. I'm actively seeking collaborations that challenge the status quo and redefine what's possible in the realm of technology and innovation. <br className='sm:block hidden' />
      </p>
      <Link to='/Contact' className='btn '>
        Contact
      </Link>
    </section>
  );
};

export default CTA;