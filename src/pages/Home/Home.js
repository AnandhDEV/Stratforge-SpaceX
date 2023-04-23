import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetHomepageContents } from "../../redux/slice/homeSlice";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { UpcomingLaunches, historys } = useSelector((state) => state.home);

  console.log({ UpcomingLaunches, historys });
  useEffect(() => {
    dispatch(GetHomepageContents());
  }, []);

  return (
    <Box>
      <Box className="upcoming_launches_container">
        <Box className="upcoming_launches_child_container">
          <Typography variant="h2" color="common.white">
            Upcoming Launches
          </Typography>

          <Button
            color="primary"
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            onClick={() => navigate("/dashboard/launches")}
          >
            View All
          </Button>
        </Box>
        <Box className="upcoming_launches_card_container">
          {UpcomingLaunches?.map((item, index) => (
            <Box key={index} className="upcoming_launches_card">
              <Box>
                <Typography variant="h5" color="grey" sx={{ width: "200px" }}>
                  {dayjs(item.date_utc).format("MMMM DD, YYYY")}
                </Typography>
                <Typography
                  variant="h1"
                  color="common.white"
                  sx={{ width: "200px" }}
                >
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
          ))}
        </Box>

        <Typography variant="h2" color="common.white">
          History Events
        </Typography>

        <Box className="history_card_container">
          <Grid container spacing={2}>
            {historys?.map((item, index) => (
              <Grid item md={6}>
                <Box key={index} className="history_card">
                  <div>
                    <Typography variant="h5" color="grey">
                      {dayjs(item.date_utc).format("MMMM DD, YYYY")}
                    </Typography>

                    <Typography variant="h1" color="common.white">
                      {item.title}
                    </Typography>
                    <div className="text_ellipsis">
                      <Typography
                        variant="h2"
                        color="grey"
                        sx={{ marginTop: "10px" }}
                        // className="text_ellipsis"
                      >
                        {item.details}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(item.links.article, "_blank").focus()
                    }
                    variant="contained"
                    color="primary"
                  >
                    View article
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
