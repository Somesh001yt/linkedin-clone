import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";
import { logout, login, selectUser } from "./features/userSlice";
import Login from "./components/Auth/Login";
import { useEffect } from "react";
import { auth } from "./components/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        // user login
      } else {
        // user logout
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          {" "}
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
      ;
    </div>
  );
}

export default App;
