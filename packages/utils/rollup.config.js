import ts from '@rollup/plugin-typescript';
import { terser as uglify } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/index.js',
        format: 'cjs',
    },
    {
        file: 'dist/esm/index.js',
        format: 'esm',
    }],
    plugins: [ts({ include: ['../**/*.{ts,tsx}'] }), uglify(), autoExternal()],
};
