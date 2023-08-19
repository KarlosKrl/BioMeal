import Nav from "./Nav";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <div className="w-full shadow-sm shadow-emerald-900 bg-green-900 flex justify-center items-center z-20">
      <div className="w-full flex h-[40px] justify-between items-center max-w-[1280px] py-1 px-2 text-white ">
        <div className="">Logo</div>
        <SearchBar />
        <Nav />
      </div>
    </div>
  );
}
