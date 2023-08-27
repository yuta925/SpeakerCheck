import { BackgroundImage } from "@mantine/core";
import { Panels } from '../components/Panels';
import backGroundImage from '../image/background.jpg'
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Select = () => {

  return (
    <div>
      <BackgroundImage src={backGroundImage} radius="xs">
        <div className="pt-8">
          <Link to="/">
            <Button text={"ホームへ"} width={"base"} ></Button>
          </Link>
        </div>
        <div className="mt-20 pb-48"><Panels /></div>
      </BackgroundImage>
    </div>
  );
};

export default Select;


