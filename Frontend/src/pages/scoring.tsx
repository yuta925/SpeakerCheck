import { BackgroundImage } from "@mantine/core";
import React from 'react';
import { Text } from "@mantine/core";
import table from "../image/机.jpeg"

const Result = () => {
  return (
    <div>
      <BackgroundImage src={table} radius="xs">
        <Text>採点</Text>
      </BackgroundImage>
    </div>
  );
};

export default Result;
