import React, {useState} from 'react'
import {useGetCryptosQuery} from '../api/CryptoApi';
import {Link} from 'react-router-dom'
import Crypto from './Crypto';
const Home = () => {
  const {data : cryptoList, isFetching} = useGetCryptosQuery(10);
  
  const Stats = cryptoList?.data?.stats
  if(isFetching) return 'Loading...'

  return (
    <>
      <main className='p-4 flex flex-col'>
          <div className=" p-5 bg-white">
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
          <div className='p-5 mt-5 h-full'>
            <div className='justify-between items-center flex flex-row mb-5'>
              <h1 className='text-3xl'>Top 10 Coins today</h1>
              <h1 className='text-xl'>
              <Link to="/Crypto">Show More</Link> 
              </h1>
            </div>
            <div>
              <Crypto simplified />
            </div>
          </div>
      </main>
    </>
  )
}

export default Home