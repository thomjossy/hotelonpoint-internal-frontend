import React from "react";
import FormField from "../assets/FormField";
import CustomTextArea from "../assets/CustomTextArea";
import CustomButton from "../assets/CustomButton";

export default function AddRoomPage() {
  return (
    <section className="addroom-section">
      <div className="addroom-wrapper">
        <p>
          Hello Add Rooms from your hotel and details about the rooms, so
          customers can see more of the rooms and services your hotel offers{" "}
        </p>
        <form className="addroom-form">
          <FormField type="text" label="Name of Room" />
          <FormField type="text" label="Price per Night" />
          {/* <CustomTextArea /> */}
          <FormField type="file" label="Add Picture of the Room" />
          <FormField type="file" label="Add Picture of the Room" />
          <FormField type="file" label="Add Picture of the Room" />

          <CustomButton value="Submit" />
        </form>
      </div>
    </section>
  );
}
