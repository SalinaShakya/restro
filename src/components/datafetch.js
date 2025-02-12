"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
    // const [count,setCount]=useState(0);
    const [product, setProduct] = useState(null);
    const fetchData = () => {
        const response = axios.get("https://fakestoreapi.com/products/1");

        // response.then((value)=>{
        //     console.log(value.data,"value");
        // })
        // .catch((error)=>{
        //     console.log(error,"error");
        // });
        response.then((value) => {
            setProduct(value.data);
        })
            .catch((error) => {
                console.log(error, "error");
            });
    }

    useEffect(() => {
        fetchData();
    }, [])


    useEffect(() => {
        fetchData();
    }, []);
    return <div>
        <img src={product?.image} alt="" className="w-10 h-20" />
        <p>{product?.title}</p>
    </div>
}

export default DataFetch;