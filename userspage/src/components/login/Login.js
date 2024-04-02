import React, { useState } from "react";
import sepnotyLogo from "../assets/sepnotyLogo.svg";
import "./login.css";
// import image from '../assets/image.png'

export default function Login() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [whatsAppTnc, setWhatsApptnc] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const formHandler = (type, e) => {
    // e.preventDefault();
    switch (type) {
      case "username":
        setUsername(e.target.value.trim());
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value.trim());
        break;
      case "highestQualification":
        e.target.value === "select"
          ? alert("select highest Qualification")
          : setHighestQualification(e.target.value);
        break;
      case "course":
        e.target.value === "select"
          ? alert("select Course")
          : setSelectCourse(e.target.value);
        break;
      case "whatsAppUpdates":
        setWhatsApptnc(!whatsAppTnc);
        break;
      case "tnc":
        setPrivacyPolicy(!privacyPolicy);
        break;
      default:
        throw new Error("Invalid selection");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // setSuccess(false);
    if (phoneNumber.split("").length !== 10) {
      return alert(
        "Number should be of 10 digits. Please enter correct number"
      );
    }
    if (!username || username.split("").length < 3) {
      return alert("Enter correct username");
    }

    if (!highestQualification) {
      return alert("Select the highest Qualification");
    }
    if (!selectCourse) {
      return alert("Select the course");
    }
    setSuccess(true);
    const terms= {
        whatsAppTnc: whatsAppTnc,
        privacyPolicy: privacyPolicy,
      }
    const formData = new FormData()
    formData.set("username",username)
    formData.set("phoneNumber",phoneNumber)
    formData.set("highestQualification",highestQualification)
    formData.set("selectCourse",selectCourse)
    formData.set("terms",JSON.stringify(terms))

    console.log(formData)
    const response = await fetch("http://localhost:8800/queryForm/queryform", {
      method: "POST",
      body: formData,
      headers: {
        "Access-Control-Allow-Headers": "*",
      },
    });
    console.log(response);
  };

  return (
    <div>
      <div className={sucess ? "display" : null}>
        {sucess && (
          <div>
            <span onClick={() => setSuccess(false)}>X</span>
            <dotlottie-player
              src="https://lottie.host/21e885f6-421e-4637-b5e3-2e26c1206917/VgW0pWZ7aw.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              autoplay
            ></dotlottie-player>
            <p>Data Sent</p>
          </div>
        )}
      </div>
      <div className="loginComponent">
        <div className="login">
          <div>
            <img src={sepnotyLogo} alt="Sepnoty Logo" />
          </div>
          <div className="loginFields">
            <h1>Talk to Our Career Expert</h1>
            <form onSubmit={submitHandler}>
              <label htmlFor="username">
                Name
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => formHandler("username", e)}
                />
              </label>
              <label htmlFor="phoneNumber">
                Mobile Number
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  maxLength={10}
                  minLength={10}
                  value={phoneNumber}
                  onChange={(e) => formHandler("phoneNumber", e)}
                />
              </label>
              <label htmlFor="highestQualification">
                Highest Qualification
                <select
                  name="highestQualification"
                  id="highestQualification"
                  value={highestQualification}
                  onChange={(e) => formHandler("highestQualification", e)}
                >
                  <option value="select">--Select--</option>
                  <option value="graduationCompleted">
                    Graduation (Completed)
                  </option>
                  <option value="graduation ongoing">
                    Graduation (ongoing)
                  </option>
                  <option value="postGraduationCompleted">
                    Post Graduation (completed)
                  </option>
                  <option value="postGraduationOngoing">
                    Post Graduation (ongoing)
                  </option>
                  <option value="12th/intermediate">12th / Intermediate</option>
                  <option value="diploma">Diploma</option>
                </select>
              </label>
              <label htmlFor="course">
                Select your Courses
                <select
                  name="course"
                  id="course"
                  value={selectCourse}
                  onChange={(e) => formHandler("course", e)}
                >
                  <option value="select">--Select--</option>
                  <option value="software and tech">Software and Tech</option>
                  <option value="AI&ML">AI & ML</option>
                  <option value="dataScience">Data Science</option>
                </select>
              </label>
              <label htmlFor="whatsAppUpdates">
                <input
                  type="checkbox"
                  name="whatsAppUpdates"
                  id="whatsAppUpdates"
                  value={whatsAppTnc}
                  onChange={(e) => formHandler("whatsAppUpdates", e)}
                />
                I want to receive updates directly on WhatsApp
              </label>
              <label htmlFor="tnc">
                <input
                  type="checkbox"
                  name="tnc"
                  id="tnc"
                  value={privacyPolicy}
                  onChange={(e) => formHandler("tnc", e)}
                />
                I hereby agree to the Terms & Conditions and Privacy Policy of
                Sepnoty
              </label>
              <button
                className={whatsAppTnc && privacyPolicy ? null : "disable"}
                disabled={!whatsAppTnc && !privacyPolicy ? true : false}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="loginAssests">
          <div>
            <dotlottie-player
              src="https://lottie.host/4401bdaf-80e2-404d-af78-f53ce54fed55/uY7mA1wR8n.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
