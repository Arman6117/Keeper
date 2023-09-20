import { connectDb } from "@/utils/database";
import Note from "@/models/note";

export const GET = async (request,{params}) =>{
    try {
        await connectDb();

        const notes = await Note.find({userId:params.id});

        return new Response(JSON.stringify(notes),{status:200});
        
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to fetch notes", { status: 500 });
    }
}

export const DELETE = async(request,{params}) =>{
    try {
        await connectDb();

        await Note.findOneAndRemove({_id:params.id});

        return new Response("Note deleted", {status:202});
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to delete", { status: 500 });
    }
}