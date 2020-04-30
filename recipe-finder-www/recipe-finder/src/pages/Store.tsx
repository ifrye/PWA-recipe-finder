import { Plugins } from '@capacitor/core';
import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';
import jsCookie from "js-cookie";
import { Redirect } from 'react-router';

const { Geolocation } = Plugins;

const Store: React.FC = () => {

    const [lat, setLat] = useState<any>();
    const [long, setLong] = useState<any>();

    async function getLocation(){ 
        const position = await Geolocation.getCurrentPosition(); 
        //set states here not in useEffect
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        return position; 
    }
    
    useEffect(() => { 
        const latLongLoc = async () => { 
            const geoData = await getLocation(); 
            console.log(geoData); 
            }; 
            latLongLoc(); 
        }, []);
    
    return (
        
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <br />
            <IonTitle className="randomTitle">Nearby Grocery Stores</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div>Lat: {lat}</div>
            <div>Long: {long}</div>
        </IonContent>

        </IonPage>
    );
}
export default Store;
