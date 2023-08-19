import Link from "next/link";
import RangeInput from "./RangeInput";

export default function Aside() {
  return (
    <div className="block">
      <div className="pt-2 z-0 flex flex-col gap-4 bg-gray-200 w-44 h-full border-r-2 border-gray-300 text-green-950">
        <Link href={"/products/legume"}>
          <button className="flex px-1">
            {">"}
            <div className="hover:text-white hover:bg-green-950 hover:rounded-md px-1">
              Legume
            </div>
          </button>
        </Link>
        <Link href={"/products/fructe"}>
          <button className="flex px-1">
            {">"}
            <div className="hover:text-white hover:bg-green-950 hover:rounded-md px-1">
              Fructe
            </div>
          </button>
        </Link>
        <Link href={"/products/carne"}>
          <button className="flex px-1">
            {">"}
            <div className="hover:text-white hover:bg-green-950 px-1 hover:rounded-md">
              Carne
            </div>
          </button>
        </Link>
        <Link href={"/products/produse%20animale"}>
          <button className="flex px-1">
            {">"}
            <div className="hover:text-white hover:bg-green-950 px-1 hover:rounded-md ">
              Produse animale
            </div>
          </button>
        </Link>
        <RangeInput />
      </div>
    </div>
  );
}
