import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from '@firebase/firestore';
import { db } from '../firebaseConfig';

export const TotalDisplay: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const q = query(
          collection(db, 'User/dlMNWGAQh8r99bNNapel/Manuscript/t2L73PaVM5lJw3jzqsNm/Scoring Result'),
          orderBy('total', 'desc'),
          limit(1)
        );

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const highestTotal = snapshot.docs[0].data().total;
          setTotal(highestTotal);
        } else {
          console.log('No documents found.');
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTotal();
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : `Highest total is: ${total}`}
    </div>
  );
}

