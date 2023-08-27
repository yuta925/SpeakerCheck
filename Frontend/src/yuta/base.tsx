import { collection, CollectionReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export type BookType = {
  author: string;
  category: string;
  isRead: boolean;
  title: string;
}

export const getBook = async (): Promise<BookType | null> => {

  const booksColRef = collection( // 1 : Booksコレクションへの参照の取得
    db,
    "Books"
  ) as CollectionReference<BookType>;
  
  const bookDocRefId1 = doc(booksColRef, "D3sstBpHuxhVrnjPqLtF"); // 2 : 1の参照を元にドキュメントへの参照の取得

  const bookDocId1 = await getDoc(bookDocRefId1); // 3 : 2の参照を元にドキュメントのデータを取得する

  if (bookDocId1.exists()) {
    return bookDocId1.data() as BookType; // 4 : 3で取得したデータから必要なものを取り出す 
  } else {
    console.log("No such document!");
    return null;
  }
}

