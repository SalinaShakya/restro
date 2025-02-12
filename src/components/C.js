import React, {useContext} from "react";
import { CounterContext } from "@/context/CounterContext";
import A from "./A"
import { useContext } from "react";
const C=(props)=>{
    return(
        <div> C component={value}
            {/* C component={props.count}
<A count={props.count}/> */}
        </div>
    )
}
export default C;