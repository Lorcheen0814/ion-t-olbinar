import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
   IonAlert, IonButton,
   IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.jpg" />
      <IonCardHeader>
        <IonCardTitle>Student</IonCardTitle>
        <IonCardSubtitle>Lorcheen Olbinar</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent> Siomairice</IonCardContent>



      <IonButton id="present-alert"expand="full">Quick facts</IonButton>
    
    <IonAlert
      trigger="present-alert"
      header="A Short Title Is Best"
      subHeader="A Sub Header Is Optional"
      message="A message should be a short, complete sentence."
      buttons={['Action']}
    ></IonAlert>

<IonButton id="open-action-sheet"expand="full">Open action sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>

    </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Tab1;
