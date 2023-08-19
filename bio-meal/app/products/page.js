import Cards from "../components/Cards";
export default function productsPage() {
  return (
    <div className="flex flex-col  w-full h-full">
      <div className="px-2 py-2 font-bold shadow-md">Toate Produsele</div>

      <Cards />
    </div>
  );
}
