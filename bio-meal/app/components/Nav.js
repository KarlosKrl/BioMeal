import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex gap-4 justify-between items-center">
      <Link href={"/"}>
        <div className="px-2 pb-1 hover:text-emerald-950 hover:bg-lime-200 hover:rounded-md">
          Home
        </div>
      </Link>
      <Link href={"/products"}>
        <div className="px-2 pb-1 hover:text-emerald-950 hover:bg-lime-200 hover:rounded-md">
          Produse
        </div>
      </Link>
      <Link href={"/logIn"}>
        <div className="px-2 pb-1 bg-white rounded-md text-black shadow-sm hover:bg-emerald-950  hover:text-lime-100">
          LogIn
        </div>
      </Link>
      <Link href={"/cart"}>
        <div className="px-2 pb-1 hover:text-emerald-950 hover:bg-lime-200 hover:rounded-md">
          Cos
        </div>
      </Link>
    </div>
  );
}
