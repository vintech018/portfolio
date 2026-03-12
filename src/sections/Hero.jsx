import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Software Engineer
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>building real-time systems</h1>
              <h1>and financial infrastructure.</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Vaibhav Chawla. Currently studying at Chitkara University.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-2">
              <Button
                text="View Projects"
                className="md:w-60 md:h-16 w-48 h-12"
                id="counter"
              />
              <a
                href="https://github.com/vintech018"
                target="_blank"
                rel="noreferrer"
                className="md:w-60 md:h-16 w-48 h-12 cta-wrapper group"
              >
                <div className="cta-button w-full h-full border-2 border-white/20 bg-transparent">
                  <div className="bg-circle !bg-white/10" />
                  <p className="text !translate-x-0 group-hover:!translate-x-0 !text-white">GitHub</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" className="-rotate-90 group-hover:translate-y-0 translate-y-0 !size-6" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
