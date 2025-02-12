"use client"
import { useState } from "react";
const States = (props) => {
    const { title } = props;
    let [count, setCount] = useState(10)

    // // const [state,func]=useState(0)
    // const [count,setCount]=useState(0)

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        const FinalValue = count - 2
        if (FinalValue > 0) {
            setCount(count - 1);
        }
        else {
            setCount(0);
        }

        setCount(count - 1);
    }

// const States=()=>{
return (
    <div>
        <h1 className="text=5xl"> Counter value={count}</h1>
        <button
            className="mt-4 bg-slate-400 text-black px-1 py-1 rounded-lg"
            onClick={decrement}>
            Decrement
        </button>
        <button
            className="mt-4 bg-slate-400 text-black px-1 py-1 rounded-lg"
            onClick={increment}>
            Increment
        </button>
    </div>
);
};


export default States;