import Image from "next/image";

import shirt1 from "../assets/Shirt/1.png";
import shirt2 from "../assets/Shirt/2.png";
import shirt3 from "../assets/Shirt/3.png";

export default function Home() {
  return (
    <main className=" flex gap-3 w-full max-w-home ml-auto min-h-[656px]">
      <div className="group bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative flex items-center justify-center overflow-hidden">
        <Image
          className="object-cover"
          src={shirt1}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black/60 p-4 translate-y-[110%] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camisate X</strong>
          <span className="text-2xl font-bold text-emerald-300/80">
            R$ 79,90
          </span>
        </footer>
      </div>

      <div className="group bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative flex items-center justify-center overflow-hidden">
        <Image
          className="object-cover"
          src={shirt2}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black/60 p-4 translate-y-[110%] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camisate X</strong>
          <span className="text-2xl font-bold text-emerald-300/80">
            R$ 79,90
          </span>
        </footer>
      </div>
    </main>
  );
}
