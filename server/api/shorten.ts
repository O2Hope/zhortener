import { nanoid } from "nanoid";

export default defineEventHandler( async(event) => {

    // Read the link from the request body
    const { link } = await readBody(event);

    // Generate a random 10 character ID 

    const id = nanoid(10);

    // Save the link in a database


    // Return the new link
    
    return {
        link: `Your link is https://zhortener.io/${id}`
    }
    });
