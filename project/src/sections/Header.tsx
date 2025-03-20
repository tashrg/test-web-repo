import Logo from "@/assets/ZCSName.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-[#DCDCDC]"> {/* Added bg-[#DCDCDC] */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="ZCS Name" height={120} width={120} />
            <MenuIcon className="h-10 w-10 md:hidden" />
            <nav className="hidden md:flex gap-12 text-[#032854] items-center text-2xl font-montserrat font-bold"> {/* Added font-montserrat */}
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Works</a>
              <a href="#">Contacts</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};