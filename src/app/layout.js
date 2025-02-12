// // "use client"
// // import "./globals.css";
// // // import { ThemeContext } from "@/context/theme";
// // import { useState } from "react";

// // export default function RootLayout({ children }) {
// //   // const [mode,setMode]=useState("light");

// //   return (
    
   
// //       <div className="header">
// //         <nav>
// //           <ul className="flex space-x-6 bg-gray-500 p-2 ">
// //             <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
// //             <li><a href="#news" className="text-white hover:text-gray-300">News</a></li>
// //             <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
// //             <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
// //           </ul>
// //         </nav>

// //         {/* <button onClick={()=>setMode("light")}>Light ☀️</button>
// //       <button onClick={()=>setMode("dark")}>Dark 🌙</button> */}

// //         {/* // className={`antialiased`} */}
// //         {/* <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider> */}

// //         {children}
// //         </div>
      
   
// //   );
// // }
// "use client";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <div className="min-h-screen bg-slate-500">
//       {/* <Header /> Navbar is now in a separate component */}
//       <main className="p-4">{children}</main> {/* Wrap children inside <main> */}
//     </div>
//   );
// }

"use client";
import "./globals.css";
// import Header from "@/components/Header"; // Import the header component

export default function RootLayout({ children }) {
  return (
    <html lang="en">{/*  Required for Next.js */}
      <body className="min-h-screen bg-slate-500">
        {/* <Header />  Navbar stays consistent across pages */}
        <main className="p-4">{children}</main> {/* Proper page structure */}
      </body>
    </html>
  );
}

