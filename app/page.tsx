import Image from "next/image";
import Iveco from "@/public/iveco.jpg"
export default function Home() {
  return (
    <main className="flex-1">
      <div className="h-[50vh] relative bg-green-400">
        <Image className="w-full  h-full object-cover" alt="sfsd" src={Iveco} />
        <div className="bg-gradient-to-r from-black/90 text-white items-center h-full z-10 top-0 w-full absolute grid  px-28">
          <div>
            <h1 className="leading-snug text-7xl font-bold" >G.O.R Services</h1>
            <p>Gradinarim Oriunde Responsabil</p>
          </div>

        </div>

      </div>
    </main>
  );
}
