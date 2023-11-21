import React from 'react';
import {
    Card,
    CardBody,
    Container,
    Heading,
    Box,
    Badge,
    CardFooter,
    Button,
    Image,
    Center,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import image1 from '../../assets/images/course-1.svg';
import image2 from '../../assets/images/course-2.svg';
import image3 from '../../assets/images/course-3.svg';

const coursesConfig = [
    {
        name: 'Ôn thi đánh giá năng lực',
        imageSource: image3,
        badges: ['Toán', 'Lý', 'Hóa', 'Ngữ văn', 'Tiếng anh', 'Sinh học', 'Lịch sử', 'Địa lý'],
    },
    {
        name: 'Lớp 10',
        imageSource: image2,
        badges: ['Toán', 'Lý', 'Hóa'],
    },
    {
        name: 'Lớp 9',
        imageSource: image1,
        badges: ['Toán', 'Lý', 'Hóa', 'Tiếng anh'],
    },
];

export default function Courses() {
    return (
        <Container
            bg={'purple.100'}
            maxWidth={'100%'}
            pt={'50px'}
            pb={'80px'}
            mb={'100px'}
        >
            <Heading
                textAlign={'center'}
                mb={'50px'}
            >
                Lớp học
            </Heading>

            <Center>
                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={{ base: '20px', lg: '30px' }}
                    alignItems={'stretch'}
                    justifyItems={'center'}
                >
                    {coursesConfig.map((item, index) => {
                        return (
                            <GridItem
                                key={index}
                                alignSelf={'stretch'}
                            >
                                <Card
                                    height={'100%'}
                                    width={{ base: '280px', sm: '320px' }}
                                    cursor={'pointer'}
                                    transition={'all 0.3s'}
                                    _hover={{
                                        transform: 'scale(1.05  )',
                                        boxShadow: '1px 1px 5px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    <CardBody>
                                        <Center>
                                            <Image
                                                src={'./course-img-test.png'}
                                                alt="course-image"
                                                boxSize={'200px'}
                                                justifyContent={'center'}
                                                objectFit={'fill'}
                                            />
                                        </Center>
                                        <Heading
                                            fontSize={'22px'}
                                            m={'0 0 15px'}
                                            color={'purple.900'}
                                        >
                                            {item.name}
                                        </Heading>
                                        <Box>
                                            {item.badges.map((badge, index) => (
                                                <Badge
                                                    key={index}
                                                    p={'3px 5px'}
                                                    m={'3px'}
                                                    bg={'purple.50'}
                                                    color={'purple.900'}
                                                >
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </Box>
                                    </CardBody>
                                    <CardFooter>
                                        <Button width={'100%'}>Tìm hiểu thêm</Button>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        );
                    })}
                </Grid>
            </Center>
        </Container>
    );
}
