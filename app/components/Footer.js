import Image from "next/image";
import Line from "./Line";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-green-900 h-[250px] flex justify-center items-center">
      <div className="w-full max-w-[1280px] text-white  flex flex-col gap-4">
        <Line />
        <div className="w-full flex text-white justify-between">
          <div>Logo</div>
          <div className="flex flex-col gap-4">
            <div className=" font-bold text-2xl">Contact Us</div>
            Tel: 0748779781
            <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSDZPQrWrnmFgLRRjgGZQVXHZrMSQpNTSqqZTTcdGSWQrQFcbgDfVGfvfRNvqlqrXpBNbChW">
              <div>E-mail: stroiucarlos9@gmail.com</div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" font-bold text-2xl">Menu</div>{" "}
            <Link href={"/products/legume"}>
              <button className="flex">
                <div className="">Legume</div>
              </button>
            </Link>
            <Link href={"/products/fructe"}>
              <button className="flex ">
                <div className="">Fructe</div>
              </button>
            </Link>
            <Link href={"/products/carne"}>
              <button className="flex ">
                <div className="">Carne</div>
              </button>
            </Link>
            <Link href={"/products/produse%20animale"}>
              <button className="flex">
                <div className="  ">Produse animale</div>
              </button>
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/karlos_krl/"
              className="relative aspect-square w-8 text-white"
            >
              <img
                src="/insta.svg"
                alt="instagram logo"
                title="instagram"
              ></img>
            </a>
            <a
              href="https://www.facebook.com/KarlosKrl123"
              className="relative aspect-square w-8"
            >
              <img src="/facebook.svg" alt="facebook logo" title="facebook" />
            </a>
            <a
              href="https://twitter.com/karlos_krl1"
              className="relative aspect-square w-8"
            >
              <img src="/twitter.svg" alt="twitter logo" title="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
