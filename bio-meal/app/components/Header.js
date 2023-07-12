import Nav from "./Nav";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <div className="w-full flex h-[40px] justify-between items-center shadow-xl shadow-white py-1 px-2 bg-green-900 text-white z-20">
      <div className="">Logo</div>
      <SearchBar />
      <Nav />
    </div>
  );
}
