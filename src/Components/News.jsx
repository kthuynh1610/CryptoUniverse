import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import millify from "millify";
import { useGetNewsQuery } from '../api/NewsApi';
import moment from 'moment';

const News = ({simplified}) => {
  const count = simplified ? 5 : 100
  const {data : newsList} = useGetNewsQuery({newsTopic: 'business',count})
  if(!newsList?.value) return "Loading..."
  const filterNews = newsList?.value?.filter((item)=> item.hasOwnProperty('image'))
  console.log(filterNews)
  return (
    <div className='grid grid-cols-3 gap-5 p-5'>
      {filterNews.map((item)=>(
        <div key={item.id} className='w-54 h-80 flex flex-col bg-white'>
          <Link className='group text-black flex-row flex p-5 justify-between items-center'>
            <h4>{item.name}</h4>
            <img src={item?.image?.thumbnail?.contentUrl} className='w-20 h-20'/>
          </Link>
          <div className='text-sm p-5 flex flex-col justify-between'> 
            <p>{item.description > 100 ? `${item.description.substring(0,100)}...` : item.description}</p>
            <div className='flex flex-row justify-end'>
              <img src={item.provider.image?.thumbnail?.contentUrl}/>
              <p>{item.provider?.name}</p>
            </div>
            <p>{moment(item.datePublished).startOf('ss').fromNow()}</p>
          </div>
          </div>
      ))}
    </div>
  )
}

export default News