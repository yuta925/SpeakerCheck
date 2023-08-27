import { BackgroundImage, Text } from "@mantine/core";
import { Panels } from '../components/Panels';
import backGroundImage from '../image/background.jpg'

const Select = () => {
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


