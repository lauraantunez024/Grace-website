import "tailwindcss/tailwind.css";

export default function NameHolder() {
  return (
    <div className=" name-holder grid border border-slate-500 text-center lg:ml-6 mt-5 h-auto h-20 w-80 inline">
      <h1 className="text-5xl h-12 font-courier-new"> Grace Rolfe </h1>
      <div className="bg-black h-8 align-bottom shrink-0">
        <span className="text-xs text-stone-50 font-avenier align-bottom mt-8" > Digital Storyteller | Social Media Coordinator</span>
      </div>
    </div>
  );
}
