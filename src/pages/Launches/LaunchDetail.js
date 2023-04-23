import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLauncheById } from "../../redux/slice/launchSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import "./launches.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import dayjs from "dayjs";

function LaunchDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  const { launchDetialbyId } = useSelector((state) => state.launches);
  const { id } = useParams();

  console.log(launchDetialbyId);

  useEffect(() => {
    dispatch(GetLauncheById(id));
  }, []);

  return (
    <Box className="launchdetail_main_container">
      <Box className="back_button_container">
        <Button
          size="small"
          startIcon={<ArrowBackIosIcon fontSize="large" />}
          onClick={() => navigate("/dashboard/launches")}
        >
          BACK TO LAUNCHES
        </Button>
      </Box>

      <Box className="video_container">
        <iframe
          className="launchdetialvideo"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${launchDetialbyId?.links?.youtube_id}?autoplay=0`}
        ></iframe>
      </Box>
      <Box className="launch_detail_title_container">
        <Typography variant="h2" color="grey">
          {dayjs(launchDetialbyId.date_utc).format("MMMM DD, YYYY")}
        </Typography>
        <Typography variant="h1" color="common.white">
          {launchDetialbyId.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default LaunchDetail;
