import CharComponent from "../Panel";
import { ScrollArea } from '@mantine/core';


export const Panels = () => {
    return (
      <>
        <ScrollArea w={1200} h={350} >
          <div className="flex flex-row ">
            <CharComponent text="aaa" />
            <CharComponent text="aaa" />
            <CharComponent text="aaa" />
            <CharComponent text="aaa" />
          </div>
        </ScrollArea>
      </>
    )
}