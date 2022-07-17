import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    _id: {type: Number,required: true ,unique:true},
    user_id : {type : Number, ref :'users'},
    hotel_id : {type : Number, ref: 'hotels'},
    room_id : {type : Array },
    checkin_date : {type : Date},
    checkout_date : {type : Date},
    price: {
        number_of_nights:{type : Number},
        room_price : {type : Number},
        discount : {type : Number},
        gst : {type : Number},
        total_price : {type : Number},
    }
});

const bookingmodel = mongoose.model('Bookings',BookingSchema)
export {bookingmodel};