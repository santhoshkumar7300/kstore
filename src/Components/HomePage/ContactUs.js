import Styles from "./ContactUs.module.css";
import location from "../../Assets/location.png";
import whatsapp from "../../Assets/whatsapp.png";
import mail from "../../Assets/mail.png";
import call from "../../Assets/call.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState } from "react";

export default function ContactUs() {
  const [addressDetails, setAddressDetails] = useState([
    {
      img: location,
      description:
        "No. 9, Lakshmi Gardens, Thudiyalur road, Near Sankara College, Saravanampatti, Coimbatore - 641035",
    },
    {
      img: call,
      description: "Dealer-Care : +91 - 80565 69696",
    },
    {
      img: whatsapp,
      description: "Whatsapp : +91 - 80565 69696",
    },
    {
      img: mail,
      description: "For Sales Enquiry : sales@kansaswallet.in",
    },
    {
      img: mail,
      description: "Any Other Enquiry : support@kansaswallet.in",
    },
  ]);

  const mapStyles = {
    height: "70vh",
    width: "100%",
    filter: "grayscale(1)",
    marginTop: "25px",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-white">
          Contact <span className="orange">Us</span>
        </h1>
      </div>

      <div className="container d-flex mt-5">
        <div className="w-50">
          <ul>
            <li>
              {addressDetails.map((e) => (
                <div className="d-flex p-3">
                  <img className={Styles.img} src={e.img} alt="location" />
                  <p className={Styles.description + " text-white mb-0"}>
                    {e.description}
                  </p>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div className="w-50">
          <LoadScript>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
          </LoadScript>
        </div>
      </div>

      <div className="mt-5 pb-5">
        <p className="mb-0 text-white text-center">
          © Copyrights 2021 KSTORe. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
}
