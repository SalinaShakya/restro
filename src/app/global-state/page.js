// "use client"

// import A from '@/components/A';
// import React, { useState } from 'react';
// import { CounterContext } from '@/context/CounterContext';
// const GlobalState = () => {
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div className={mode==="light"?"bg-white":"bg-white"}>
//             <p className={mode==="light"?"text-black":"bg-white"}/>
//             Global State Page={count};
//             <button className="my-2 py-2 px-2" onclick={increment}>Increase</button>
//             <CounterContext.Provider value={count}>
//             {/* <A count={count} /> */}
//             <A/>
//             </CounterContext.Provider>
            
//         </div>
//     );

// };
// export default GlobalState;