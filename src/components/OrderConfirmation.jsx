
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";

const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  console.log("latestOrder", latestOrder);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ color: 'green' }}>Your order has been confirmed.</h1>
        <h3 className="text-center">It will be delivered soon.</h3>
      </div>

      <div className="container">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                Ordered Items
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                Order Details & Shipping Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                {/* <TableProduct cart={cart} /> */}
                <ShowOrderProduct items={latestOrder?.orderItems} />
              </td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>Order Id : {latestOrder?.orderId}</li>
                  <li>Payment Id : {latestOrder?.paymentId}</li>
                  <li>Payment Status : {latestOrder?.payStatus}</li>
                  <li>Name : {latestOrder?.userShipping?.fullName}</li>
                  <li>Phone : {latestOrder?.userShipping?.phoneNumber}</li>
                  <li>Country : {latestOrder?.userShipping?.country}</li>
                  <li>State : {latestOrder?.userShipping?.state}</li>
                  <li>PinCode : {latestOrder?.userShipping?.pincode}</li>
                  <li>Deliver to : {latestOrder?.userShipping?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="container text-center my-5">
        <button
          className="btn btn-secondary btn-lg"
          style={{ fontWeight: "bold" }}
        >
          Procced To Pay
        </button>
      </div> */}
    </>
  );
};

export default OrderConfirmation;
