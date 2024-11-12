import React from "react";
import Addtodos from "./Addtodos";





function Home() {
  return (
    <>
      <div className="display-4 text-center">welcome {localStorage.getItem("name")}</div>
      <Addtodos />
      
      
      
    // </>
  )
}

export default Home;