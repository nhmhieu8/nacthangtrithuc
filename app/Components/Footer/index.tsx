import React from 'react';
import { Circle, Container, Flex, HStack, Box, VStack, Heading, Text } from '@chakra-ui/react';
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoTiktok } from 'react-icons/bi';
import Link from 'next/link';

const footerContent = {
    company: {
        name: 'Nấc Thang tri thức',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit accusantium non odio',
        socialMedias: [BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoTiktok],
    },
    contact: [
        'Địa chỉ 1: 616/16/6 Lê Đức Thọ,Q. Gò vấp, TP.HCM',
        'Địa chỉ 2: 04 Lữ Gia, P.11, Q.10, TP.HCM',
        'Điện thoại: 0933451547',
        'Email: nacthantrithuc@gmail.com',
    ],
};

export default function Footer() {
    return (
        <Container
            bg={'purple.100'}
            maxWidth={'100%'}
        >
            <Flex
                py={{ base: '30px', lg: '50px' }}
                alignItems={'start'}
                justifyContent={'center'}
                flexDirection={{ base: 'column', md: 'row' }}
                gap={{ base: '40px', lg: '100px' }}
            >
                <VStack
                    alignItems={'start'}
                    gap={{ base: '15px', md: '20px' }}
                    width={'fit-content'}
                >
                    <Heading fontSize={{ base: '22px', md: '25px' }}>{footerContent.company.name}</Heading>
                    <HStack>
                        {footerContent.company.socialMedias.map((item, index) => {
                            return (
                                <Circle
                                    size={'8'}
                                    bg={'white'}
                                    key={index}
                                    transition={'all 0.3s'}
                                    _hover={{
                                        bg: 'purple.200',
                                    }}
                                >
                                    <Link href={'/'}>{item({ size: '20px', color: 'purple.800' })}</Link>
                                </Circle>
                            );
                        })}
                    </HStack>
                    <Box
                        maxWidth={'300px'}
                        fontSize={{ base: '14px', md: '16px' }}
                    >
                        {footerContent.company.description}
                    </Box>
                </VStack>
                <Box>
                    <Heading
                        fontSize={{ base: '18px', md: '20px' }}
                        mb={'4'}
                    >
                        Liên hệ
                    </Heading>

                    {footerContent.contact.map((item, index) => (
                        <Text
                            mb={'2'}
                            key={index}
                            fontSize={{ base: '14px', md: '16px' }}
                        >
                            {item}
                        </Text>
                    ))}
                </Box>
            </Flex>
        </Container>
    );
}
