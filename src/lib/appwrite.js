import { Client, Databases, Functions } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); 

export const databases = new Databases(client);
export const functions = new Functions(client);

export { client };

// Database and Collection IDs - Replace with your actual IDs
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export const FUNCTION_ID = import.meta.env.VITE_APPWRITE_FUNCTION_ID; 