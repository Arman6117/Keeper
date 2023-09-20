"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab, Zoom } from "@mui/material";
import { useUser } from "@clerk/nextjs";
function Note(props) {
  const { isLoaded, isSignedIn } = useUser();
  function handleClick() {
    if (isSignedIn && isLoaded) {
      props.onDelete(props.id);
    } else {
      props.onDelete(props.sId);
    }
  }

  return (
    <div className="note z-30">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab color="warning" onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
