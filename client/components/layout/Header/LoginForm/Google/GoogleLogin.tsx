import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleLog = () => {
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse.credential);
                    if (credentialResponse.credential) {
                        const decoded = jwt_decode(
                            credentialResponse.credential
                        );
                        console.log(decoded);
                    }
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
                useOneTap
            />
        </div>
    );
};

export default GoogleLog;
