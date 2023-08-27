import React from 'react';
import { Text, Flex } from '@mantine/core';

type Props = {
    text: string;
};

const CharComponent = (props: Props) => {
    const { text } = props;

    return (
        <div className="border-8 border-indigo-600 w-112 relative　py-16 px-14">
            <Flex gap="5px" className="bg-red px-20">
                <div className="w-80 h-60 px-4">
                    <Text color="#7C7E83" size="32px" className="font-bold">
                        前回の点数
                    </Text>
                    <Flex gap="0px" align="center">
                        <Text size="128px">100</Text>
                        <Text size="32px" className="align-top ">点</Text>
                    </Flex>
                </div>
                <div className="max-h-2 min-h-2 truncate-ellipsis">
                    {/* <Text size="32px" className="line-clamp-6">{text} </Text> */}
                    <div className='line-clamp-2'>{text}</div>
                </div>
                <p className='text-lg'>Helloworld</p>
            </Flex>
            <Text size="40px" className="lx-28 text-start">タイトル</Text>
        </div>
    );
};

export default CharComponent;
