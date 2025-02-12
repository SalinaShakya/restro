
// // import reuse from "@/components/reuse/"
// import reuse from "../components/resue";

// const reuse={}=>{
// return 
//     <div>
//         <h1 classroom="text-8xl">
//         hello from card
//     </div>
// }
// export default function Home(){
//     return(
//         <div classroom="h=screen">
//         <Card> </Card>
//         <Grid> </Grid>
//         <reuse></reuse>
//         </div>


//     )
// }

export default function Reused({college, name, phone, age}) {

    return (
        <div className="bg-blue-500 flex flex-col items-center p-4 relative group">
            src={image}
            <img className="h-[100px] w-[100px] rounded-full" src="https://meta-q.cdn.bubble.io/f1717102933566x753149416257430700/Random%20User%20Generator%20.webp" alt="user" />
            <h1 className="my-10">{name}</h1>

            <div className="bg-[rgb(0,0,0)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-50 ">
                <h1 className="text-white">{college}</h1>
                <h2 className="text-white">{name}</h2>
                <h2 className="text-white">{phone}</h2>
                <h2 className="text-white">{age}</h2>
            </div>

        </div>


    )

}