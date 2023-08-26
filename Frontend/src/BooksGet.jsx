import { firebaseApp } from ".firebaseConfig";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const BooksGet = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const firestore = firebaseApp.firestore;
  
    const docRef = collection(firestore, "Books");
  
    getDocs(docRef).then((snapshot) => {
      let results = [];
  
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        results.push({ id: doc.id, ...doc.data() });
      });
      setBooks(results);
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