import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

app.get("/cart.html", (req, res) => {
    res.sendFile("cart.html", { root: "public" });
});

app.get("/faq.html", (req, res) => {
    res.sendFile("faq.html", { root: "public" });
});

app.get("/success.html", (req, res) => {
    res.sendFile("success.html", { root: "public" });
});

app.get("/cancel.html", (req, res) => {
    res.sendFile("cancel.html", { root: "public" });
});

app.get("/thanks.html", (req, res) => {
    res.sendFile("thanks.html", { root: "public" });
});

app.get("/products.html", (req, res) => {
    res.sendFile("products.html", { root: "public" });
});

app.get("/delivery.html", (req, res) => {
  res.sendFile("delivery.html", { root: "public" });
});




let stripeGateway = stripe(process.env.stripe_key);
app.post("/stripe-checkout", async (req, res) => {
    const lineItems = req.body.items.map((item) => {
        const unitAmount = parseInt(parseFloat(item.price) * 100)
        console.log("item-price:", item.price);
        console.log("unitAmount:", unitAmount);
        return{
            price_data: {
                currency: "gbp",
                product_data: {
                    name: item.title,
                    images: [item.image]
                },
                unit_amount: unitAmount,
            },
            quantity: item.quantity,
        }
    })
    const session = await stripeGateway.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['GB'],
          },
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'gbp',
                },
                display_name: 'Same Day In-Store Collection',
                delivery_estimate: {
                  minimum: {
                    unit: 'hour',
                    value: 1,
                  },
                  maximum: {
                    unit: 'hour',
                    value: 6,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'gbp',
                },
                display_name: 'In-Store Collection',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 3,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 5,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'gbp',
                },
                display_name: 'Standard Shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 5,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 10,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 500,
                  currency: 'gbp',
                },
                display_name: 'Premium Shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 1,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 3,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 750,
                  currency: 'gbp',
                },
                display_name: 'Next Day Delivery',
              },
            },
          ],
          phone_number_collection: {
            enabled: true
          },
        mode: "payment",
        success_url: `https://ecommerce-store-hleq.onrender.com/success.html`,
        cancel_url: `https://ecommerce-store-hleq.onrender.com/cancel.html`,
        billing_address_collection: "required",
        line_items: lineItems, 
    })
    res.json({ url: session.url })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
