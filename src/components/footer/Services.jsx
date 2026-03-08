import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { MdEmail, MdEdgesensorHigh } from "react-icons/md";
import '../../style/footer/services.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {  
   const footerRef = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#footer", {
            scrollTrigger: {
               trigger: "#footer",
               start: "top 95%",
               toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.2
         });

         gsap.from(".icones_contact_link", {
            scrollTrigger: {
               trigger: "#area_icons_contact",
               start: "top 95%",
               toggleActions: "play none none reverse",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
         });
      }, footerRef);

      return () => ctx.revert();
   }, []);

   return (
      <footer id="footer" ref={footerRef}>
         <div id="services_info">
            <p className="text_footer">Para serviços</p>
            <span className="text_footer">
               Entre em contato <MdEdgesensorHigh size={30} color="orange" />
            </span>
         </div>

         <div id="area_icons_contact">
            <a target='_blank' rel="noopener noreferrer" className="icones_contact_link" href="https://www.instagram.com/__sant_v/">
               <FaInstagram id="instagram_icon" className="icons_contact" size={48} />
            </a>
            <a target='_blank' rel="noopener noreferrer" className="icones_contact_link" href="https://www.linkedin.com/in/viniciussant07">
               <FaLinkedin id="linkedin_icon" className="icons_contact" size={48} />
            </a>
            <a target='_blank' rel="noopener noreferrer" className="icones_contact_link" href="https://www.youtube.com/@vy.S17">
               <FaYoutube id="yt_icon" className="icons_contact" size={48} />
            </a>
            <a target='_blank' rel="noopener noreferrer" className="icones_contact_link" href="https://github.com/SantV7">
               <FaGithub id="github_icon" className="icons_contact" size={48} />
            </a>
            <a className="icones_contact_link" href="mailto:3izuna@gmail.com">
               <MdEmail id="email_icon" className="icons_contact" size={48} />
            </a>
         </div>
      </footer>
   );
}

export default Services;