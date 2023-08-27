import { Flex, Center, Text } from "@mantine/core";

type Props = {
    text: String;
};

const ScoreComponent = (props: Props) => {
    const { text } = props;

    return (
        <Center bg="#9ACDFF" className="w-[450px] h-[400px] ">
            <Flex align="center">
                <Text className="text-9xl" sx={{
                    letterSpacing: "20px",
                }}>{text}</Text>
                <Text className="text-4xl">点</Text>
            </Flex>
        </Center>
    );
};

export default ScoreComponent;
