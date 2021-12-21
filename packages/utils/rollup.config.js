import ts from '@rollup/plugin-typescript';
import autoExternal from 'rollup-plugin-auto-external';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm',
        },
    ],
    plugins: [ts({ include: ['../**/*.{ts,tsx}'] }), autoExternal()],
};
