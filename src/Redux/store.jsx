import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../api/CryptoApi';
import { newsApi } from '../api/NewsApi';

export default configureStore({
      reducer:{
            [cryptoApi.reducerPath] : cryptoApi.reducer,
            [newsApi.reducerPath] : newsApi.reducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
      
})