import { db } from "./firebaseConfig";  
import { doc, getDocs } from "firebase/firestore";


const BooksGet = () => {
  const uid = "L70DKOTWpy53Q5nDRcgi"
  const manusdriptid = "rJR4Aa9qyUMHWjQGPP1B"

  const snapShots = getDocs(doc(db, 'User', uid, 'Manuscript', manusdriptid))
  const manusdriptData = snapShots.data()

  return (
    <p>{manusdriptData}</p>
  )

 // const uid = "L70DKOTWpy53Q5nDRcgi"
//   const docRef = db.collection("User").doc("Manuscript")

//   docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.log("Error getting document:", error);
// });

//   const BookComponent = books.map((book) => (
//     <div key={book.id}>
//       <p>{book.date.toString()}</p>
//       <p>{book.text}</p>
//       <p>{book.title}</p>
//     </div>
//   ))

//   return books[0] ? (
//     <div>{BookComponent}</div>
//     ) : (
//     <p>データがありません</p>
//   );
}

export default BooksGet