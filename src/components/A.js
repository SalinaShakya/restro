import React,{useContext} from "react";
import { CounterContext } from "@/context/CounterContext";
import B from "./B";
const A = ({ count }) => {
    return (
        <div>
            A component={count}
            <B count={count} />
        </div>
    )
}
export default A;