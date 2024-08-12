// src/components/SignInButton.js
import React from 'react';
import firebaseApp from './firebase';
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const SignInButton = () => {
    const auth = getAuth(firebaseApp);
    const provider = new TwitterAuthProvider();
    const handleSignIn = async () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                // const credential = TwitterAuthProvider.credentialFromResult(result);
                // console.log('hello credential', credential)
                console.log('hello result', result)

                const token = result.user.accessToken;
                // console.log('hello token', token)
                // const secret = credential.secret;
                // fetch user data
                const request = await fetch(`http://localhost:3009/test`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    // body: JSON.stringify({ token }),
                })
                const response = await request.json()
                console.log('hello response', response)

                // The signed-in user info.
                const user = result.user;
                console.log('hello user', user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log('hello error', error)
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = TwitterAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <button onClick={handleSignIn}>
            Sign In with Twitter
        </button>
    );
};

export default SignInButton;
