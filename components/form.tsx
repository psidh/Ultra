'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';

interface FormState {
  name: string;
  domain: string;
  techStack: string;
}

const MyForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    domain: '',
    techStack: '',
  });

  const techStackOptions: Record<string, string[]> = {
    app: ['Kotlin', 'Java', 'React Native', 'Swift'],
    front: ['React (JavaScript)', 'HTML/CSS - Tailwind'],
    backend: ['Node.js', 'Django', 'Spring', 'Go'],
    full: ['NextJs', 'Spring', 'Flask', 'Django'],
    cloud: ['AWS (Amazon)', 'Azure (Microsoft)', 'GCP (Google)'],
    devops: ['Docker', 'Kubernetes', 'Jenkins'],
    leetcode: ['Algorithms', 'Data Structures', 'System Design'],
    ml: ['Python', 'R Programming Language'],
  };

  useEffect(() => {
    updateTechStackOptions();
  }, [formState.domain]);

  const updateTechStackOptions = () => {
    const { domain } = formState;
    const techStackSelect = document.getElementById(
      'techStack'
    ) as HTMLSelectElement | null;

    if (techStackSelect) {
      techStackSelect.innerHTML = '';

      if (techStackOptions[domain]) {
        techStackOptions[domain].forEach((option) => {
          const optionElement = document.createElement('option');
          optionElement.value = option.toLowerCase();
          optionElement.textContent = option;
          techStackSelect.appendChild(optionElement);
        });
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="w-4/5 text-4xl md:text-7xl my-24">
        Choose your journey for the next 2 months
      </p>
      <form
        onSubmit={handleSubmit}
        className="mb-4 px-12 py-8 bg-[#1c1c1c] rounded-md w-4/5"
      >
        {/* form elements */}
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
          className="w-full p-2 mt-6 mb-4 bg-[#2b2b2b] text-white rounded-md focus:outline-none"
        />

        <label className="text-3xl">Domain</label>
        <div className="grid grid-cols- md:grid-cols-4 mt-4 mb-4">
          {Object.keys(techStackOptions).map((domain) => (
            <div
              key={domain}
              className={`flex justify-between items-center py-1  px-6 border
               border-gray-200 rounded-full dark:border-gray-700 my-2 ${
                formState.domain === domain ? 'bg-gray-500' : ''
              }`}
            >
              <input
                type="radio"
                id={domain}
                name="domain"
                value={domain}
                checked={formState.domain === domain}
                onChange={handleChange}
              />
              <label htmlFor={domain}>{domain}</label>
            </div>
          ))}
        </div>

        {/* dropdown */}
        <label htmlFor="techStack" className="text-3xl my-4">
          Tech Stack
        </label>
        <select
          id="techStack"
          name="techStack"
          required
          value={formState.techStack}
          onChange={handleChange}
          className="w-full p-2 my-4 bg-[#2b2b2b] text-white rounded-md outline-none"
        >
          {/* dynamic*/}
        </select>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-black hover:bg-white hover:text-black text-white rounded-md transition duration-300 border"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
