import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


/* Pages */
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CreatePage = lazy(() => import("./pages/CreatePage/CreatePage"));
const TemplatesPage = lazy(() => import("./pages/TemplatesPage/TemplatesPage"))

// React suspense fallback UI
const Loading = () => <h1>Loading ...</h1>;

const RoutesConf = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConf;
