import Nav from "./Nav";
export default function Header() {
  return (
    <div className="fixed w-full flex justify-between bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="p-1">Logo</div>
      <Nav />
    </div>
  );
}
