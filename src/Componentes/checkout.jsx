import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../assets/credit-card.svg";

import "../Estilos/button.css";
import Succes from "./succes";
import Cancel from "./cancel";
let stripePromise;

const getStripe = () => {
   if (!stripePromise) {
      stripePromise = loadStripe(
         "pk_test_51N4nsXHknI8T06BL7VDeCenhDYmlLoMsDRAXJAapVUs0JvyWgpjSobN7Bf4B3XC2SLEQoNfY4Ez4IuhSMOKkc0Jm00foEMRyIS"
      );
   }

   return stripePromise;
};

const Checkout = () => {
   const [stripeError, setStripeError] = useState(null);
   const [isLoading, setLoading] = useState(false);
   const item = {
      price: "price_1N4oZqHknI8T06BLGHi5PV7p",
      quantity: 1,
   };

   const checkoutOptions = {
      lineItems: [item],
      mode: "subscription",
      successUrl: `http://localhost:5173/Succes`,
      cancelUrl: `http://localhost:5173/Cancel`,
   };

   const redirectToCheckout = async () => {
      setLoading(true);
      console.log("redirectToCheckout");

      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      console.log("Stripe checkout error", error);

      if (error) setStripeError(error.message);
      setLoading(false);
   };

   if (stripeError) alert(stripeError);

   return (
      <div className="checkout">
         <button
            className="checkout-button"
            onClick={redirectToCheckout}
            disabled={isLoading}
         >
            <div className="grey-circle">
               <div className="purple-circle">
                  <img className="icon" src={CardIcon} alt="credit-card-icon" />
               </div>
            </div>
            <div className="text-container">
               <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
            </div>
         </button>
      </div>
   );
};

export default Checkout;
