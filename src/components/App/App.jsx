import { Route, Routes } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
      </Routes>
    </Layout>
  );
}
