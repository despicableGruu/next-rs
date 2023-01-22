import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedText from "../FramerMotion/AnimatedText";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="dark:bg-darkPrimary !relative">
      {/* Get in touch top section */}
      <section className="w-full-width text-center pt-6 dark:bg-darkPrimary dark:text-white">
        <AnimatedHeading
          variants={popUpFromBottomForText}
          className="font-bold text-4xl"
        >
          Get in touch
        </AnimatedHeading>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="px-4 py-2 font-medium dark:text-gray-300"
        >
          Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 🙋‍♂️.
        </AnimatedText>
      </section>

      {/* Wrapper Container */}
      <section className="flex flex-col lg:flex-row w-full mx-auto px-5 dark:bg-darkPrimary dark:text-white lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-2xl font-bold w-full text-center my-2"
          >
            Connect with me
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}