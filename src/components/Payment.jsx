import React from "react";

function Payment(){
    return <div class="container ct">
   
    <main>
    <hr class="my-4 my"/>
    <form class="needs-validation cy" novalidate>
    <h4 class="mb-3">Payment</h4>

    <div class="my-3">
      <div class="form-check">
        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
        <label class="form-check-label" for="credit">Credit card</label>
      </div>
      <div class="form-check">
        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
        <label class="form-check-label" for="debit">Debit card</label>
      </div>
      <div class="form-check">
        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
        <label class="form-check-label" for="paypal">PayPal</label>
      </div>
    </div>

    <div class="row gy-3 ry">
      <div class="col-md-6">
        <label for="cc-name" class="form-label">Name on card</label>
        <input type="text" class="form-control" id="cc-name" placeholder="" required/>
        <small class="text-body-secondary">Full name as displayed on card</small>
        <div class="invalid-feedback">
          Name on card is required
        </div>
      </div>

      <div class="col-md-6">
        <label for="cc-number" class="form-label">Credit card number</label>
        <input type="text" class="form-control" id="cc-number" placeholder="" required/>
        <div class="invalid-feedback">
          Credit card number is required
        </div>
      </div>

      <div class="col-md-3">
        <label for="cc-expiration" class="form-label">Expiration</label>
        <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
        <div class="invalid-feedback">
          Expiration date required
        </div>
      </div>

      <div class="col-md-3">
        <label for="cc-cvv" class="form-label">CVV</label>
        <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
        <div class="invalid-feedback">
          Security code required
        </div>
      </div>
    </div>

    <hr class="my-4 ty"/>

    <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
  </form>

</main>
</div>

}

export default Payment;