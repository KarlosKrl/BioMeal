import Image from "next/image";

export default function Main() {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute top-0 h-full w-screen">
        <Image
          src="/bggreen.jpg"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="w-full h-[calc(100%-50px)] mt-1 rounded-md bg-gray-950/50 blur-0 p-8 flex flex-row justify-around">
          <div className="text-white  flex flex-col  items-start h-full justify-between">
            <div>
              <div className="flex flex-col gap-8">
                <div className="font-extrabold px-2 first-letter text-8xl">
                  Roșii Cherry
                </div>
                <div className="px-2">
                  Roșiile cherry sunt un soi compact pentru cultivarea în
                  grădini mici sau containere. Tulpinile plantei sunt subțiri și
                  mici. Fructele sunt de culoare roşie, foarte gustoase, în
                  formă de cireașă. Se pretează pentru consum direct, conservare
                  sau decorare.Rosii naturale si zemoase
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-2 justify-end h-1/2 gap-8">
              <div className="flex flex-col gap-2 px-2 bg-gray-500/10 py-2 rounded-md ">
                <div className="">Tel: 0748779781</div>
                <div className="">E-mail: stroiucarlos9@gmail.com</div>
                <div className="">Nume ferma: Ferma Casei</div>
                <div className="">
                  Jud:Galati Com: Crocodilu Str:Soparla Nr:1
                </div>
              </div>
              <div className=" flex justify-between">
                <button className="bg-gray-100/20 py-1 px-2 rounded-md hover:bg-gray-50 hover:text-black">
                  Alte produse
                </button>
                <button className="bg-gray-100/20 py-1 px-2 rounded-md hover:bg-gray-50 hover:text-black">
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
      </div>
    </div>
  );
}
