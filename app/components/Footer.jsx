import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-whitesmoke">
      <div className=" w-full py-12 flex justify-between px-10 max-width">
        <div className="flex items-center gap-1">
          <Image src={"/logo/favicon.ico"} width={40} height={40} />
          <h1 className="text-xl font-semibold">Devign</h1>
        </div>
        <div className="flex gap-4">
          <Link href={"/"}>
            <Image
              width={30}
              height={30}
              className="h-full w-full "
              src={"/logo/x.svg"}
            />
          </Link>
          <Link href={"/"}>
            <Image
              width={30}
              height={30}
              className="h-full w-full "
              src={"/logo/gmail.svg"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
