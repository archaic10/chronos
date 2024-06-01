const commitValueOfObject = Object.freeze({
    FIX: /fix:[\s\S]+|fix\(.+\):[\s\S]+/,
    FEAT: /feat:[\s\S]+|feat\(.+\):[\s\S]+/,
    HOTFIX: /hotfix:[\s\S]+|hotfix\(.+\):[\s\S]+/,
    BUILD: /build:[\s\S]+|build\(.+\):[\s\S]+/,
    CHORE: /chore:[\s\S]+|chore\(.+\):[\s\S]+/,
    CI: /ci:[\s\S]+|ci\(.+\):[\s\S]+/,
    DOCS: /docs:[\s\S]+|docs\(.+\):[\s\S]+/,
    STYLE: /style:[\s\S]+|style\(.+\):[\s\S]+/,
    TEST:  /test:[\s\S]+|test\(.+\):[\s\S]+/,
    REFACTOR: /refactor:[\s\S]+|refactor\(.+\):[\s\S]+/,
    PERF: /perf:[\s\S]+|perf\(.+\):[\s\S]+/,
    BREAKING_CHANGE:/[a-zA-Z]+!:[\s\S]+|[a-zA-Z]+\(.+\)!:[\s\S]+/
})

export const {
    FIX,
    FEAT,
    HOTFIX,
    BUILD,
    CHORE,
    CI,
    DOCS,
    STYLE,
    TEST,
    REFACTOR,
    PERF,
    BREAKING_CHANGE
} = commitValueOfObject