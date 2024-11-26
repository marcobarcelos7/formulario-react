import React from "react";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className="home-container">
      <h1>Boas vindas!</h1>
      <p>Voce esta na home.</p>
      <Button label={"Login"} onClick={handleLoginClick}/>
    </div>
  );
};

export default Home;