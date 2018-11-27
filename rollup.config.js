// MIT License
// Copyright (C) 2016-Present Shota Matsuda

import babel from 'rollup-plugin-babel'

export default {
  input: 'index.module.js',
  plugins: [
    babel({
      presets: [
        ['@babel/env', {
          targets: { node: 'current' },
          modules: false
        }]
      ]
    })
  ],
  output: [
    {
      format: 'cjs',
      file: 'index.js'
    }
  ]
}
