'use client`'
import React, {  useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useUser } from "@clerk/nextjs";
function CreateArea({fetchNote}) {
  const {user} = useUser();
  const [expand, setExpand] = useState(false);
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const userId = user?.id;
  const userImg = user?.imageUrl;
  const userName = user?.fullName

 
  const saveNote = async () =>{
    try {
      await fetch(`/api/note`,{method:"POST",  headers: {
        "Content-Type": "application/json",
      },body:JSON.stringify({title,note,userId,userName,userImg})})
      setTitle('');
      setNote('');
     fetchNote(userId);
    } catch (error) { 
      console.log(error.message);
    }
  }
  function handleExpand() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note transition-all">
        {expand && (
          <input
            name="title"
             onChange={(e)=>{setTitle(e.target.value)}}
            placeholder="Title"
            value={title}
          />
        )}

        <textarea
          name="content"
          onClick={handleExpand}
          onChange={(e)=>{setNote(e.target.value)}}
          placeholder="Take a note..."
          value={note}
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab color="warning" className="note" onClick={saveNote}>
            <AddIcon  />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
