import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (currentValue === "") {
      setCurrentValue(display);
      setOperator(op);
      setDisplay("0");
    } else {
      calculate();
      setOperator(op);
    }
  };

  const calculate = () => {
    let result;
    const currentValueNum = parseFloat(currentValue);
    const displayNum = parseFloat(display);

    switch (operator) {
      case "+":
        result = currentValueNum + displayNum;
        break;
      case "-":
        result = currentValueNum - displayNum;
        break;
      case "*":
        result = currentValueNum * displayNum;
        break;
      case "/":
        result = currentValueNum / displayNum;
        break;
      default:
        result = displayNum;
    }

    setDisplay(result.toString());
    setCurrentValue("");
  };

  const handleEqualsClick = () => {
    calculate();
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setCurrentValue("");
    setOperator("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
       

        <div className="calculator">
          <div className="display">{display}</div>
          <IonGrid>
            <IonRow>
              <IonCol><IonButton onClick={() => handleNumberClick("7")}>7</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("8")}>8</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("9")}>9</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleOperatorClick("/")}>/</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleNumberClick("4")}>4</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("5")}>5</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("6")}>6</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleOperatorClick("*")}>*</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleNumberClick("1")}>1</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("2")}>2</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleNumberClick("3")}>3</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleOperatorClick("-")}>-</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleNumberClick("0")}>0</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleEqualsClick()}>=</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleOperatorClick("+")}>+</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleClearClick()}>C</IonButton></IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
