import Image from "next/image";
import Link from "next/link";

export default function Main() {
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
  const produs4 = {
    id: "yhshjjsisisfveffv",
    nume: "mere",
    descriere: "hjsjcfihiisinsmsknk insnkikninks bi bujs siwiknw w",
    pret: 40,
    image: ["/mere.jpg"],
    category: "fructe",
  };
  const bestProds = [
    produs1,
    produs2,
    produs3,
    produs4,
    produs1,
    produs2,
    produs3,
    produs4,
  ];
  return (
    <div className="h-full w-full flex flex-col gap-4 py-2">
      <div className="w-full h-full bg-gray-200 rounded-md blur-0 p-4 flex flex-row justify-around">
        <div className="  flex flex-col  items-start h-full justify-between">
          <div>
            <div className="flex flex-col gap-8">
              <div className="font-extrabold px-2 first-letter text-8xl">
                Roșii Cherry
              </div>
              <div className="px-2">
                Roșiile cherry sunt un soi compact pentru cultivarea în grădini
                mici sau containere. Tulpinile plantei sunt subțiri și mici.
                Fructele sunt de culoare roşie, foarte gustoase, în formă de
                cireașă. Se pretează pentru consum direct, conservare sau
                decorare.Rosii naturale si zemoase
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end h-1/2 gap-8">
            <div className="flex flex-col gap-2 px-2 bg-gray-500/10 py-2 rounded-md ">
              <div className="">Tel: 0748779781</div>
              <div className="">E-mail: stroiucarlos9@gmail.com</div>
              <div className="">Nume ferma: Ferma Casei</div>
              <div className="">Jud:Galati Com: Crocodilu Str:Soparla Nr:1</div>
            </div>
            <div className=" flex justify-between">
              <button className="bg-gray-100 py-1 px-2 rounded-md hover:bg-gray-50 hover:text-black">
                Alte produse
              </button>
              <button className="bg-gray-100 py-1 px-2 rounded-md hover:bg-gray-50 hover:text-black">
                Cumpara produs
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[450px] aspect-square">
          <Image
            src="/cherry.png"
            priority
            fill
            style={{ objectFit: "contain" }}
            className="rounded-md"
            alt="castraveti"
          />
        </div>
      </div>
      <div className="h-full w-full text-black gap-4 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {bestProds.map((produs) => (
          <Link href={"/product/" + produs.id}>
            <div className=" text-black bg-gray-200 border-white h-full shadow-md w-full p-4 flex flex-col gap-3 rounded-md">
              <div className="relative w-full max-w-[320px] aspect-square self-center">
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
