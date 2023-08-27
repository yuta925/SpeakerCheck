import React from 'react';
import { doc, collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';

interface ManuscriptData {
  date: Timestamp;
  isDraft: boolean;
  text: string;
  title: string;
}

const AddManuscriptButton: React.FC = () => {
  
  async function addManuscriptToUser(userId: string, manuscriptData: ManuscriptData) {
    const userRef = doc(db, 'User', userId);
    const manuscriptsCollection = collection(userRef, 'Manuscript');
    const docRef = await addDoc(manuscriptsCollection, manuscriptData);
    console.log("Document written with ID: ", docRef.id);
  }

  const handleButtonClick = () => {
    const newManuscript: ManuscriptData = {
      date: Timestamp.fromDate(new Date()),
      isDraft: true,
      text: "This is the manuscript text.",
      title: "Manuscript Title"
    };

    // ここでユーザーIDを指定します。この例では、一時的に 'someUserId' としています。
    // 実際の実装では、適切なユーザーIDを取得・指定する必要があります。
    addManuscriptToUser('dlMNWGAQh8r99bNNapel', newManuscript);
  }

  return (
    <button onClick={handleButtonClick}>Add Manuscript</button>
  );
}

export default AddManuscriptButton;
