import { connect, Field } from "formik";
import React, { Component } from "react";


class HotelFormSix extends Component {
  render() {
    const {confirmRecipientAddress} = this.props.formik.values
 
    return (
      <section>
        <div className="files">
          <h3>Terms and Condition</h3>
          <br />
         
        </div>
        <div className="contract-section container">
          
            
            <h3>Commission Payments</h3>
            <p>At the beginning of each month, we will send you an invoice for all complete bookings in the previous month.</p>
            <br/>
            <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label htmlFor="contractName">What name should appear in the invoice (e.g. legal/company name)?
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="contractName"
                      name="contractName"
                    />
                  </div>
                </div>                 
                
            
        
          <div className="col-md-4">
            <p><strong>Commission Percentage</strong></p>
            <h3>10%</h3>
          </div>
        
          </div>
          
            <p>Does this recipient have the same address as your property?</p>

                  <div class="form-group">
                  <label htmlFor="recipientAddressone">
                    <Field
                      type="radio"
                      value='yes'
                     
                      id="recipientAddressone"
                      name="confirmRecipientAddress"
                    /> Yes</label>
                  </div>
                  <div class="form-group">
                  <label htmlFor="recipientAddresstwo">
                    <Field
                      type="radio"
                      value='no'
                      
                      id="recipientAddresstwo"
                      name="confirmRecipientAddress"
                    />No </label>
                  </div>

 {confirmRecipientAddress === 'no' ? (
    <div>
      
    <div class="form-group">
    <label htmlFor="recipientCountry">Country where the invoice recipient is located</label>
    <Field
      type="text"
      className="form-control"
      id="recipientCountry"
      name="recipientCountry"
    />
  </div>
  <div class="form-group">
    <label htmlFor="recipientState">State where the invoice recipient is located</label>
    <Field
      type="text"
      className="form-control"
      id="recipientState"
      name="recipientState"
    />
  </div>
  <div class="form-group">
    <label htmlFor="recipientCity">City</label>
    <Field
      type="text"
      className="form-control"
      id="recipientCity"
      name="recipientCity"
    />
  </div>
  <div class="form-group">
    <label htmlFor="recipientZipCode">Zip Code</label>
    <Field
      type="text"
      className="form-control"
      id="recipientZipCode"
      name="recipientZipCode"
    />
  </div>
 
  </div>
  ) : null

  }
        
 

  <p><strong>To complete your registration, check the boxes below:</strong></p>
  <br/>
  <div class="form-check mb-3">
  <Field
      type="checkbox"
      className="form-check-input"
      name="confirmAgreement"
    /> <label className="form-check-label"> I certify that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. HotelOnPoints reserves the right to verify and investigate any details  provided in this registration. </label>
    </div> 
    <div class="form-check">
  <Field
      type="checkbox"
      className="form-check-input"
      name="confirmAgreement"
    /> <label className="form-check-label"> I have read, accepted, and agreed to the General Delivery Terms and Privacy Statement. HotelOnPoints enables accommodation and guests to communicate through hotelonpoints.com, which receives and processes communications in accordance with the hotelonpoints Privacy statement and General Delivery. </label>
    </div>

        </div>
      </section>
    );
  }
}

export default connect(HotelFormSix);
