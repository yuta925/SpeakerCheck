import React, { useState, useEffect } from 'react';
import { doc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig';


export const FirestoreDisplay: React.FC = () => {
  const [speedResults, setSpeedResults] = useState<Array<number>>([]);

  useEffect(() => {
    const fetchSpeedData = async () => {
      const userCollectionRef = collection(db, 'User');
      const userDocsSnapshot = await getDocs(userCollectionRef);

      const speedPromises: Promise<number[]>[] = [];

      userDocsSnapshot.forEach((userDoc) => {
        const scoringResultsRef = collection(userDoc.ref, 'Scoring Result');
        speedPromises.push(
          getDocs(scoringResultsRef).then((scoringResultsSnapshot) => {
            const tempSpeeds: number[] = [];
            scoringResultsSnapshot.forEach((scoringDoc) => {
              const speed = scoringDoc.data().speed as number;
              tempSpeeds.push(speed);
            });
            return tempSpeeds;
          })
        );
      });

      const allSpeedResults = (await Promise.all(speedPromises)).flat();
      setSpeedResults(allSpeedResults);
    };

    fetchSpeedData();
  }, []);

  return (
    <div>
      <h1>Speed Results:</h1>
      <ul>
        {speedResults.map((speed) => (
          <div>{speed}</div>
        ))}
      </ul>
    </div>
  );
}

