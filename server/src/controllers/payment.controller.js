const express = require('express');
const app = express;
const Razorpay = require('razorpay');

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_ue6nB2PR1kro4m',
  key_secret: 'EepPiFqdB21cflFePLsZMu9I',
});

// Payment controller
const paymentController = async (req, res) => {
    const { amount } = req.body; // Amount in smallest currency unit (e.g., 5000 paise = INR 50.00)

    const options = {
        amount: amount, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1, // 1 for automatic capture, 0 for manual capture
    };
    
    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send({
            message: error.message || "An error occurred during order creation",
        });
    }
};

module.exports = {
    paymentController,
};