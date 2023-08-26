import { Button } from "@mantine/core";



type Props = {
  text: String;
};

const ButtonComponent = (props: Props) => {
  const { text } = props;

  return (
    <Button w="400px" h="52px" color="dark">
      {text}
    </Button>
  );
};

export default ButtonComponent;
