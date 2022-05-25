import express from 'express';
import mongoose from 'mongoose';
import postSchema from '../models/postMessage.js'

//status code --->https://www.restapitutorial.com/httpstatuscodes.html
export const getPosts = async (req, res) => { 
    try {
        const postMessages = await postSchema.find({});
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}