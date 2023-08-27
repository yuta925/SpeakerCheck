import { BackgroundImage, Text, Modal, } from "@mantine/core";
import { Panels } from '../components/Panels';
import backGroundImage from '../image/background.jpg'
import { Link } from "react-router-dom";
import ButtonComponent from "../components/Button";

const Select = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <BackgroundImage src={backGroundImage} radius="xs">
        <Text>原稿選択ページ</Text>
        <div className="mt-20 pb-48"><Panels /></div>
      </BackgroundImage>
    </div>
  );
};

export default Select;


