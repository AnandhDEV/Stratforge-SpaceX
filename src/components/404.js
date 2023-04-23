import React from "react";
import notfound from "../assests/404.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  return (
    <div className="notFound_container">
      <img src={notfound}></img>
      <Button color="primary" onClick={() => navigate("dashboard/home")}>
        Back to home
      </Button>
    </div>
  );
}

export default Notfound;
