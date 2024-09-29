import { Route, Routes } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage')
);
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures'));
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews'));
const FavouritesPage = lazy(() =>
  import('../../pages/FavouritesPage/FavouritesPage')
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
