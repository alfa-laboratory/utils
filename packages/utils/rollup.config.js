import ts from '@rollup/plugin-typescript';
import { terser as uglify } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [ts(), uglify(), autoExternal()],
};
