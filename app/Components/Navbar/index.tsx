import React from 'react';
import Link from 'next/link';
import { Flex, HStack, Text, Container, Show, Hide, Button } from '@chakra-ui/react';
import MobileNavBar from './MobileNavBar';
import Logo from './Logo';

const navInfo: NavInfo = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Lớp học ', path: '/lop-hoc' },
    { name: 'Thư viện', path: '/thu-vien' },
    { name: 'Liên hệ', path: '/lien-he' },
    { name: 'Đăng ký học', path: 'dang-ky-hoc', isButton: true },
];

export default function Navbar() {
    return (
        <Container
            maxWidth={'100vw'}
            position={'fixed'}
            zIndex={'1000'}
            bgColor={'#fff'}
        >
            <Flex
                py={'20px'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Logo />
                <Hide above="md">
                    <MobileNavBar navInfo={navInfo} />
                </Hide>
                <Show above="md">
                    <HStack
                        spacing={{ md: '30px', lg: '50px' }}
                        alignItems={'center'}
                    >
                        {navInfo.map((item, key) => {
                            return (
                                <Link
                                    key={key}
                                    href={item.path}
                                >
                                    {item.isButton ? (
                                        <Button>{item.name}</Button>
                                    ) : (
                                        <Text
                                            fontWeight={600}
                                            fontSize={'16px'}
                                            _hover={{ color: 'purple.500' }}
                                            transition={'0.3s ease-in-out'}
                                        >
                                            {item.name}
                                        </Text>
                                    )}
                                </Link>
                            );
                        })}
                    </HStack>
                </Show>
            </Flex>
        </Container>
    );
}
