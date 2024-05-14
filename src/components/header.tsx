import Image from "next/image";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className=" py-8 w-full max-w-[1180px] my-0 mx-auto">
      <Image src={logo} alt="" />
    </header>
  );
}
