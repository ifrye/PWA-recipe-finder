import React from "react";
import { IonButton } from "@ionic/react";
import jsCookie from "js-cookie";

const Logout: React.FC = () => {

    function logout(){
        jsCookie.set("loggedin", "false");
        jsCookie.remove("userEmail");
    }

    return (
      <IonButton slot="end" onClick={ () => logout()} routerLink="/login">
          Logout
      </IonButton>
    );
  };
  
  export default Logout;