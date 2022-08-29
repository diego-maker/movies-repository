import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./Movies.css";
import ReactPlayer from "react-player/youtube";
import getVideoMovie from "../api/getVideo";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalMovie(props) {
  const [dataMovie, setDatamovie] = useState("");

  const fetchGetMovies = async () => {
    const response = await getVideoMovie(props.idModalMovie);
    const data = response.results
    data.map((type)=>{
      if(type.type ==="Trailer"){
        return setDatamovie(type.key)
      }
    })
  };

  useEffect(() => {
    fetchGetMovies();
  }, [props.open]);

  return (
    <>
      <Modal
        open={props.open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="box-modal" sx={{ ...style, width: 650, height: 350 }}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex" }}>
              <h2 id="child-modal-title">{props.titleModal}</h2>

              <div style={{ justifyContent: "center", marginLeft: "40px" }}>
                <FormControl>
                  <FormLabel id="demo-form-control-label-placement"></FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="EN"
                  >
                    <FormControlLabel
                      value="EN"
                      control={<Radio />}
                      label="EN"
                      labelPlacement="start"
                    />

                    <GiUsaFlag style={{ marginTop: "5px" }} size={30} />
                    <GiBrazilFlag style={{ marginLeft: "40px" }} size={45} />

                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="PT-BR"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <p id="child-modal-description">{props.descriptionModal}</p>
          </div>

          <div className="wrapper">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${dataMovie}`}
              className="player"
            ></ReactPlayer>
          </div>
          <Button
            style={{ backgroundColor: "#111", justifyContent:"center", position: "absolute" }}
            onClick={props.close}
          >
            Close trailer
          </Button>
        </Box>
      </Modal>
    </>
  );
}
