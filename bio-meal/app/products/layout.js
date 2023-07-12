import Aside from "../components/Aside";
export default function ProducesLayout({ children }) {
  return (
    <div className=" h-full  w-full flex flex-row">
      <Aside />
      {children}
    </div>
  );
}
