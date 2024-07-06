"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const initialFormState = {
  name: "",
  email: "",
  interested: "",
  githubLink: "",
  domain: "",
};

const MyForm: React.FC = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    toast.loading("The form is being submitted... Please Wait");
  };

  const handleSaveData = async () => {
    try {
      toast.loading("Sending...");

      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formState }), // Send formState directly
      });

      const responseData = await response.json(); // Parse response JSON
      console.log("Response:", response);

      if (response.ok) {
        toast.success("Data saved successfully!");
        setFormState(initialFormState);
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex justify-center items-center flex-col">
        <h3 className="m-12 text-4xl font-bold">
          Start by telling us about yourself
        </h3>
        <form
          onSubmit={handleSubmit}
          className="mb-4 px-12 py-4 rounded-md w-full lg:w-4/5 flex flex-col"
        >
          {/* Name */}
          <label htmlFor="name" className="text-3xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Type your name..."
            value={formState.name}
            onChange={handleChange}
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
            placeholder="Type your email ID..."
            value={formState.email}
            onChange={handleChange}
          />

          {/* Interested */}
          <label htmlFor="interested" className="text-3xl">
            Why are you interested? (Include your past experiences)
          </label>
          <textarea
            id="interested"
            name="interested"
            required
            value={formState.interested}
            onChange={handleChange}
            className="text-[white] p-4"
            wrap="hard"
            rows={5}
            cols={50}
            placeholder="Tell us why you are interested in joining us..."
          ></textarea>

          {/* GitHub Link */}
          <label htmlFor="githubLink" className="text-3xl">
            GitHub Profile
          </label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            required
            value={formState.githubLink}
            placeholder="https://github.com/"
            onChange={handleChange}
          />

          {/* Domain */}
          <label className="text-3xl">Domain</label>
          <div className="flex justify-between items-center md:flex-row flex-col ">
            {["App", "Web", "Cloud", "DevOps", "DSA", "ML", "Blockchain"].map(
              (domain) => (
                <div
                  key={domain}
                  className={`domain ${
                    formState.domain === domain
                      ? "bg-black text-white"
                      : "bg-white text-black"
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
                    className="ml-6"
                  />
                  <label htmlFor={domain} className="mr-6">
                    {domain}
                  </label>
                </div>
              )
            )}
          </div>
          <button
            onClick={handleSaveData}
            className="hover:bg-teal-200 bg-black border-teal-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;

//
