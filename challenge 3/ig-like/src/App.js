import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="posted row">
          <div className="col-lg-2">
            <img className="profile-pict" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="col-lg-4">
            <h6><b>Gary Newton</b> posted in your timeline</h6>
          </div>
        </div>
        <div className="image-posted">
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
          </div>
        <div className="comments">
        </div>
      </div>
    </>
  );
}

export default App;
