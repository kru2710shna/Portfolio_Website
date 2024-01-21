import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });  
  const [isLoading , setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm ({...form, [e.target.name]: e.target.value})
  };

  const handleFocus = (e) => {
    e.preventDefault();
    setIsLoading(True);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Krushna",
        from_email: form.email,
        to_email: 'krushnaat.jobs@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    )
    .then(() => {
      setIsLoading(false);
      // TODO: Show success message
      // TODO: Hide an Alert 

      setForm({name: '' , email: '' , message:''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      // TODO: Show error message

    })
  };
  const handleBlur = () => {};
  const handleSubmit = () => {};  

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Welcome to Island Connection Hub</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
              onSubmit={handleSubmit}>

          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Fox"
              required
              value={form.name}
              onChange={handleChange}
              onFocus= {handleFocus}
              onBlur = {handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Fox@__ . _"
              required
              value={form.email}
              onChange={handleChange}
              onFocus= {handleFocus}
              onBlur = {handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              type="text"
              name="message"
              rows = {4}
              className="textarea"
              placeholder="Heyy!!...."
              required
              value={form.message}
              onChange={handleChange}
              onFocus= {handleFocus}
              onBlur = {handleBlur}
            />
          </label>
          <button
          type = "submit"
          className='btn'
          disabled = {isLoading}
          onFocus = {handleFocus}
          onBlur = {handleBlur}
          >
          {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
