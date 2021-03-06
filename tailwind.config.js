const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/**/*"],
    theme: {
        extend: {
            colors: {
                primary: "#945abc",
                secondary: "#cc007a",
            },

            textColor: {
                summary: "#7d7d7d",

                lightest: "#aaaaaa",
                light: "#7d7d7d",
                normal: "#333333",
            },
            backgroundColor: {
                author: "#ecf0f2",
            },

            keyframes: {
                siso: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "35%": {
                        transform: "rotate(0deg)",
                    },
                    "40%": {
                        transform: "rotate(-5deg)",
                    },
                    "60%": {
                        transform: "rotate(5deg)",
                    },
                    "65%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
            },
            animation: {
                siso: "siso 2s linear infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addUtilities }) {
            addBase({
                html: {
                    fontFamily:
                        "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                },
                body: {
                    fontFamily:
                        "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                },
                ul: {
                    listStyle: "inside",
                },
                ol: {
                    listStyle: "auto",
                },
            })

            addUtilities({
                ".triangle": {
                    width: 0,
                    height: 0,
                    "background-color": "transparent",
                    border: "0px solid white",
                    "border-left-width": "4px",
                    "border-right-width": "4px",
                    "border-bottom-width": "6px",
                },

                ".text-shadow": {
                    "text-shadow": ".5px .5px .5px rgb(220, 220, 220)",
                },
            })
        }),
    ],
}
