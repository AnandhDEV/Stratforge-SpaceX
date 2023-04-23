import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllLaunches } from "../../redux/slice/launchSlice";
import { Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./launches.css";

function Launches() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Launches } = useSelector((state) => state.launches);

  console.log(Launches);

  useEffect(() => {
    dispatch(GetAllLaunches());
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        color="common.white"
        sx={{ marginBottom: "20px" }}
      >
        Launches
      </Typography>
      <Box className="launches_card_container">
        <Grid container spacing={2}>
          {Launches?.map((item, index) => (
            <Grid item md={3} key={index}>
              <Box key={index} className="launches_card">
                <Box>
                  <Typography variant="h5" color="grey">
                    {dayjs(item.date_utc).format("MMMM DD, YYYY")}
                  </Typography>
                  <Typography variant="h1" color="common.white">
                    {item.name}
                  </Typography>
                </Box>
                <Button
                  onClick={() => navigate(`/dashboard/launches/${item.id}`)}
                  variant="contained"
                  color="primary"
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Launches;
