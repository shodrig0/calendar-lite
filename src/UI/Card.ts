import { createTheme } from "@mui/material";

export const themeCard = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'outlined' },
                            style: {
                                borderWidth: '2px',
                                borderColor: 'violet',
                                width: '600px'
                            },
                        },
                    ],
                },
            },
        },
    },
})