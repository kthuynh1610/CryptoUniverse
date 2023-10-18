import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
      'X-RapidAPI-Key': 'a6be17d245mshe73c0db851f209fp11134ejsn6b8108b81c6a',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeader})
export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({baseUrl : baseUrl}),
      endpoints: (builder) =>({
            getCryptos: builder.query({
                  query: (count) => createRequest(`/coins?limit=${count}`)
            })
      })
})

export const {
      useGetCryptosQuery,
} = cryptoApi;