//https://tech.toktokhan.dev/2021/05/14/nextjs-project-setting/

module.exports = {
    "env": {
        // 전역 변수 사용을 정의합니다. 추가하지 않으면 ESLint 규칙에 걸리게 됩니다.
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["next", "prettier"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true, // JSX를 파싱할 수 있습니다.
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
    }
}
