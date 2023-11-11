import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import request from "./request";



const Main = () => {
    const key = 'b14c9b0e9311b2295d0ed3f8e8d9eafd'
    const [movie, newMovie] = useState([])
    const arrange = movie[Math.floor(Math.random() * movie.length)]
    useEffect(() => {
        async function comeRun() {
            const newRun = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`)
            newMovie(newRun.data.results)
            console.log(movie)
        }
        comeRun()
    }, [])

    return (
        <>
            {/* <div className="w-full h-[550px]">
                <div className="w-full h-full">
                    <div className="absolute w-full h-[95%] bg-gradient-to-r from-black"></div>
                    <img className="object-fit h-[100%] w-full" src={`https://image.tmdb.org/t/p/original${arrange.backdrop_path}`} />
                    <div className="top-[20%] absolute">
                        <div className=" ml-[60px] text-white">
                            <h3 className="text-white text-3xl font-bold">{arrange.title}</h3>
                            <div className="mt-5 space-x-4">
                                <button className="mlborder py-2 px-5 bg-black text-white font-bold hover:bg-white hover:text-black">Play</button>
                                <button className="border py-2 px-4 bg-slate-400 text-black font-bold hover:bg-black hover:text-white">Watch Later</button>
                                <p className="mt-2 ml-[10px]">Released:{arrange.release_date}</p>
                                <p className=" sm:font-4xs sm:max-w-[15%] w-full md:max-w-[50%] font-bold" >{arrange.overview} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>

    )
}
export default Main
