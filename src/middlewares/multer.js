import DatauriParser from 'datauri/parser.js';

import multer from "multer";
const storage = multer.memoryStorage();
export const multerUploads = multer({ storage }).single('image');

const parser = new DatauriParser();

export const getDataUri = (buffer)=>{
    const dataUri = parser.format('.png',buffer);// Assuming you want to upload as PNG
    return dataUri;
}

