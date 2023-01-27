import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  const authToken = true;

  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      <Nav minimal={true} authToken={authToken} />
      <div className="home">
        <h1>Swipe Right&#174;</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
