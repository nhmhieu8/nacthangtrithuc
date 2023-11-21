import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        body: {
            bg: 'white',
            color: 'purple.900',
        },
    },
};

const components = {
    Button: {
        variants: {
            solid: {
                bgColor: 'purple.500',
                color: 'white',
                transition: '0.3s ease-in-out',
                _hover: {
                    bgColor: 'purple.700',
                },
            },
            outline: {
                bgColor: 'white',
                color: 'purple.700',
                borderColor: 'purple.700',
                transition: '0.3s ease-in-out',
                _hover: {
                    bgColor: 'purple.500',
                    color: 'white',
                    borderColor: 'purple.500',
                },
            },
            ghost: {
                color: 'purple.700',
                transition: '0.3s ease-in-out',
                _hover: {
                    bgColor: 'purple.50',
                },
            },
            link: {
                color: 'purple.700',
            },
        },
    },
    Container: {
        baseStyle: {
            px: '22px',
        },
    },
};

export const theme = extendTheme({ styles, components });
