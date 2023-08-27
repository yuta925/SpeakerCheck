import React from "react";
import { doc, collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface ManuscriptData {
  date: Timestamp;
  isDraft: boolean;
  text: string;
  title: string;
}

export const AddManuscript = (title: string, description: string) => {
  async function addManuscriptToUser(
    userId: string,
    manuscriptData: ManuscriptData
  ) {
    console.log("addManuscriptToUser");
    const userRef = doc(db, "User", userId);
    console.log("userRef: ", userRef.id);
    const manuscriptsCollection = collection(userRef, "Manuscript");
    console.log("manuscriptsCollection: ", manuscriptsCollection.id);
    const docRef = await addDoc(manuscriptsCollection, manuscriptData);
    console.log("Document written with ID: ", docRef.id);
  }

  const handleButtonClick = () => {
    console.log(handleButtonClick);
    const newManuscript: ManuscriptData = {
      date: Timestamp.fromDate(new Date()),
      isDraft: true,
      text: description,
      title: title,
    };

    console.log(newManuscript);

    addManuscriptToUser("dlMNWGAQh8r99bNNapel", newManuscript);
  };

  console.log("handle click");
  handleButtonClick();
};
