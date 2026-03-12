const FeatureCards = () => (
  <div className="w-full padding-x-lg flex-center mt-20 md:mt-40">
    <div className="flex flex-col items-center gap-10 w-full relative z-20 overflow-hidden">
      <h2 className="font-semibold md:text-5xl text-3xl text-center">
        GitHub Activity
      </h2>
      <a 
        href="https://github.com/vintech018" 
        target="_blank" 
        rel="noreferrer" 
        className="card-border rounded-xl md:p-8 p-4 bg-black-100 block w-full overflow-x-auto max-w-6xl hover:bg-black-200 transition-colors custom-scrollbar"
      >
        <div className="min-w-[800px] w-full flex justify-center">
          <img 
            src="https://ghchart.rshah.org/vintech018" 
            alt="Github Activity Graph" 
            className="w-full max-w-6xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity invert" 
          />
        </div>
      </a>
    </div>
  </div>
);

export default FeatureCards;