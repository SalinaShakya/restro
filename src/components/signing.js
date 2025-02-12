// "use client"
// import React from 'react'
// import './signing.css'
// const Signing=()=>{

// return (
//     <html>
//         <body>
//     <div className="sign">
//         <div className="grid grid-cols-2">
//             <div><h1> Sign up</h1></div>
//         </div>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 {/* <input type="text" name="name" id="name" className="border border-Blue-200" placeholder="cat" onChange={(event) => { setFullName(event.target.value) }}></input><br></br> */}
//                 <input type="text" name="name" id="name" className="border border-Blue-200" value={formik.values.name} placeholder="cat" onChange={(formik.handleChange)}></input><br></br>
//                 <label htmlFor="email">Email Address</label>
//                 {/* <input type="text" name="email address" id="email" className="border border-green-250" onChange={(event) => { setEmail(event.target.value) }} ></input><br></br> */}
//                 <input type="text" name="email" id="email" className="border border-green-250" value={formik.values.email} onChange={(formik.handleChange)} ></input><br></br>

//                 <span></span>
//                 <label htmlFor="pass">Password</label>
//                 <input type="text" name="password" id="pass" className="border border-green-250" onChange={(event) => { setPassword(event.target.value) }}></input><br></br>
//                 <label htmlFor="name">Confirm Password</label>
//                 <input type="text" name="cpassword" id="cpassword" className="border border-Blue-200" onChange={(event) => { setCPassword(event.target.value) }}></input><br></br>
//                 <label htmlFor="city">City</label>
//                 <input type="text" name="city" id="city" className="border border-Blue-200" onChange={(event) => { setCity(event.target.value) }}></input><br></br>
//                 <button type="submit" className="bg-blue-600 rounded-lg flex-auto" >submit</button>
//             </div>
//         </form >
//     </div >
//     </body>
//     </html>
// );
// }
