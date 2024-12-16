import React from "react";
import ContactHeaderImg from "@/components/ContactHeaderImd";
import ContactIntroText from "@/components/ContactIntroText";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";

const page = () => {
  return (
    <div>
      <ContactHeaderImg />
      <ContactIntroText />
      <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>

      <div>
        <Features />
      </div>
    </div>
  );
};

export default page;
