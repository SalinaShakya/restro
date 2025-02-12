"use client"
import { useState } from "react";
const Cities = (props) => {
    const { title } = props;
    let[city,setCity]=useState("");
    const Kathmandu = () => {
        setCity("https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=1000w")
    }
    const Bhaktapur = () => {
        <img src="https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=1000w"></img>
    }
    const Lalitpur = () => {
        <img src="https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=1000w"></img>
    }

return (
    <div>
        <img src={city}/>
        <h1 className="mt-4 text-black ">CITIES</h1>
        <p></p>
        <button
            className=" text-white px-3 py-3 rounded-lg bg-black" onClick={Kathmandu}>Kathmandu</button>
        <button
            className=" text-white px-3 py-3 rounded-lg bg-black" onClick={Bhaktapur}>Bhaktapur</button>
        <button
            className=" text-white px-3 py-3 rounded-lg bg-black" onClick={Lalitpur}>Lalitpur</button>
    </div>
);
};
export default Cities;