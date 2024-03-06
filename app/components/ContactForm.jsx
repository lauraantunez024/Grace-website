"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [contactMethod, setContactMethod] = useState("email");

  const onSubmit = (data) => {
    sendEmail(data);
  };

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Name
        </label>
        <input
          type="name"
          placeholder="Hayley Williams"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadoe-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="contactMethod"
          className="mb-3 block text-base font-medium text-black"
        >
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md"
          value={contactMethod}
          onChange={handleContactMethodChange}
        >
          <option value="email">I want to be emailed</option>
          <option value="text">I want to be texted</option>
          <option value="call">I want to be called</option>
          <option value="any">Doesn't matter</option>
        </select>
      </div>
      {(contactMethod === "email" || contactMethod === "any") && (
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
      )}
      {(contactMethod !== "email") && (
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-black"
          >
            Phone
          </label>
          <input
            type="phone"
            placeholder="3041234567"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
      )}
      <div className='mb-5'>
        <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-black'>
                Message
            </label>
            <textarea
                rows={5}
                placeholder='Type your message'
                className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md'
                {...register('message', { required: true })}
                ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none'> 
            Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
