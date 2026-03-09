import { einerGrotesk } from "./_utils/fonts/fonts";

export default function Home() {
  return (
    <div className="container grid grid-cols-12 grid-rows-16 gap-x-[32px]">
      <h1 className={`title1 text-8xl font-black ${einerGrotesk.className}`}>hi, i'm</h1>
      <h1 className={`title2 italic text-8xl font-black italic ${einerGrotesk.className}`}>alm4nditte</h1>
    </div>
  );
}
