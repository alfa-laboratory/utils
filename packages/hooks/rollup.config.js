import ts from '@rollup/plugin-typescript';
import { terser as uglify } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: ['react'],

    plugins: [ts(), uglify(), nodeResolve(), commonjs()],
}