import Image from "next/image";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const category = params.category.split("%20").join(" ");
  const produs1 = {
    id: "hfjy5467fjyrrosii",
    nume: "rosii",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 20,
    image: ["/tomatoes.jpg"],
    category: "legume",
  };
  const produs2 = {
    id: "hfjfgj6tfjyf6tyoua",
    nume: "oua",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 200,
    image: ["/oua.png"],
    category: "produse animale",
  };
  const produs3 = {
    id: "hhjhfkhfit76t68riyrii68carne",
    nume: "ceafa",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 200,
    image: ["/ceafaporc.png"],
    category: "carne",
  };

  console.log(Object.values(produs3));
  const allProds = [
    produs1,
    produs2,
    produs3,
    produs1,
    produs2,
    produs3,
    produs1,
    produs2,
    produs3,
    produs1,
    produs2,
    produs3,
    produs3,
  ];

  const prods = allProds.filter(
    (prod) =>
      Object.values(prod).includes(category) ||
      Object.values(prod).includes(+category)
  );

  return (
    <div className="flex flex-col h-full w-full">
      <div className=" p-2 font-bold shadow-md">{category}</div>

      <div className="overflow-scroll overflow-x-hidden pl-2 pt-2 h-[calc(100vh-80px)] w-full text-black gap-3 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {prods.map((produs) => (
          <Link href={"/product/" + produs.id}>
            <div className=" text-black bg-gray-200 border-white h-full shadow-md w-full px-2 py-2 flex flex-col gap-2 rounded-md">
              <div className="relative w-full max-w-[320px] aspect-square ">
                <Image
                  src={produs.image[0]}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  alt="Rosii"
                />
              </div>
              <div className="flex flex-col justify-between  lg:h-[45%] md:h-[60%]">
                <div className="flex flex-col gap-1">
                  <div className=" text-xl font-bold">
                    {produs.nume.slice(0, 1).toUpperCase() +
                      produs.nume.slice(1)}
                  </div>
                  <div className="text-sm ">
                    {produs.descriere.substring(0, 20) + "..."}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end">
                  <div className="font-bold text-lg text-center">
                    {produs.pret} RON
                  </div>
                  <button className="flex px-2 py-1 bg-green-900 text-gray-100 rounded-full hover:bg-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    Cumpara
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
