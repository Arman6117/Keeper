import { Schema,model,models } from "mongoose";

const NoteSchema = new Schema({
    title:String,
    note:String,
    userId:String,
    userName:String,
    userImg:String
})

const Note = models.Note || model("Note",NoteSchema)

export default Note