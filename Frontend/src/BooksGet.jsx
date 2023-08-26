import { firestore } from "./firebaseConfig";  
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";


const BooksGet = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    console.log(process.env)
    const docRef = collection(firestore,"Books")
    console.log(docRef)
    getDocs(docRef).then((snapshot) => {
      let results = [];
      console.log(snapshot.docs)
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        results.push({ id: doc.id, ...doc.data() });
      });
      setBooks(results);
      console.log(books[0])
    }).catch(() => {
      console.log("Error")
    });
  }, []);

  const BookComponent = books.map((book) => (
    <div key={book.id}>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.category}</p>
    </div>
  ))

  return books[0] ? (
    <div>{BookComponent}</div>
    ) : (
    <p>データがありません</p>
  );
}

export default BooksGet