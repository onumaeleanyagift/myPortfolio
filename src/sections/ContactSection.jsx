import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react"
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";


const ContactSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_vcrtdso", "template_bli8lr2", e.target, "6bNkC4JOBPcKNb26T")
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message' + error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="bg-[#161616] py-20">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <h2 className="font-bold text-4xl mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#2DD4BF] mx-auto mb-3"></div>
          <span className="font-semibold text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-2">
          <div>
            <form
              action=""
              className="space-y-6 text-left font-semibold"
              onSubmit={sendEmail}
              ref={form}
            >
              <div>
                <label htmlFor="name" className="text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 mt-2 bg-[#1d1d1d] border border-gray-700 rounded-lg focus:outline-none focus:border-[#2DD4BF]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email_name"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 mt-2 bg-[#1d1d1d] border border-gray-700 rounded-lg focus:outline-none focus:border-[#2DD4BF]"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-300">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-3 mt-2 h-40 bg-[#1d1d1d] border border-gray-700 rounded-lg resize-none focus:outline-none focus:border-[#2DD4BF]"
                ></textarea>
              </div>
              <button type="submit" className="w-full text-center bg-[#2CCEB9] gap-1 hover:bg-[#14B8A6] hover:border-[#14B8A6] lg:text-lg">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg h-full text-left">
              <h3 className="text-2xl font-semibold mb-6 text-[#2DD4BF]">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div id="Location" className="flex items-start">
                  <div className="bg-[#252525] text-[#2DD4BF] h-full p-3 rounded-lg mr-4">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-400 font-medium">Lagos, Nigeria</p>
                  </div>
                </div>

                <div id="Email" className="flex items-start">
                  <div className="bg-[#252525] text-[#2DD4BF] h-full p-3 rounded-lg mr-4">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400 font-medium">
                      onumaeleanyagift@gmail.com
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="inline-flex gap-5">
                    <a
                      href="https://github.com/onumaeleanyagift"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bg-[#252525] w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-[#2DD4BF] hover:bg-[#2a2a2a] transition duration-300 cursor-pointer">
                        <Github />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/onumajnr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bg-[#252525] w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-[#2DD4BF] hover:bg-[#2a2a2a] transition duration-300 cursor-pointer">
                        <Linkedin />
                      </span>
                    </a>

                    <a
                      href="https://x.com/onumajnr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bg-[#252525] w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-[#2DD4BF] hover:bg-[#2a2a2a] transition duration-300 cursor-pointer">
                        <Twitter />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
