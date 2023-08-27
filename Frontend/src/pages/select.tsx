import { BackgroundImage, Text, Modal, Flex } from "@mantine/core";
import { Panels } from '../components/Panels';
import backGroundImage from '../image/background.jpg'
import Button from "../components/Button";
import { useDisclosure } from '@mantine/hooks';

const Select = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <BackgroundImage src={backGroundImage} radius="xs">
        <Button text={"登録"} width={"base"} onClick={open}></Button>
        <Modal opened={opened} onClose={close} size="auto" title="登録しますか？">
          <Flex gap={32}>
            <Button text={"登録"} width={"base"} ></Button>
          </Flex>
        </Modal>
        <Text>原稿選択ページ</Text>
        <div className="mt-20 pb-48"><Panels /></div>
      </BackgroundImage>
    </div>
  );
};

export default Select;


