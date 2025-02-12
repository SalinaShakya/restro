
// import States from "@/components/states";
// import Card from "../components/card";
// import Cities from "@/components/cities";

import Signing from "@/components/signing";
import '../components/styles.css';
import Form from "@/components/form";
// import Async from "@/components/async/async";
import DataFetch from "@/components/datafetch";

// import Grid from "../components/grid";
// import Reused from "../components/reuse"
// import Reused from "../app/bim/page"

export default function Home() {
  return (
    <h1 className="bg-slate-500"  >
      {/* <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul> */}
      <nav>
        <ul className="flex flex-row items-center space-x-6 bg-gray-500 p-2 ">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#news" className="text-white hover:text-gray-300">News</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#login" className="text-white hover:text-gray-300">Log In</a></li>
          <li><a href="#signup" className="text-white hover:text-gray-300">Sign Up</a></li>
         {/* <Async/> */}
         <DataFetch/>
        </ul>
      </nav>



      <Form />

    </h1>

    // <div className="bg-white text-pink-500">
    //   <h1>Form</h1>
    //   <Form />
    // // </div>
  );

};


