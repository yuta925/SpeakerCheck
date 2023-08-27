import { Button } from "@mantine/core";

type Props = {
  text: String;
  width: String;
};

const ButtonComponent = (props: Props) => {
  const { text, width } = props;
  const size = width === "base" ? 164 : 400;

  return (
    <Button w={size} h="52px" color="dark">
      {text}
    </Button>
  );
};

export default ButtonComponent;
