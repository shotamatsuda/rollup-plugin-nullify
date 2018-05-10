// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      presets: [
        ['env', {
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
