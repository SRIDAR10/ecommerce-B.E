const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./connectToDb");
const userRouter = require("./server/Routes/user-auth")
const productRouter = require("./server/Routes/Products")
const adminRouter= require("./server/Routes/admin")
require('dotenv').config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const YOUR_DOMAIN = 'http://localhost:5173';

//Connect to database
connectToDb();

//Body parser middleware
app.use(express.json());

app.use("/", userRouter);
app.use("/product",productRouter);
app.use("/product-settings",adminRouter);
app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

app.post("/create-checkout-session", async (req, res) => {
    try {
      const productList = req.body;
      const lineItems = [];
      console.log(productList);
  
      for (const productData of productList) {
        const product = await stripe.products.create({
          name: productData.product_name,
          description: productData.description,
        });
  
        // Create a price for the product
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: Math.round(productData.price * 100),
          currency: 'inr',
        });

        lineItems.push({
          price: price.id,
          quantity: productData.quantity ?? 1
        });
      }
  
      if (lineItems.length > 0) {
        const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: "payment",
          success_url: `${YOUR_DOMAIN}?success=true`,
          cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        res.status(200).json({ redirectUrl: session.url });
      }
    } catch (error) {
      console.error('Error processing checkout session:', error);
      res.status(500).send('Error processing checkout session');
    }
  });
