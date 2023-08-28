import { useEffect, useState } from "react";
import CharComponent from "../Panel";
import { ScrollArea, Flex } from '@mantine/core';
import { collection, query, getDocs, DocumentData, Timestamp } from '@firebase/firestore';
import { db } from "../../firebaseConfig";
import { format } from 'date-fns'


export const Panels = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchManuscripts = async () => {
      try {
        const q = query(
          collection(db, 'User/dlMNWGAQh8r99bNNapel/Manuscript'),
        );
        
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {                  
          const manuScripts = snapshot.docs.map((c) => {
            return c.data()
          })
          setData(manuScripts);        
        } else {
          console.log('No documents found.');
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManuscripts();
  }, []);

    return (
      <>
        <ScrollArea w={1200} h={350} >
            <Flex gap="40px" px={40}>
              {
                data.map((item, i) => {
                    return (
                      <CharComponent key={i} date={format(item.date.toDate(), 'yyyy/MM/dd')} isDraft={item.isDraft} title={item.title} text={item.text} />
                    )
                })
              }
            </Flex>
        </ScrollArea>
      </>
    )
}