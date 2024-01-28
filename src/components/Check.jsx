import React from "react";
import bootstraplogo from "../icons/bootstraplogo.svg"
import cover from "../icons/download (3).svg"

function Check(){
    return <div class="container">
    <main>
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src={cover} alt="" width="90" height="80"/>
        <h2 className="check">Checkout form</h2>
        <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation<br/> state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      </main>
      </div>
}

export default Check;