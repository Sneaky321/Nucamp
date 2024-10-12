import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsiteSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionSlice';
import { favoritesReducer } from '../features/favorites/favoriteSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        favorites: favoritesReducer
    }
});