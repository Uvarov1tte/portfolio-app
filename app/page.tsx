import { einerGrotesk } from "./_utils/fonts/fonts";

export default function Home() {
  return (
    <div className=" z-30 container grid grid-cols-12 grid-rows-16 gap-x-[32px]">
      <h1 className={`z-40 title1 my-0 text-9xl font-black ${einerGrotesk.className}`}>hi, i'm</h1>
      <h1 className={`z-40 title2 my-0 italic text-9xl font-black italic ${einerGrotesk.className}`}>alm4nditte.</h1>
    </div>
  );
}
