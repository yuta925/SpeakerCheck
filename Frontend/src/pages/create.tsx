import React, { ChangeEvent, useCallback, useState } from "react";
import Button from "../components/Button";
import { Flex, TextInput, Textarea, Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import ButtonComponent from "../components/Button";

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
          <ButtonComponent
            text={"登録"}
            width={"base"}
            variant={"outline"}
          ></ButtonComponent>
        </Flex>
      </Modal>
      <Flex justify="flex-end" gap="md" mx={63} mt={40}>
        <Link to="/">
          <ButtonComponent
            text={"ホームへ"}
            width={"base"}
            variant={"outline"}
          ></ButtonComponent>
        </Link>
        <ButtonComponent
          text={"下書き保存"}
          width={"base"}
          variant={"outline"}
        ></ButtonComponent>
        <ButtonComponent
          text={"登録"}
          width={"base"}
          onClick={open}
          variant={"outline"}
        ></ButtonComponent>
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
