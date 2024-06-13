import React from "react";
import { Link } from "react-router-dom";
const FAQ = () =>{
    return(
        <section>
            
                <div className="parent">
                <div className="fill2">
                <img className="image1" style={{width:"2945px", height:"95%"}} src="faq.svg" />
                </div>
                <Link to="/home"><img className="image2" src="logo.svg"/></Link>
                <div className="famto" style={{top:"85%"}}>FAQ</div><br/>
                </div>
                <br/><br/>
                <section style={{width:"2800px", marginLeft:"75px"}}>
                <h3 style={{textAlign:"left"}}>What is custom order?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Order anything from any nearby Store. the Delivery boy will shop for you and deliver to your door steps. Eg : You may want to order Water Bottle, Cold Drink, snacks for a quick party you may have arranged. You can select a Store from your nearby area on the App and put all order detail. The service provider will receive order and will go to your selected store and handpick all items. He will confirm price and detail with you and then purchase the items and deliver to your home instantly. You will be able to see his location in real time on map while he is bringing items to your home.
                </p>
                <h3 style={{textAlign:"left"}}>What is pick and drop?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Hire a delivery boy that will do your errand jobs of Pickup & Drop in your nearby area. Eg: You ordered a cake from a nearby bakery and want someone to pick it up for you as you are busy in arrangements of party. The delivery boy will do the task for you. He will go to the Bakery as per the instructions you listed in App and pickup the cake that you already paid for earlier. And deliver at your home. You as a user will be able to see the location of the delivery Boy on map in real time so you know where he is all the time while working on your tasks.
                </p>
                <h3 style={{textAlign:"left"}}>What is multiple pick and drop?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Multiple pick and drop is a service that allows you to schedule several pickups and deliveries at different locations. This means you can have items picked up from single location and delivered to various destinations according to your needs. It's a flexible and convenient option for managing complex logistics or coordinating deliveries to multiple addresses.
                </p>
                <h3 style={{textAlign:"left"}}>Can I schedule a order for future date or dates?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Yes, you can schedule your order for a future date or multiple dates during the checkout process. Simply select your preferred delivery dates, and we'll ensure your order is delivered accordingly
                </p>
                <h3 style={{textAlign:"left"}}>How can we connect Famto Customer Care?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                You can email us your issue on contact@famto.in. A customer care executive will be assigned to you shortly.
                </p>
                <h3 style={{textAlign:"left"}}>How can I provide my feedback?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                You can email to us on contact@famto.in or share feedback on google play store.
                </p>
                <h3 style={{textAlign:"left"}}>Can I edit my order?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Your order can be edited before it reaches the merchant. You could contact the customer support team via a call to do so. Once an order is placed and the merchant accepts the order, you don’t have option to edit the order.
                </p>
                <h3 style={{textAlign:"left"}}>I want to cancel my order?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                You can track your order once the third party accepts it, and you can also cancel it on the order tracking page.
                </p>
                <h3 style={{textAlign:"left"}}>Is there a minimum order value?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                For some merchant in the app there will be minimum order quantity which would be mentioned.
                </p>
                <h3 style={{textAlign:"left"}}>How long does Famto takes to deliver an order?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Normally the order will be delivered within 60 minutes of placing the order. Adverse weather/long distance/traffic may cause slight variations.
                </p><h3 style={{textAlign:"left"}}>What are Famto delivery hours?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                On all days we are working from 8 AM to 9 PM.
                </p>
                <h3 style={{textAlign:"left"}}>Can I order from any location?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Merchants within 10 km from the delivery location will be shown in the app. For custom orders there is no km limit, provided return charges will be applicable for the particular order.
                </p>
                <h3 style={{textAlign:"left"}}>Is single order from different merchant possible?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                No, it is not possible. You need to go for three different orders. We are working on this criteria and will be coming up with this soon.
                </p>
                <h3 style={{textAlign:"left"}}>Do you support bulk orders?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Yes, we provide bulk orders for on-time delivery , If ordered at least 24 hours in advance.
                </p>
                <h3 style={{textAlign:"left"}}>Can I change address/number?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Before proceeding with the order please check your delivery address and phone number.
                </p>
                <h3 style={{textAlign:"left"}}>Unable to view the details in my profile</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                If you have any app related issue,please update the app or uninstall and reinstall the app. If the issue still persists contact us at <strong><a href="mailto:contact@famto.in">contact@famto.in</a></strong>.
                </p>
                <h3 style={{textAlign:"left"}}>Can I Pay online Payment when my order is delivered to me? </h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Yes you can. On receiving the order you can pay through the G-pay/Phone pay number provided by the delivery agent.
                </p>
                <h3 style={{textAlign:"left"}}>Any other Query?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                If you have any other queries, Please contact through <strong><a href="mailto:contact@famto.in">contact@famto.in</a></strong> or +91 97781 80794.
                </p>
                <h3 style={{textAlign:"left"}}>I forgot my password</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                If you have created an account and forgot the password, then click on the login/sign up icon at the top of the page-click on forgot password-recovery password will be send to your registered mobile number/registered mail id.
                </p>
                <h3 style={{textAlign:"left"}}>I want an invoice for my order?</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Invoice copy of the order will be send to your register Mail ID.
                </p>
                <h3 style={{textAlign:"left"}}>I didn't receive any order confirmation</h3>
                <p style={{textAlign:"left", fontFamily:"Poppins"}}>
                Please check for the message in your registered mobile number/ Mail ID,if not there, then please share the details to <strong><a href="mailto:contact@famto.in">contact@famto.in</a></strong>.
                </p>
            </section>
        </section>
    );
};
export default FAQ;