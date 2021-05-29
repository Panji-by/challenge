import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="card shadow">
        <div className="posted row">
          <div className="col-lg-1">
            <img className="profile-pict" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="col-lg-4">
            <h6><b>Gary Newton</b> posted in your timeline</h6>
          </div>
        </div>
        <div className="image-posted">
          <p>see the place</p>
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
          </div>
        <div className="comments">
        <div className="posted row">
          <div className="col-lg-1">
            <img className="profile-pict" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
          </div>
          <div className="col-lg-4">
            <h6><b>Alice</b> posted in your timeline</h6>
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
