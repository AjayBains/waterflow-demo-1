import { Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";

const Form = () => {
  const [isIn, setIsIn] = useState({
    checkedA: true,
  });
  const handleChange = (event) => {
    setIsIn({ ...isIn, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Typography component="h4" align="center">
        INPUTS
      </Typography>
      <form style={{ border: "1px solid black", padding: ".5rem" }}>
        <div className="form-group" align="center">
          <label htmlFor="starting" style={{ marginRight: "7px" }}>
            Starting
          </label>
          <input type="number" id="starting" name="starting" min="0" />
        </div>
        <div
          className="form-group"
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: "7px" }}>Trx</label>
          <input
            type="number"
            style={{ width: "20%", marginRight: "7px" }}
            min="0"
          />
          <input
            type="text"
            style={{ width: "20%", marginRight: "7px" }}
            value={isIn.checkedA ? "IN" : "OUT"}
            onChange={(e) => setIsIn(e.target.value)}
          />
          <Switch
            checked={isIn.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />

          <div className="move">
            <IconButton>
              <ArrowUpwardSharpIcon />
            </IconButton>
            <IconButton>
              <ArrowDownwardSharpIcon />
            </IconButton>
          </div>
        </div>
        <AddCircleTwoToneIcon />
        <div>
          <label htmlFor="">End</label>
          <input
            type="number"
            style={{
              borderRadius: "10px",
              //   display: "inline-block",
              padding: ".3rem",
              marginLeft: ".5rem",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
