const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/**/*"],
    theme: {
        extend: {
            textColor: {
                author: "#945abc",
                summary: "#7d7d7d",
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
        plugin(function ({ addBase }) {
            addBase({
                html: {
                    fontFamily:
                        "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                },
                body: {
                    fontFamily:
                        "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
                },
            })
        }),
    ],
}
