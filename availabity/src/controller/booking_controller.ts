import { BookingDomain  } from "../domain/booking_domain";
import express, { Express, Request, Response } from 'express';
var router = express.Router();

class BookingController {

    static async checkavilabity (req: Request , res : Response){
        const bookingdomain = new BookingDomain();
       await bookingdomain.checkavilable(req,res);
    }
}

router.get('/check',BookingController.checkavilabity);
export {router};