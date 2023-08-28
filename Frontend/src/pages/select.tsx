import { BackgroundImage } from "@mantine/core";
import { Panels } from "../components/Panels";
import backGroundImage from "../image/background.jpg";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/Button";

const Select = () => {
  return (
    <div>
      <BackgroundImage src={backGroundImage} radius="xs">
        <div className="pt-8">
          <Link to="/">
            <ButtonComponent text={"ホームへ"} width={"base"} variant={"filled"} ></ButtonComponent>
          </Link>
        </div>
        <div className="mt-20 pb-48">
          <Panels />
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Select;
