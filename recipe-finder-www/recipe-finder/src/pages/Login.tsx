import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonInput, IonFabButton } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Login.css';
import { star, logoFacebook } from 'ionicons/icons';
import { userLogin, facebookLogin } from '../hooks/useFirebase';
import  { Redirect } from 'react-router-dom';
import jsCookie from "js-cookie";

const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoggedIn, setLogIn] = useState<boolean>();

  async function login(){
    const res = await userLogin(email, password)
    console.log(`${res ? "Login Success": "Login Failed"}`);
    if (res) {
      setLogIn(true);
      jsCookie.set("loggedin", "true");
      {console.log("loggedin cookie: " + jsCookie.get("loggedin"))}
      jsCookie.set("userEmail", res.user?.email!)
      console.log("userEmail cookie: " + jsCookie.get("userEmail"))

    }if (!res){
      setLogIn(false);
      jsCookie.set("loggedin", "false");
      console.log("loggedin cookie: " + jsCookie.get("loggedin"));
    }
  }

  async function fbLogin(){
    const res = await facebookLogin();
    if (res){
      setLogIn(true);
      jsCookie.set("loggedin", "true");
      {console.log("loggedin cookie: " + jsCookie.get("loggedin"))}
    }
    if (!res){
      setLogIn(false);
      jsCookie.set("loggedin", "false");
      console.log("loggedin cookie: " + jsCookie.get("loggedin"));
    }
  }

  /*function gotToLogin(){
    jsCookie.set("loggedin", "false");
    console.log("Log in Cookie in gotToLogin: " + jsCookie.get("loggedin"));
  }*/

  return (
    <IonPage>
      {/*gotToLogin*/}
      <IonContent className="ion-padding login">
        <div className="container">
            <IonTitle className="sanserif textFont"><h1>RECIPE FINDER</h1></IonTitle>

            <IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
            <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            {isLoggedIn ? <Redirect to='/home'  /> : <Redirect to='/login'  />}
            {console.log("isLoggedIn: " + isLoggedIn)}
            <IonButton color="medium" expand="block" onClick={() => login()}>
                Sign in
            </IonButton>
            <IonButton expand="block" onClick={() => fbLogin()}>
                <IonIcon slot="start" icon={logoFacebook}></IonIcon>
                Sign in with Facebook
            </IonButton>
            {isLoggedIn === false ? <div>Invalid Username or Password</div> : null }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
