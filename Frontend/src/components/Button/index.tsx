import { Button } from "@mantine/core";

type Props = {
  text: String;
  width: String;
  variant: "outline" | "white" | "light" | "default" | "filled" | "gradient" | "subtle"
  onClick?: () => void;
};

const ButtonComponent = (props: Props) => {
  const { text, width,variant, onClick } = props;
  const size = width === "base" ? 164 : 400;

  return (
    <Button w={size} variant={variant} h="52px" color="dark" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
