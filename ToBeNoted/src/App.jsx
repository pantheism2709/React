import { useEffect, useState } from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/AuthSlice";
import { Footer, Header } from "./components/Index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("HEllo", userData);

        if (userData) {
          dispatch(login({ userData }));
        } else {
          console.log("hello");
          dispatch(logout());
        }
      })
      
      .finally(() => setLoading(false));
  }, []);

  // console.log(process.env.REACT_APP_APPWRITE_URL); // agr create react app se banate he to ese access krte he
  // console.log(import.meta.env.VITE_APPWRITE_URL);  // Vite se banao to ese access lete he
  return (
    <>
      <div
        className=" min-h-screen flex flex-wrap
      content-between bg-gray-400 "
      >
        <div className=" w-full block ">
          <Header />
          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
