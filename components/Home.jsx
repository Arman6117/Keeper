"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import { useUser } from "@clerk/nextjs";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();

  const uid = user?.id;
  const fetchNotes = async (id) => {
    if (isSignedIn && isLoaded) {
      const response = await fetch(`/api/note/${id}`);
      const data = await response.json();

      setNotes(data);
    }
  };
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  const deleteNote = async (id) => {
    if(isSignedIn && isLoaded)
    {

      const response = await fetch(`/api/note/${id}`, { method: "DELETE" });
      const data = await response.json();
      setNotes(data);
    }else{
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  };
  useEffect(() => {
    if (isLoaded || isSignedIn) {
      fetchNotes(uid);
    }
  }, [isLoaded, isSignedIn, notes]);

  // console.log(notes);
  return (
    <div className="">
      <Header />
      <CreateArea fetchNote={fetchNotes} onAdd={addNote} />
      {isLoaded && isSignedIn ? null : (
        <Note title={"Tip"} content={"Create an account to save  notes"} />
      )}

      {notes.map((noteItem, index) => {
        return (
          <div className="flex flex-col justify-center items-center sm:inline ">
            <Note
              key={index}
              id={noteItem._id}
              sId={index}
              title={noteItem.title}
              content={noteItem.note}
              onDelete={deleteNote}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
