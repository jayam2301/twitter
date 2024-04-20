import React, { useEffect } from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import Rightsidebar from "../Ridhtsidebar/Rightsidebar";
import axios from "axios";
function Home() {
  useEffect(() => {
    axios
      .get("localhost:3000/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <Sidebar />
      <Feed />
      <Rightsidebar />
    </div>
  );
}

export default Home;
