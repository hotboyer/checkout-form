import React from "react";

function Cart(){
    return  <div class="container">
    <main>
    <div class="row g-5 cart">
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary cart">Your cart</span>
        <span class="badge bg-primary rounded-pill">4</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">iphone 11 pro max</h6>
            <small class="text-body-secondary">Red</small>
          </div>
          <span class="text-body-secondary">$378</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">iphone 11</h6>
            <small class="text-body-secondary">green</small>
          </div>
          <span class="text-body-secondary">$412</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">iphone 14 pro max</h6>
            <small class="text-body-secondary">silver</small>
          </div>
          <span class="text-body-secondary">$999</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">iphone 12 pro max</h6>
            <small class="text-body-secondary">grey</small>
          </div>
          <span class="text-body-secondary">$754</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EX12YTU</small>
          </div>
          <span class="text-success">−$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$2,538</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code"/>
          <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
    </div>
</main>
</div>
}

export default Cart;
