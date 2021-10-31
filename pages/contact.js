import Image from "next/image";
import React, { useState } from "react";
// import { useFetch } from "../../../hooks/useFetch";
// import Loading from "../../../loading/Loading";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillCodepenCircle,
} from "react-icons/ai";

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import { HiMail, FaDev } from "react-icons";
import { FaDev } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import SocialIcon from "../components/SocialIcon";
import socialMedia from "../content/socialMedia";

const initialFormState = {
  to_name: "Jatin Sharma",
  from_name: "",
  email: "",
  subject: "",
  message: "",
};


export default function Contact({ response }) {
  console.log(response);
  // const { response, loading, setLoading } = useFetch("/contact-info");

  const [emailInfo, setEmailInfo] = useState(initialFormState);

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        emailInfo,
        process.env.NEXT_PUBLIC_YOUR_USER_ID
      )
      .then((res) => {
        console.log("Email Sent Successfully");
        setLoading(false);
        setEmailInfo(initialFormState);
        toast.success("Message Sent ✌");
      })
      .catch((err) => {
        console.log(err.text);
        setLoading(false);
        toast.error("😢 " + err.text);
      });
  }

  return (
    <section className="w-full flex flex-col items-center p-4 pb-24">
      <h3 className="title_of_page">Contact Me!</h3>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <React.Fragment>
        <div className="p-1">
          <Image
            className="w-24 rounded-full m-4 shadow "
            src="/img/profile.jpg"
            alt="Jatin Sharma"
            width="100"
            height="100"
          />
        </div>

        <form
          className="w-full flex flex-col items-center max-w-sm"
          onSubmit={sendEmail}
        >
          <input
            className="contact_field"
            value={emailInfo.from_name}
            type="text"
            name="from_name"
            placeholder="Name"
            required
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            className="contact_field"
            value={emailInfo.email}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            className="contact_field"
            value={emailInfo.subject}
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <textarea
            className="contact_field custom-scrollbar min-h-[120px] resize-none md:resize"
            name="message"
            value={emailInfo.message}
            placeholder="Message"
            required
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          ></textarea>
          <input
            className="w-full max-w-sm p-3 border-none rounded-md bg-purple-400 font-semibold mt-4 cursor-pointer  transform duration-150 active:scale-95"
            type="submit"
            value="Send"
          />
        </form>

        <div className="p-0 mt-8 flex flex-col items-center">
          <h3 className="text-xl text-center font-semibold">Social Media</h3>

          <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center pt-4">
            <SocialIcon Icon={AiOutlineInstagram} title="Instagram" url={socialMedia.instagram} />
            <SocialIcon Icon={AiOutlineTwitter} title="Twitter" url={socialMedia.twitter} />
            <SocialIcon Icon={BsFacebook} title="Facebook" url={socialMedia.facebook} />
            <SocialIcon Icon={BsGithub} title="Github" url={socialMedia.github} />
            <SocialIcon Icon={BsLinkedin} title="LinkedIn" url={socialMedia.linkedIn} />
            <SocialIcon Icon={HiMail} title="Instagram" url={socialMedia.mailto} />
            <SocialIcon Icon={AiFillCodepenCircle} title="Codepen" url={socialMedia.codepen} />
            <SocialIcon Icon={FaDev} title="Instagram" url={socialMedia.devTo} />
          </div>
        </div>

        <div className="buy-me-a-coffee m-4">
          <a
            href="https://www.buymeacoffee.com/j471n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a href="https://www.buymeacoffee.com/j471n" target="_blank">
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                width={217}
                height={60}
              />
            </a>
          </a>
        </div>
      </React.Fragment>
      {/* )} */}
      <ToastContainer />
    </section>
  );
}

// Server Side Rendering the Details
export async function getStaticProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact-info");
    const data = await res.json();
    return {
      props: {
        response: data,
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.error(err);
  }
}
