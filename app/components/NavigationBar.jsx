import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="w-full  z-0 flex items-center justify-center h-[10vh]">
      <h1 className="left-24 absolute text-2xl font-bold">Devign</h1>
      <div className="max-w-[560px] mx-auto w-full flex justify-between z-10">
        <button>
          <Link href={"/"}>Features</Link>
        </button>
        <button>
          <Link href={"/"}>Specialities</Link>
        </button>
        <button>
          <Link href={"/"}>Work</Link>
        </button>
        <button>
          <Link href={"/"}>Pricing</Link>
        </button>
        <button>
          <Link href={"/"}>FAQ</Link>
        </button>
      </div>
    </div>
  );
};
