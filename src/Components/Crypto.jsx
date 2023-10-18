import React, {useState} from 'react'
import {useGetCryptosQuery} from '../api/CryptoApi';
import {Link} from 'react-router-dom'
import millify from "millify";

const Crypto = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching} = useGetCryptosQuery(count)
  const [coins, setCoins] = useState(cryptoList?.data?.coins)
  if(isFetching) return 'Loading...'
  return (
    <div className='grid grid-cols-4 gap-5 p-5'>
      {coins?.map((item) =>(
        <div key={item.uuid} className='w-54 h-48  bg-white'>
          <Link className='group text-black' to={`/Crypto/${item.uuid}`}>
            <div className='flex justify-between p-5 border-b'>
              <p>{item.name}</p>
              <img className='w-5 h-5' src={item.iconUrl} />
            </div>
          </Link>
          <div className='flex flex-col p-4'>
            <p>Market Cap: {millify(item.marketCap)}</p>
            <p>Price: ${millify(item.price)}</p>
            <p>Daily Change: {millify(item.change)}%</p>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default Crypto