"use client";

import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

export const ContactForm = () => {
  return (
    <div>
      <div className="flex gap-3 mb-4">
        <CiEdit size={24} />
        <h4 className="font-bold">Write me a message!</h4>
      </div>

      <form
        action="https://formsubmit.co/abdulazeezsodiq403@gmail.com" // 🔁 Replace this
        method="POST"
        className="space-y-4"
      >
        {/* Prevent bot spam */}
        {/* <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="https://abdulazeezsodiq.vercel.app/thank-you"
        /> */}

        <input
          type="text"
          name="name"
          className="border-b-4 px-4 py-3 outline-none w-[370px]"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          className="border-b-4 px-4 py-3 outline-none w-[370px]"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          className="border-b-4 px-4 py-3 outline-none w-[370px] resize-none"
          placeholder="Message..."
          rows={5}
          required
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
