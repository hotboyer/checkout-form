import React from "react";
import Check from "./Check";
import Cart from "./Cart";
import Billing from "./Billing";
import Payment from "./Payment";
import Footer from "./Footer";

function App(){
    return <div>
        <Check />

        <Billing />
        <Cart />
        <Payment />
        <Footer />
    </div>
}

export default App;