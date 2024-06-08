import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="z-[10000] relative">
      <Image
        src={"/logo/favicon.ico"}
        width={50}
        height={50}
        className="fixed top-2 left-10"
      />
      <Link href={"/"} className="fixed top-2 right-10 btn">
        Book a call
      </Link>
    </div>
  );
};
