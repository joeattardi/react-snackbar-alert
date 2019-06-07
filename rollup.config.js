import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom', 'styled-components'],
  output: {
    format: 'cjs',
    file: 'dist/react-snackbar-alert.min.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true
    }),
    commonjs({
      namedExports: {
        'node_modules/prop-types/index.js': [
          'bool',
          'element',
          'func',
          'oneOfType'
        ]
      }
    }),
    uglify()
  ]
};
