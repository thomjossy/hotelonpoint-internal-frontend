import React from "react";
import AdminNavbar from "../adminNavbar/AdminNavbar";
import AwaitingHotels from "../AwaitingHotels/AwaitingHotels";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <br />
      <AwaitingHotels />
    </div>
  );
}
