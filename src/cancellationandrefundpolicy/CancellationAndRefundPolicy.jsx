import React from "react";
import { Link } from "react-router-dom";
const CancellationAndRefundPolicy = () =>{
    return(
        <section>
         <div className="parent">
         <div className="fill1">
           <img className="image1" style={{width:"2954px"}} src="refund.svg"/>
           </div>
           <Link to="/home"><img className="image2" src="logo.svg"/></Link>
           <div className="famto">Cancellation And Refund Policy</div>
         </div>
         <section style={{width:"2800px", marginLeft:"75px"}}>
            <h3 style={{textAlign:"left"}}>Cancellation Policy</h3>
            <p style={{textAlign:"left", fontFamily:"Poppins"}}>
            <ul>
                <li>
                If you want to cancel the order please notify us within 5 Minutes of placing the order via chat head. 
                </li>
                <li>
                If the cancellation was made within 5 minutes and once Famto has accepted your cancellation, we will refund or re-credit your debit or credit card with the full amount, which includes the initial delivery charge (where applicable) which you paid for the delivery of the Goods or the Services, as applicable. 
                </li>
                <li>
                Famto or Merchant may cancel an order if the product is not available for any reason. If it is online payment the same amount will be refund to your mode of payment. If you didn’t get a refund after repeated requests, email: <strong><a href="mailto:contact@famto.in">contact@famto.in</a></strong>
                </li>
                <li>
                As a general rule customer shall not be entitled to cancel Order once placed. Customer may choose to cancel Order only within five-minute of the Order being placed. However, subject to customer previous cancellation history, Famto reserves the right to deny any refund to Customer pursuant to a cancellation initiated by Customer even if the same is within five-minute followed by suspension of account, as may be necessary in the sole discretion of Famto. 
                </li>
                <li>
                If Customer cancels his/her Order after five minute of placing it, Famto shall have a right to collect a penalty of 100% of the Order amount for breach of contract terms as a compensation for the damages suffered by Famto, with a right to either not to refund the Order value in case Customer Order is prepaid or recover from the Customer subsequent Order in case his/her Order is postpaid, to compensate the Merchants.
                </li>
            </ul>
            </p>
            <h3 style={{textAlign:"left"}}>Refund Policy</h3>
            <p style={{textAlign:"left", fontFamily:"Poppins"}}>
            You shall be entitled to a refund only if you pre-pay for your order at the time of placing your order on the Famto Platform and only in the event of any of the following circumstances:  
            </p>
            <p style={{textAlign:"left", fontFamily:"Poppins"}}>
            <ul>
                <li>
                Your order packaging has been tampered or damaged at the time of delivery.
                </li>
                <li>
                Canceling your order due to your delivery location following outside our designated delivery zones; Failure to contact you by phone or email at the time of confirming the order booking; or You canceling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.
                </li>
                <li>
                Our decision on refunds shall be at our sole discretion and shall be final and binding.
                </li>
            </ul>
            </p>
            <p style={{textAlign:"left", fontFamily:"Poppins"}}>
            All refund amounts shall be credited to your account within 5-7 business days depending upon the mode of payment partner in accordance with the terms that may be stipulated by the bank which has issued the credit / debit card.
            </p>
            <div>
            <table className="table" border="1" cellSpacing={"1"} style={{fontFamily:"Poppins"}}>
            <tr>
               
            
                <th> <span style={{fontFamily:"sans-serif"}}>Mode of Payment</span></th>
                <th>  <span style={{fontFamily:"sans-serif"}}>Time Taken</span></th>
              </tr>
              <tr>
                <td>Net Banking</td>
                <td>5-7 Business Days</td>
              </tr>
              <tr>
                <td>Debit/Credit Cards</td>
                <td>5-7 Business Days</td>
              </tr>
              <tr>
                <td>UPI</td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>Amazone Pay (Wallet)</td>
                <td>5-7 Business Days</td>
              </tr> <tr>
                <td>Amazone Pay (CC/DC/NB)</td>
                <td>5-7 Business Days</td>
              </tr>
              <tr>
                <td>Phone Pe (Wallet)</td>
                <td>5-7 Business Days</td>
              </tr>
              <tr>
                <td>Phone Pe(CC/DC/NB)</td>
                <td>5-7 Business Days</td>
              </tr>
              <tr>
                <td>Wallet-Paytm/Mobikwik/Freecharge</td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>Lazy Pay</td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>Sodexo</td>
                <td>5-7 Business Days</td>
              </tr>
            </table>
            </div>
            <h3 style={{textAlign:"left"}}>Customer Service</h3>
            <p style={{textAlign:"left", fontFamily:"Poppins"}}>
            If you have any queries on Cancellation and Refund policy please contact us directly: Phone No: +91 97781 80794   or email: <strong><a href="mailto:contact@famto.in">contact@famto.in</a></strong>
            </p>
         </section>
        </section>
    );

};
export default CancellationAndRefundPolicy;