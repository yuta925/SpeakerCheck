import React from 'react';
import { doc, collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

interface ScoringResultData {
  intonation: number;
  speed: number;
  articulation: number;
  loudnessOfVoice: number;
  total: number;
  AIcomment: string;
}

const AddScoringResultButton: React.FC = () => {
  
  async function addScoringResultToManuscript(userId: string, manuscriptId: string, scoringResultData: ScoringResultData) {
    const userRef = doc(db, 'User', userId);
    const manuscriptRef = doc(userRef, 'Manuscript', manuscriptId);
    const scoringResultsCollection = collection(manuscriptRef, 'Scoring Result');
    const docRef = await addDoc(scoringResultsCollection, scoringResultData);
    console.log("Document written with ID: ", docRef.id);
  }

  const handleButtonClick = () => {
    const newScoringResult: ScoringResultData = {
      intonation: 85,
      speed: 90,
      articulation: 88,
      loudnessOfVoice: 86,
      total: 349, // Just a sample total, you can adjust this calculation.
      AIcomment: "This is an AI generated comment."
    };

    // ここでユーザーIDとManuscriptのIDを指定します。この例では、一時的に 'someUserId' と 'someManuscriptId' としています。
    // 実際の実装では、適切なユーザーIDとManuscriptのIDを取得・指定する必要があります。
    addScoringResultToManuscript('dlMNWGAQh8r99bNNapel', 't2L73PaVM5lJw3jzqsNm', newScoringResult);
  }

  return (
    <button onClick={handleButtonClick}>Add Scoring Result</button>
  );
}

export default AddScoringResultButton;
