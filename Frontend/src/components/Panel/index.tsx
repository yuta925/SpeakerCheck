import React from 'react';
import { Text, Flex } from '@mantine/core';

type Props = {
    text: string;
};

const CharComponent = (props: Props) => {
    const { text } = props;

    return (
        <div className="border-8 h-[542px] w-112 relative　py-16 px-14">
            <Flex gap="5px" text-center className="py-[100px]">
                <div>
                    <Text color="#7C7E83" size="32px" className="font-bold">
                        前回の点数
                    </Text>
                    <Flex align="center">
                        <Text size="128px">100</Text>
                        <Text size="32px">点</Text>
                    </Flex>
                    <Text size="40px" >タイトル</Text>
                </div>
                <Text size="32px" className=" line-clamp-3　">{text} </Text>
            </Flex >
        </div >
    );
};

export default CharComponent;
