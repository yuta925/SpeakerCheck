import { collection, CollectionReference, doc, getDocs, query, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

export type Manuscript = {
    date: Timestamp,
    isDraft: boolean,
    text: string,
    title: string
}

export const getManuscript = async (manuscriptId: string): Promise<Manuscript[]> => {
    const manuscriptQuery = query(collection(doc(db, "User", manuscriptId), "Manuscript"))
    const manuscriptSnapshots = await getDocs(manuscriptQuery);

    const reviews: Manuscript[] = []
    manuscriptSnapshots.forEach(doc => {
        reviews.push(doc.data() as Manuscript )  
    });

    return reviews;
}