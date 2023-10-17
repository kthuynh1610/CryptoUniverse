import React, {useState} from 'react'
import {useGetCryptosQuery} from '../api/CryptoApi';

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const Stats = data?.data?.stats
  if(isFetching) return 'Loading...'
  return (
    <>
      <div className='p-4 flex flex-col'>
          <div className=" p-5 h-full justify-center flex flex-col bg-white">
            <h1>
                Global Stats
            </h1>
            <div className='grid grid-cols-2 gap-4 mt-5'>
                <h4>Total Markets :  {Stats?.totalMarkets}</h4>
                <h4>Total: {Stats?.total} </h4>
                <h4>Total Exchanges: {Stats?.totalExchanges}</h4>
                <h4>Total Market Cap: {Stats?.totalMarketCap}</h4>
                <h4>24h Volumes: ${Stats?.total24hVolume}</h4>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home