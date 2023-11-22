'use client';
import React, { useState } from 'react';
import { post } from '/api/form/route';

const MyForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interested: '',
    githubLink: '',
    domain: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleDomainChange = (domain: string) => {
    setFormState({
      ...formState,
      domain,
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('Form submitted:' + JSON.stringify(formState, null, 2));
    // setIsSubmitted(true);
  };

  const handleSaveData = async () => {
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formState }),
    });

    if (response.ok) {
      alert('Data saved successfully!');
      formState({
        name: '',
        email: '',
        interested: '',
        githubLink: '',
        domain: '',
      });
    } else {
      alert('Something went wrong!');
    }
  };


  

  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className='m-12'>
        Get Started
      </h3>
      <form onSubmit={handleSubmit} className="mb-4 px-12 py-8 bg-[#1c1c1c] rounded-md w-4/5 flex flex-col">
        
        {/* Name */}
        <label htmlFor="name" className="text-3xl">
          Name
        </label>
        <input 
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className='bg-[#2b2b2b]'
        />

        {/* Email */}
        <label htmlFor="email" className="text-3xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className='bg-[#2b2b2b]'
        />

        {/* Interested */}
        <label htmlFor="interested" className="text-3xl">
          Why are you interested?
        </label>
        <textarea
          id="interested"
          name="interested"
          required
          value={formState.interested}
          onChange={handleChange}
          className='bg-[#2b2b2b] text-[white] px-4 py-2'
          wrap='hard'
          rows={5}
          cols={50}
          placeholder = 'Tell us why you are interested in joining.'

        ></textarea>

        {/* GitHub Link */}
        <label htmlFor="githubLink" className="text-3xl">
          GitHub Link
        </label>
        <input
          type="url"
          id="githubLink"
          name="githubLink"
          required
          value={formState.githubLink}
          onChange={handleChange}
          className='bg-[#2b2b2b]'
        />

        {/* Domain */}
        <label className="text-3xl">Domain</label>
        <div className="flex justify-between items-center md:flex-row flex-col ">
          {['App', 'Web', 'Cloud', 'DevOps', 'DSA', 'ML'].map((domain) => (
            <div
              key={domain}
              className={`flex justify-between m-1 items-center border w-full border-[#505050] rounded-xl  ${
                formState.domain === domain ? ' bg-white  text-black ' : ' text-white '
              }`}
              onClick={() => handleDomainChange(domain)}
            >
              <input
                type="radio"
                id={domain}
                name="domain"
                value={domain}
                checked={formState.domain === domain}
                onChange={() => ({})}
                className='bg-[#2b2b2b] ml-6'
              />
              <label htmlFor={domain} className='mr-6'>{domain}</label>
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className='bg-[black] border-[#505050]'
        >
          Submit
        </button>
        <button onClick={handleSaveData}>Save Data</button>
      </form>
    </div>
  );
};

export default MyForm;


// 