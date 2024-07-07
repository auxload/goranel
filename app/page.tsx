import Image from "next/image";
import Iveco from "@/public/iveco.jpg"
export default function Home() {
  return (
    <main className="flex-1">
      <Image className="w-full " alt="sfsd" src={Iveco} />
    </main>
  );
}
