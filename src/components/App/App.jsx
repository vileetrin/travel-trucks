import { Route, Routes } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

export default function App() {
  return (
    <Layout>
      {/* {loading && <Loader />} */}
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* </Suspense> */}
    </Layout>
  );
}
