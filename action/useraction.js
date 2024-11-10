"use server"

import Razorpay from 'razorpay';
import connectDb from '@/db/connectDb';
import Payment from '@/models/Payment';
import User from '@/models/User';

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    
    // let user = await User.findOne({username: to_username})
    // const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })



    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}