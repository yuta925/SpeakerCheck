import React, { ChangeEvent, useCallback, useState } from "react";
import Button from "../components/Button";
import { Flex, TextInput, Textarea, Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const Create = () => {
  const [input, setInput] = React.useState("");
  const [text, setText] = useState("");
  const [opened, { close, open }] = useDisclosure(false);
  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      setTimeout(() => {
        console.log("何かしらデータを保存する処理");
      }, 1000);
    },
    []
  );

  return (
    <div>
      <Modal opened={opened} onClose={close} size="auto" title="登録しますか？">
        <Flex gap={32}>
          <Button text={"登録"} width={"base"}></Button>
        </Flex>
      </Modal>
      <Flex justify="flex-end" gap="md" mx={63} mt={40}>
        <Link to="/">
          <Button text={"ホームへ"} width={"base"}></Button>
        </Link>
        <Button text={"下書き保存"} width={"base"}></Button>
        <Button text={"登録"} width={"base"} onClick={open}></Button>
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
      <div>
        <Textarea
          minRows={23}
          mx={63}
          placeholder="原稿"
          description={text.length + "字"}
          onChange={handleTextChange}
          styles={{
            description: { textAlign: "right" },
          }}
        />
      </div>
    </div>
  );
};

export default Create;
