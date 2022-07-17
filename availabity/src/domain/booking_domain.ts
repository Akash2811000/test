import { hotelmodel } from "../model/hotel";
import { bookingmodel } from "../model/booking";
import express, { Express, Request, Response } from 'express';

class BookingDomain {

    async checkavilable (req: Request , res : Response){
        var getdata = bookingmodel.find();
        res.send(getdata);
    }
}

export {BookingDomain}