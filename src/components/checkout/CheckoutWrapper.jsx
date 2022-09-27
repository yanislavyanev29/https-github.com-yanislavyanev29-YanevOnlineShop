import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../api/agent.js";
import LoadingComponent from "../layout/LoadingComponent.jsx";
import { useDispatch } from "react-redux";
import { setBasket } from "../../redux/basketSlice";
import CheckoutPage from "./CheckoutPage.jsx";

const  stripePromise = loadStripe("pk_test_51LjTASJH0czYTMNmNdzXt2z1i07STsZPoGdR8TkdqstenzaRPnHbfgI6DFjhfOw9np0QtvoVihPcTQjEgDjT32JS00uWep5td5");

export default function CheckoutWrapper(){

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        agent.Payments.createPaymentIntent()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [dispatch]);

    if(loading) return <LoadingComponent message="Loading checkout..."/>

    return (

        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}