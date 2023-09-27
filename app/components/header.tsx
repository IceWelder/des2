import Link from "next/link";
import Nav from "./nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[15vh] fixed top-0  w-full p-1 bg-opacity-80 backdrop-blur-md backdrop-filter bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"> 
          <Image
            src="/formula1.png" 
            alt="Logo"
            width={150} 
            height={40} 
          />
        </Link>
        <Nav/>
      </div>
    </header>
  );
}
