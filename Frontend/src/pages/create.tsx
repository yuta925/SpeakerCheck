import React from "react";
import Button from "../components/Button";
import { Flex, TextInput, Container } from "@mantine/core";

const Create = () => {
  const [input, setInput] = React.useState("");

  return (
    <div>
      <Flex justify="flex-end" gap="md" mx={63}>
        <Button text={"下書き保存"} width={"base"}></Button>
        <Button text={"登録"} width={"base"}></Button>
      </Flex>
      <TextInput
        value={input}
        placeholder="題名"
        h={54}
        mx={63}
        size="lg"
        py={32}
        onChange={(event) => setInput(event.currentTarget.value)}
      />
    </div>
  );
};

export default Create;
