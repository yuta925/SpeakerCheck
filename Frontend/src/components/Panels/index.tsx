import CharComponent from "../Panel";
import { ScrollArea, Flex } from '@mantine/core';


export const Panels = () => {
    return (
      <>
        <ScrollArea w={1200} h={350} >
          <div className="flex flex-row ">
            <Flex gap="40px">
              <CharComponent text="aaa" />
              <CharComponent text="aaa" />
              <CharComponent text="aaa" />
              <CharComponent text="aaa" />
            </Flex>
          </div>
        </ScrollArea>
      </>
    )
}