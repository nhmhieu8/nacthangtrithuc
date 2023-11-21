'use client';
import React, { useState } from 'react';
import { VStack, Text, Button, Hide } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

type Props = {
    navInfo: NavInfo;
};

export default function MobileNavBar({ navInfo }: Props) {
    const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
    return (
        <>
            <Hide above="md">
                <button
                    onClick={() => setIsOpenNav((prev) => !prev)}
                    style={{ zIndex: 120 }}
                >
                    {isOpenNav ? <AiOutlineClose size={'30px'} /> : <AiOutlineMenu size={'30px'} />}
                </button>
            </Hide>
            <VStack
                bgColor={'#fff'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                visibility={isOpenNav ? 'visible' : 'hidden'}
                transform={isOpenNav ? 'translateX(0)' : 'translateX(100%)'}
                opacity={isOpenNav ? '1' : '0'}
                spacing={'40px'}
                alignItems={'center'}
                width={'100%'}
                height={'100vh'}
                justifyContent={'center'}
                zIndex={'100'}
                transition={'all 0.3s ease-in-out'}
            >
                {navInfo.map((item, key) => {
                    return (
                        <Link
                            href={item.path}
                            key={key}
                            onClick={() => {
                                item.path === '/' && setIsOpenNav(false);
                            }}
                        >
                            {item.isButton ? (
                                <Button fontSize={'20px'}>{item.name}</Button>
                            ) : (
                                <Text
                                    fontWeight={600}
                                    fontSize={'20px'}
                                >
                                    {item.name}
                                </Text>
                            )}
                        </Link>
                    );
                })}
            </VStack>
        </>
    );
}
