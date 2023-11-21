import React from 'react';
import { Container, Text, Heading, VStack, Button, HStack, Flex, Show } from '@chakra-ui/react';
import Image from 'next/image';
import heroImage from '../../assets/images/hero-image-purple.svg';

const heroConfig: { heading: string; subHeading: string; buttons: { contact: string; submit: string } } = {
    heading: 'Luyện thi đánh giá năng lực đại học quốc gia',
    subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptas perferendis cum sunt eos ipsam voluptatem nemo vitae eius adipisci ab eaque quo, molestias atque maxime neque illo! Hic, nostrum?',
    buttons: {
        contact: 'Liên hệ',
        submit: 'Đăng ký học →',
    },
};

export default function Hero() {
    return (
        <Container
            minWidth={'100%'}
            py={{ base: '120px', lg: '150px' }}
        >
            <Flex
                gap={{ base: '0', md: '50px', lg: '100px' }}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{ base: 'column', lg: 'row' }}
            >
                <VStack
                    maxWidth={{ base: '700px', lg: '600px' }}
                    alignItems={{ base: 'center', lg: 'start' }}
                    justifyContent={'center'}
                >
                    <Heading
                        fontSize={{ base: '38px', lg: '48px' }}
                        mb={'14px'}
                        lineHeight={'1.1'}
                        textAlign={{ base: 'center', lg: 'left' }}
                    >
                        {heroConfig.heading}
                    </Heading>
                    <Text
                        fontSize={'16px'}
                        lineHeight={'1.6'}
                        textAlign={{ base: 'center', lg: 'left' }}
                    >
                        {heroConfig.subHeading}
                    </Text>
                    <HStack mt={'22px'}>
                        <Button variant={'solid'}>{heroConfig.buttons.contact}</Button>
                        <Button variant={'outline'}>{heroConfig.buttons.submit}</Button>
                    </HStack>
                </VStack>
                <Show above="lg">
                    <Image
                        src={heroImage}
                        width={400}
                        height={400}
                        alt="Hero-image"
                    />
                </Show>
            </Flex>
        </Container>
    );
}
