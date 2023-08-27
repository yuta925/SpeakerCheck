import { Button } from "@mantine/core";

type Props = {
  text: String;
  width: String;
  onClick?: () => void;
};

const ButtonComponent = (props: Props) => {
  const { text, width, onClick } = props;
  const size = width === "base" ? 164 : 400;

  return (
    <Button w={size} h="52px" color="dark" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
