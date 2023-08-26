import { firebaseConfig, firebase, firestore } from "./firebaseConfig";  
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";


const BooksGet = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    console.log(process.env)
    const docRef = collection(firestore,"Books")
    console.log(docRef)
    getDocs(docRef).then((snapshot) => {
      console.log("あ")
      let results = [];
      console.log(snapshot.docs)
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        results.push({ id: doc.id, ...doc.data() });
      });
      setBooks(results);
    }).catch(() => {
      console.log("Error")
    });
  }, []);

  return books[0] ? (
    books.map((book) => (
      <div key={book.id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.category}</p>
      </div>
    ))
    ) : (
    <p>データがありません</p>
  );
}

export default BooksGet