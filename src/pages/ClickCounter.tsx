import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ClickCounter.css';

const Click_counter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const resetClickCount = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <div>
          <p>Click Count: {clickCount}</p>
          <IonButton onClick={incrementClickCount} expand="block">Increment Click Count</IonButton>
          <IonButton onClick={resetClickCount} expand="block" color="danger">Reset Click Count</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Click_counter;
