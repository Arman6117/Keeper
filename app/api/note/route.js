import { connectDb } from "@/utils/database";
import Note from "@/models/note";

export const POST = async(request) =>{

    const {title,note,userId,userName,userImg} = await request.json();
    try {
        await connectDb();

        const newNote = new Note({title,note,userId,userName,userImg});

        await newNote.save();

        return new Response("Saved successfully !!",{status:201});
    } catch (error) {
        console.log(error.message);
    return new Response("Failed to save", { status: 500 });  
    }
}