import ts from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            preserveModules: true,
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].mjs',
            preserveModules: true,
        },
    ],
    plugins: [
        ts({ include: ['../**/*.{ts,tsx}'] }),
        nodeResolve(),
        commonjs(),
        autoExternal(),
    ],
};
