import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer relative z-20">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Vaibhav Chawla • Software Engineer</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.link || "#"} 
              target={socialImg.link ? "_blank" : "_self"} 
              rel={socialImg.link ? "noreferrer" : ""} 
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
          <a href="https://github.com/vintech018" target="_blank" rel="noreferrer" className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.15-3.8s-1.15-.38-3.9 1.5a13.3 13.3 0 0 0-7 0C6.15 2.5 5 2.88 5 2.88a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 10.48c0 5.6 3.3 6.75 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Vaibhav Chawla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
