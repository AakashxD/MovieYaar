const crypto = require('crypto');

const verifypaymentcontroller = (req, res) => {
  // Extract parameters from request body
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  // Log extracted values
  console.log('Order ID:', razorpay_order_id);
  console.log('Payment ID:', razorpay_payment_id);
  console.log('Signature:', razorpay_signature);

  // Check for missing parameters
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    console.log("Missing parameter");
    return res.status(400).send('Missing required parameters');
  }

  // Replace this with your actual Razorpay secret key
  const secret = 'EepPiFqdB21cflFePLsZMu9I'; 

  // Create HMAC to verify signature
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');

  // Compare generated signature with the one from the request
  if (generated_signature === razorpay_signature) {
    console.log("Payment Successful");
    res.send({ message: 'Payment verified successfully!' });
    
  } 
  else if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature){
    console.log("parameter missing");
    res.send({message: 'payment failed by bank'});
  }
  else {
    console.log("Invalid payment signature");
    res.send({message:'payment failed'});
    res.status(400).send({ message: 'Payment verification failed.' });
  }
};

module.exports = {
  verifypaymentcontroller,
};