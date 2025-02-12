import React,{useContext} from "react";
import { CounterContext } from "@/context/CounterContext";

import C from "./C"
const B=({count})=>{
    return(
        <div>
            B component={count}
<C count={count}/>
        </div>
    )
}
export default B;