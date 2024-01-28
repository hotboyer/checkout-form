import React from "react";

function Billing() {
    return <div class="container">
    <main>
    <div className="row g-5 bill">
    <div class="col-md-7 col-lg-8">
        <h4 class="mb-3 mb">Billing address</h4>
        <form class="needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                </div>

                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                </div>

                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="username" placeholder="Username" required/>
                            <div class="invalid-feedback">
                                Your username is required.
                            </div>
                    </div>
                </div>

                <div class="col-12">
                    <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                </div>

                <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                </div>

                <div class="col-12">
                    <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>

                <div class="col-md-5">
                    <label for="country" class="form-label">Country</label>
                    <select class="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>Nigeria</option>
                        <option>Germany</option>
                        <option>Italy</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="state" class="form-label">State</label>
                    <select class="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>

                <div class="col-md-3">
                    <label for="zip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required/>
                        <div class="invalid-feedback">
                            Zip code required.
                        </div>
                </div>
            </div>

            <hr class="my-4"/>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="same-address"/>
                        <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="save-info"/>
                        <label class="form-check-label" for="save-info">Save this information for next time</label>
                </div>
                </form>
                </div>
                
        
    </div>
</main>
</div>
}


   export default Billing;