import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";

export default [
    {
        input: "src/scripts/main-with-global-comment.js",
        output: {
            file: "dist/js/main-with-global-comment.min.js",
            format: "cjs",
            sourcemap: true
        },
        plugins: [
            nodeResolve({ preferBuiltins: false }), // or `true`
            commonjs(),
            globals(),
            builtins(),
        ]
    }
];