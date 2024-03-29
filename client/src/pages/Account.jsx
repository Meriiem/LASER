import React from "react";

function Account() {
  return (
    <div className="account">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Account</h1>
            <p>This is your account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
