import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonInput, IonFabButton } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Home.css';
import { star, logoFacebook } from 'ionicons/icons';
import { userLogin } from '../hooks/useFirebase';
import  { Redirect } from 'react-router-dom';
import jsCookie from "js-cookie";
import Logout from './Logout';

const Home: React.FC = () => {

return (
      <IonPage>
          <IonHeader className="homeHeader">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <br />
          <IonTitle className="homeTitle">Recipe Finder</IonTitle>
          <Logout />
        </IonToolbar>
        {jsCookie.get("loggedin")==="true" ? <Redirect to='/home'  /> : <Redirect to='/login'  />}
      </IonHeader>
      <IonContent>
      <IonButton color="medium" expand="block" routerLink="/search">
          Random Recipe
    </IonButton>

    <br />
    <br />
    <br />
    <br />
    <br />

    <IonButton color="medium" expand="block" routerLink="/mealplan">
          Daily Meal Plan
    </IonButton>
      </IonContent>
    </IonPage>
  )
};

export default Home;
