import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom', 'styled-components'],
  output: {
    format: 'umd',
    name: 'react-snackbar-alert',
    file: 'dist/react-snackbar-alert.min.js',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled'
    }
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
