import React from "react";
import Image from "next/image";

const ContactHeaderImg = () => (
    <div>
        <Image
            src="/assets/ContactHead.svg" // Correct path
            alt="contact"
            width={1440}
            height={316}
            className="w-full h-auto mt-20"
        />
    </div>
);

export default ContactHeaderImg;
