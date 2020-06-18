import ts from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser as uglify } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },

  plugins: [ts(), uglify()]
}