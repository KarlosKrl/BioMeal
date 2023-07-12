import mongooseConnect from "lib/utils/mongo/mongoose";
import Main from "./components/Main";
import Comments from "models/Comments";
import { use } from "react";
import Movies from "models/Testare";
import Product from "models/Product";
import Testare from "models/Testare";

export default function Home() {
  // const comments = use(getData());

  // console.log(comments);
  return (
    <div>
      <Main />
    </div>
  );
}

// async function getData() {
//   await mongooseConnect();

//   const comment = await Testare.find();
//   return comment;
// }
