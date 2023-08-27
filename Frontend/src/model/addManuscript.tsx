import React from "react";
import { doc, collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ButtonComponent from "../components/Button";

interface ManuscriptData {
  date: Timestamp;
  isDraft: boolean;
  text: string;
  title: string;
}

type Props = {
  title: string;
  description: string;
};

export const AddManuscriptButton = (props: Props) => {
  const { title, description } = props;
  async function addManuscriptToUser(
    userId: string,
    manuscriptData: ManuscriptData
  ) {
    console.log("addManuscriptToUser");
    const manuscriptsCollection = collection(db, `User/${userId}/Manuscript`);
    const docRef = await addDoc(manuscriptsCollection, manuscriptData);
    console.log("Document written with ID: ", docRef.id);
  }

  const handleButtonClick = async () => {
    const newManuscript: ManuscriptData = {
      date: Timestamp.fromDate(new Date()),
      isDraft: true,
      text: description,
      title: title,
    };

    await addManuscriptToUser("dlMNWGAQh8r99bNNapel", newManuscript);
  };

  return (
    <ButtonComponent
      text={"登録"}
      width={"base"}
      onClick={handleButtonClick}
    ></ButtonComponent>
  );
};
