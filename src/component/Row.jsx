import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineLike, AiOutlineDislike, AiOutlinePlayCircle } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
const Row = ({ title, fetchURL }) => {

  const [Row, newRow] = useState([])
  const [like, setLike] = useState(false)

  useEffect(() => {
    async function rowRun() {
      const newRun = await axios.get(fetchURL)
      newRow(newRun.data.results)

      console.log(Row)
    }
    rowRun()
  }, [fetchURL])
  return (
    <>
      <div className='text-center '>
        <h2 className='text-2xl font-bold p-3 text-white'>{title}</h2>
        <div className='sm:block ml-[70px] mr-[70px] md:grid mt-[10px]  grid-cols-4 space-x-1  space-y-4 shadow-lg'>
          {Row.map((item, id) => (
            <div className='justify-center text-red-500'>
              <div id='videobox' className='opacity-0 w-[260px] h-[180px] cursor-pointer absolute bg-black hover:opacity-80 '>
                <GiSelfLove className='text-2xl text-white'/>
                  <p className='text-white ml-[5px] mt-[30px] font-bold text-xs z-10'>{item.title}</p>
                <p className='font-bold hidden hover:block hover:text-black'>{item.title}</p>
              </div>
              <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="item.title" className='sm:w-full w-[230px] h-[180px] border rounded-lg ' id='videofeed' />
              <div className='ml-[20px] mt-3 flex'>
                <div className='flex space-x-2'>
                  <p className='py-1 px-1 bg-[#EC5800c] text-white rounded text-xs'>Votes:{item.vote_count}</p>
                  <AiOutlineLike className='text-3xl text-white hover:text-red-600' />
                  <AiOutlineDislike className='text-white text-3xl hover:text-red-600' />
                  <GiSelfLove id='lovebtn' className='text-2xl text-white hover:text-red-800'/>
                  <FaDownload className='text-3xl text-white hover:text-red-600' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default Row 