export default function Aside() {
  return (
    <div className="block">
      <div className=" z-10 pt-2 flex flex-col gap-4 bg-gray-100 w-44 h-full border-r-2 border-gray-300 text-green-950">
        <button className="flex px-1">
          {">"}
          <div className="hover:text-white hover:bg-green-950 hover:rounded-md px-1">
            Legume
          </div>
        </button>
        <button className="flex px-1">
          {">"}
          <div className="hover:text-white hover:bg-green-950 hover:rounded-md px-1">
            Fructe
          </div>
        </button>
        <button className="flex px-1">
          {">"}
          <div className="hover:text-white hover:bg-green-950 px-1 hover:rounded-md">
            Carne
          </div>
        </button>
        <button className="flex px-1">
          {">"}
          <div className="hover:text-white hover:bg-green-950 px-1 hover:rounded-md ">
            Produse animale
          </div>
        </button>
      </div>
    </div>
  );
}
