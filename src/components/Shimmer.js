export const Shimmer = ()=>{
    return (
        <>
                {/* <div className="w-full h-[10rem] bg-slate-200"></div> */}
            <div className="w-full h-20 bg-slate-200 my-2 flex items-center">
                <div className="h-9 rounded w-[25%] bg-white ml-28"></div>
                <div className="h-9 rounded w-16 bg-slate-300 ml-5"></div>
            </div>
            <center><h1 className="font-medium">Restaurants loading.........</h1></center>
            <div className="flex justify-evenly flex-wrap">
                {Array(10).fill("").map((e,index) => (<div key={index} className="w-52 h-56 bg-slate-200 m-5"></div>))}
            </div>
        </>
    )
}

export const MenuShimmer = () =>{
    return(
        <>
            <div className="h-[100vh] flex justify-around p-10 m-5">
                <div className="w-[40%] h-[70vh] bg-slate-200">
                    <div className="w-[90%] mx-6 my-12 h-[40vh] bg-slate-300"></div>
                    <div className="w-[50%] h-8 bg-slate-300 m-5"></div>
                    <div className="w-[50%] h-8 bg-slate-300 m-5"></div>
                </div>
                <div className="w-[40%] h-[80vh] bg-slate-200">
                    <div className="w-[25%] h-10 bg-slate-300 m-5"></div>
                    {Array(10).fill("").map((e,index) => (<div key={index} className="w-[50%] h-8 bg-slate-300 m-5"></div>))}
                </div>
            </div>
        </>
    );
}
