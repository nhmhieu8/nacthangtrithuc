import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/logo-icon.svg';
import { HStack, StackDivider, Show, Flex, Text } from '@chakra-ui/react';

export default function Logo() {
    return (
        <Link href={'/'}>
            <HStack divider={<StackDivider display={{ base: 'none', sm: 'block' }} />}>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Nấc thang tri thức"
                />
                <Show above="sm">
                    <Flex
                        gap={'0'}
                        fontWeight={600}
                        fontSize={'16px'}
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <Text>NẤC THANG</Text>
                        <Text>TRI THỨC</Text>
                    </Flex>
                </Show>
            </HStack>
        </Link>
    );
}
