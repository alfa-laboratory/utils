import ts from '@rollup/plugin-typescript';
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
    plugins: [ts({ include: ['../**/*.{ts,tsx}'] }), autoExternal()],
};
