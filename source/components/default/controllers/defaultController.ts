
import { NextFunction, Request, Response } from 'express';
import path from 'path';

const ShowHomepage = (req:Request, res:Response, next:NextFunction) => {

    res.render("default/views/homepage");
}

export default {
    ShowHomepage, 
};