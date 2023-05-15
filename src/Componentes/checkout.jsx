import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Estilos/button.css";
let stripePromise;

const getStripe = () => {
   if (!stripePromise) {
      stripePromise = loadStripe(
         "pk_test_51N4nsXHknI8T06BL7VDeCenhDYmlLoMsDRAXJAapVUs0JvyWgpjSobN7Bf4B3XC2SLEQoNfY4Ez4IuhSMOKkc0Jm00foEMRyIS"
      );
   }

   return stripePromise;
};

const Checkout = (props) => {
const {valorTipo}=props

   const [stripeError, setStripeError] = useState(null);
   const [isLoading, setLoading] = useState(false);
   const item = {
      price: 
      valorTipo==="Básico"?"price_1N4oZqHknI8T06BLGHi5PV7p":(valorTipo==="Estandar"?"price_1N4oWdHknI8T06BLpAMbl0Ia":"price_1N4oTSHknI8T06BLKzE3Rw0T"),
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
            className="sec-btn "
            onClick={redirectToCheckout}
            disabled={isLoading}
         >
            {valorTipo}
            {/* <div className="grey-circle">
               <div className="purple-circle">
                  <img className="icon" src={CardIcon} alt="credit-card-icon" />
               </div>
            </div>
            <div className="text-container">
               <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
            </div> */}
         </button>
      </div>
   );
};

export default Checkout;
