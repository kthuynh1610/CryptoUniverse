import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const newsApiHeader = {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'a6be17d245mshe73c0db851f209fp11134ejsn6b8108b81c6a',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url, headers: newsApiHeader})

export const newsApi = createApi({
      reducerPath: 'newsApi',
      baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
      endpoints: (builder)=>({
            getNews: builder.query({
                  query: ({ newsTopic, count }) => createRequest(`/news/search?q=${newsTopic}&count=${count}`)
            })
      })
})

export const {
      useGetNewsQuery,
} = newsApi