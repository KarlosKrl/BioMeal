import MainPhotoesChange from "app/components/MainPhotoesChange";
import { Suspense } from "react";
export default function ProductPage({ params }) {
  const id = params.id;
  const produs1 = {
    id: "hfjy5467fjyrrosii",
    nume: "rosii",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 20,
    image: [
      "/tomatoes.jpg",
      "/mere.jpg",
      "/ceafaporc.png",
      "/tomatoes.jpg",
      "/.png",
    ],
    category: "legume",
  };
  const produs2 = {
    id: "hfjfgj6tfjyf6tyoua",
    nume: "oua",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 200,
    image: [
      "/oua.png",
      "/mere.jpg",
      "/ceafaporc.png",
      "/tomatoes.jpg",
      "/oua.png",
    ],
    category: "produse animale",
  };
  const produs3 = {
    id: "hhjhfkhfit76t68riyrii68carne",
    nume: "ceafa",
    descriere: "sdfdhsfvjnkdsnjvkshfosgio dssjkfcndskfi vdsjfeoivj",
    pret: 200,
    image: [
      "/ceafaporc.png",
      "/mere.jpg",
      "/ceafaporc.png",
      "/tomatoes.jpg",
      "/oua.png",
    ],
    category: "carne",
  };
  const produs4 = {
    id: "yhshjjsisisfveffv",
    nume: "mere",
    descriere: "hjsjcfihiisinsmsknk insnkikninks bi bujs siwiknw w",
    pret: 40,
    image: [
      "/mere.jpg",
      "/ceafaporc.png",
      "/tomatoes.jpg",
      "/ceafaporc.png",
      "/oua.png",
    ],
    category: "fructe",
  };
  const productsDatabase = [produs1, produs2, produs3, produs4];
  const produse = productsDatabase.filter((product) => product.id === id);
  const produs = produse[0];
  return (
    <div className="w-full h-full">
      {produs && (
        <div className="text-black  h-full w-full p-2 flex flex-col gap-3 rounded-md justify-center items-center lg:flex-row">
          <Suspense fallback={<div>Loading...</div>}>
            <MainPhotoesChange produs={produs} />
          </Suspense>
          <div className="flex flex-col justify-between w-full rounded-md h-[57vh]">
            <div className="flex flex-col gap-1 h-full">
              <div className=" text-xl font-bold">
                {produs.nume.slice(0, 1).toUpperCase() + produs.nume.slice(1)}
              </div>
              <div className="text-sm ">{produs.descriere}</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-end lg:items-end h-full justify-self-end ">
              <div className="font-bold text-lg text-center">
                {produs.pret} RON
              </div>
              <button className="flex px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-900 hover:text-white">
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
      )}
      <div className="h-[200px] w-full flex justify-between rounded-md bg-gray-200 p-4 text-white gap-4">
        <div className="h-full flex flex-col w-[50%] items-center justify-center gap-2">
          <input
            type="text"
            className="outline-none p-2 rounded-full bg-green-900 placeholder-gray-300"
            placeholder="username"
          />
          <textarea
            className="p-2 outline-none w-full h-[145px] rounded-md bg-green-900  placeholder-gray-300"
            type="text"
            placeholder="review"
          />
        </div>
        <div className="h-full w-[50%] p-2 bg-green-900 rounded-md">
          Recenzii
        </div>
      </div>
    </div>
  );
}
