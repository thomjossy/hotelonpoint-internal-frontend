import React from "react";
import FormField from "../assets/FormField";
import CustomCheckBox from "../assets/CustomCheckBox";

export default function AddHotelsPage() {
  return (
    <section className="add-hotel-section">
      <p>Start by telling us the name of your hotel and the address</p>

      <form>
        <fieldset className="hotel-fieldset">
          <legend className="hotel-legend">Hotel Information</legend>
          <FormField type="text" label="Name of Hotel" />
          <FormField type="text" label="Adress of Hotel" />
          <FormField type="text" label="State" />
          <FormField type="text" label="Country" />
          <FormField type="text" label="Number of Rooms" />
          <FormField type="text" label="Email Address of Hotel" />
          <FormField type="text" label="Adress of Hotel" />
          <FormField type="phone" label="Phone Number 1" />
          <FormField type="phone" label="Phone Number 2" />
        </fieldset>
        <fieldset className="hotel-fieldset">
          <legend className="hotel-legend">Extra Information</legend>
          <p>
            Please, tick the checkbox if your hotel has the following resources
          </p>

          <CustomCheckBox label="Swimng Pool" />
          <CustomCheckBox label="Wifi" />
          <CustomCheckBox label="Breakfast" />
          <CustomCheckBox label="Pets" />
          <CustomCheckBox label="Restaurant" />
          <CustomCheckBox label="Bar" />
          <CustomCheckBox label="fitness center" />
          <CustomCheckBox label="garden" />
          <CustomCheckBox label="room service" />
          <CustomCheckBox label="airpot shuttle" />
          <CustomCheckBox label="24-hour front desk" />
        </fieldset>
      </form>
    </section>
  );
}
