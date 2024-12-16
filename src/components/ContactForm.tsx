import React from "react";

const formFields = [
    { label: "Your Name", placeholder: "Enter your name" },
    { label: "Email Address", placeholder: "Enter your email" },
    { label: "Subject", placeholder: "Enter subject (optional)" },
    { label: "Message", placeholder: "Enter your message" },
];

const ContactForm = () => (
    <div className="flex flex-col lg:w-1/2 gap-6">
        {formFields.map((field, index) => (
            <div key={index} className="flex flex-col">
                <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                <input
                    type="text"
                    placeholder={field.placeholder}
                    className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                />
            </div>
        ))}
        <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
            Submit
        </button>
    </div>
);

export default ContactForm;
