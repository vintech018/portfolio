import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper group relative overflow-hidden">
            <div className="image-wrapper cursor-pointer" onClick={() => window.open("https://github.com/vintech018/Crypto-trading-platform", "_blank")}>
              <img src="/images/solidus.png" alt="SOLIDUS" className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="text-content">
              <h2>
                SOLIDUS: Real-time crypto trading platform
              </h2>
              <p className="text-white-50 md:text-xl">
                Features: Live charts, Trading simulator, Portfolio tracking, WebSocket data streaming.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com/vintech018/Crypto-trading-platform" target="_blank" rel="noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Repository ↗</a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project relative" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] cursor-pointer !px-0" onClick={() => window.open("https://bankroll18.vercel.app", "_blank")}>
                <img
                  src="/images/bankroll.png"
                  alt="BANKROLL"
                  className="!object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col mt-4 relative z-10 w-full">
                <h2 className="text-xl md:text-2xl font-bold">BANKROLL</h2>
                <p className="text-white-50 mt-2 text-sm">Expense tracking application with analytics and visualization.</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/vintech018/Expense_Tracker" target="_blank" rel="noreferrer" className="text-[#cd7c2e] hover:underline font-semibold">Repository ↗</a>
                  <a href="https://bankroll18.vercel.app" target="_blank" rel="noreferrer" className="text-[#cd7c2e] hover:underline font-semibold">Live Demo ↗</a>
                </div>
              </div>
            </div>

            <div className="project relative" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] cursor-pointer !px-0" onClick={() => window.open("https://happenin-zeta.vercel.app", "_blank")}>
                <img src="/images/happenin.png" alt="HAPPENIN" className="!object-cover w-full h-full rounded-xl" />
              </div>
              <div className="flex flex-col mt-4 relative z-10 w-full">
                <h2 className="text-xl md:text-2xl font-bold">HAPPENIN</h2>
                <p className="text-white-50 mt-2 text-sm">Event discovery and booking platform.</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/vintech018/Happenin" target="_blank" rel="noreferrer" className="text-[#ff5b73] hover:underline font-semibold">Repository ↗</a>
                  <a href="https://happenin-zeta.vercel.app" target="_blank" rel="noreferrer" className="text-[#ff5b73] hover:underline font-semibold">Live Demo ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
