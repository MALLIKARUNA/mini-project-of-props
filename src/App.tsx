import { Bookmark } from "lucide-react";
import "./App.css";


function App() {
  return (
    <div className="parent">
      <h1>hello this is the mini project of the props</h1>

      {/* ✅ ADD HERE */}
      {/* <user/> */}

      <div className="king">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>services</li>
          <li>portfolio</li>
          <li>login</li>
          <li>logout</li>
        </ul>
      </div>

      <div className="card">
        <div className="top">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
          />

          <button className="save-btn">
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h3>
            Google <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
        </div>

        <div className="details">
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>

        <div className="bottom">
          <h3>$120/hr</h3>
          <p>Bangalore, India</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;