import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Root() {
  const navigate = useNavigate();
  const { authData } = useSelector((state) => state.auth);
  const currentPath = window.location.pathname;
  const [render, setRender] = useState(<></>);

  useEffect(() => {
    console.log("Root.jsx: useEffect: currentPath: ", currentPath);
    console.log("Root.jsx: useEffect: authData: ", authData);
    if (
      !authData?.user &&
      !currentPath.includes("/login") &&
      !currentPath.includes("/register")
    ) {
      navigate(`/login`);
    } else {
      setRender(<Outlet />);
    }
  }, [authData, navigate, currentPath]);

  return render;
}

export default Root;
