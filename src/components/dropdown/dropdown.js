import React from 'react'
import {Link} from 'react-router-dom'
import "./dropdown.css"

function ProfileData (props){
    return(
        <div className="dropprofile dropdown" style={{marginTop:"-10px"}}>
        <span
        className="nav-link"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
        <img
        src={props.imageurl}
        alt="..."
        style={{
          width: 40,
          height: 40,
          marginLeft: 10,
          marginRight: 10
        }}
        className="rounded-circle"
        />{" "}
        <span style={{ color: "white", marginRight: 10 }}>
        {props.fullname}
        </span>
        </span> 
        <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        <a href="https://internal.hotelonpoints.com/" className="dropdown-item">My Dashboard</a>
        <Link className="dropdown-item">Bookings</Link>
        <Link className="dropdown-item">My property</Link>
        <Link className="dropdown-item">Reviews</Link>
      </div>

</div>
    )
}

export default ProfileData



