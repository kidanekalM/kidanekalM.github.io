import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Seo from "./components/Seo/Seo";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Qualification = lazy(() => import("./Pages/Qualification/Qualification"));
const AdminSignIn = lazy(() => import("./Pages/Admin/AdminSignIn/AdminSignIn"));
const AdminHome = lazy(() => import("./Pages/Admin/AdminHome/AdminHome"));
const ManageProjects = lazy(() => import("./Pages/Admin/AdminHome/ManageProjects/ManageProjects"));
const AddProjects = lazy(() => import("./Pages/Admin/AdminHome/ManageProjects/AddProjects/AddProjects"));
const EditProjects = lazy(() => import("./Pages/Admin/AdminHome/ManageProjects/EditProjects/EditProjects"));
const CvWrapper = lazy(() => import("./Pages/CvWrapper/CvWrapper"));
const TextToSpeech = lazy(() => import("./Pages/TextToSpeech/TextToSpeech"));

function App() {
  const location = useLocation();
  const isCvRoute = location.pathname.toLowerCase().includes("cv");

  return (
    <>
      <Seo />
      {!isCvRoute && <Header />}
      <Suspense fallback={<div className="routeLoading">Loading field notes...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Projects />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/:slug" element={<Projects />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/qualification/:slug" element={<Qualification />} />
          <Route path="/Qualification" element={<Qualification />} />
          <Route path="/Qualification/:slug" element={<Qualification />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/adminhome/manageprojects" element={<ManageProjects />} />
          <Route path="/AdminHome/ManageProjects" element={<ManageProjects />} />
          <Route path="/adminhome/manageprojects/addprojects" element={<AddProjects />} />
          <Route path="/AdminHome/ManageProjects/AddProjects" element={<AddProjects />} />
          <Route path="/adminhome/manageprojects/editprojects/:id" element={<EditProjects />} />
          <Route path="/AdminHome/ManageProjects/EditProjects/:id" element={<EditProjects />} />
          <Route path="/cvwrapper" element={<CvWrapper />} />
          <Route path="/text_to_speech" element={<TextToSpeech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isCvRoute && <Footer />}
    </>
  );
}

function NotFound() {
  return (
    <main className="notFoundPage">
      <p>404 / Route not found</p>
      <h1>This page does not exist.</h1>
      <a href="/">Return home</a>
    </main>
  );
}

export default App;
