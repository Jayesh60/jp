import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  return (
    <div className="z-[10000] relative">
      <Image
        src={"/logo/favicon.ico"}
        width={50}
        height={50}
        className="fixed top-[2.5%] left-10"
      />
      <Link href={"/"} className="fixed max-lg:hidden top-[2.5%] right-10 btn">
        Book a call
      </Link>
      <Link href={"/"} className="fixed top-[4%] right-10 lg:hidden">
        <RxHamburgerMenu size={24} color="black" />
      </Link>
    </div>
  );
};
