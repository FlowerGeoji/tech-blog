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
