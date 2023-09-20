// import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab, Zoom } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note z-30">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab color = "warning"  onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
