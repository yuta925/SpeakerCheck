import { Button } from "@mantine/core";

type Props = {
  text: String;
  onClick?: () => void;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
};

const ButtonComponent = (props: Props) => {
  const { text, onClick, size } = props; 

  return (
    <Button size={size} color="dark" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
