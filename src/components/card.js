function Card()
{
return(
    <div className="bg-blue-500 flex flex-col items-center p-4 relative group">
    <img className="h-[100px] w-[100px] rounded-full" src="https://meta-q.cdn.bubble.io/f1717102933566x753149416257430700/Random%20User%20Generator%20.webp" alt="user"/>
    <h1 className="my-10">Salina Shakya</h1>

    <div className="bg-[rgb(0,0,0)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-50 ">
      <h1 className="text-white">Salina Shakya</h1>
      <h2 className="text-white">NCCS</h2>
      <h2 className="text-white">meow</h2>
    </div> 
  </div>
);
}
export default Card;