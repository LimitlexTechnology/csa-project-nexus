import { config } from "@repo/eslint-config/react-internal";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
    ...config,
    {
        files: ["**/*.js", "**/*.ts"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    },
];
