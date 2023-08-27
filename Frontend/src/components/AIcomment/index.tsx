import { Text } from '@mantine/core';

type Props = {
    text: string;
};

const AIcommentComponent = (props: Props) => {
    const { text } = props;
    return (
        <div className="border-4 h-[280px] w-[920px] relative">
            <Text size="20px" className="text-left w-[160px] my-3 mr-200 ml-3 border-blue-200 border-b-2 " >AIからのコメント</Text>
            <Text size="20px" className="text-left mx-3 w=[900px] h=[100px] ">{text}</Text>
        </div >
    );
};

export default AIcommentComponent;
