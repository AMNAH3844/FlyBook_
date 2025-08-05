//we have an access token and check wheather it is expired or not
 //if it is expired we will get a refresh token to get a new access token
 //if refresh token is also expired , we will redirect to login page
import React from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
function ProtectedRoute({ children }) {
  const access = localStorage.getItem("access_token");
  const refreshT = localStorage.getItem("refresh_token");

  const getNewAccesToken = async () => {

        try {

            const res = await axios .post ( 'http://127.0.0.1:8000/api/token/refresh/', {
            refresh: refreshT
            }
        )
        // console.log(res)
            localStorage.setItem("access_token", res.data.access)

            return res.data.access;
        } catch (error) {
            console.log('Error while getting new access token:', error);
        }
    }

//   console.log(access);
  // if it is expired we will use refresh token to get a new access token
  // if refresh token is also expired we will redirect to login page
  if (access) {
    const jwtValues = jwtDecode(access);
    const nowTime = Date.now() / 1000;
    const exp = jwtValues.exp < nowTime;
        console.log(exp)
    if (exp) {
      // check whether our refresh token is expired or not

      if (refreshT) {
        // check if the token is expired or not

    const jwtValues = jwtDecode(refreshT);
    const nowTime = Date.now() / 1000;

            if (jwtValues.exp< nowTime){
                  <div>
            {alert(
              "To view this page. Please log in first."
            )}
            {(window.location.href = "/login")}
          </div>
            }
            else{
                // use refresh token to get new access token

                const new_access=getNewAccesToken()
                if (new_access) {
                    // if we get new access token then we can render the children
                    return children;
                } else {
                    return (
                      <div>
                        {alert(
                          "You are not authorized to view this page. Please log in first."
                        )}
                        {(window.location.href = "/login")}
                      </div>
                    );
                }

            }


      } else {
        return (
          <div>
            {alert(
              "You are not authorized to view this page. Please log in first."
            )}
            {(window.location.href = "/login")}
          </div>
        );
      }
    } else {
      return children;
    }
  } else {
    return (
      <div>
        {alert(
          "You are not authorized to view this page. Please log in first."
        )}
        {(window.location.href = "/login")}
      </div>
    );
  }
}

export default ProtectedRoute;
