'use strict';

// MIT License
// Copyright (C) 2018-Present Shota Matsuda
function nullify(modules) {
  return {
    resolveId(importee) {
      if (modules.includes(importee)) {
        return importee;
      }

      return null;
    },

    load(id) {
      if (modules.includes(id)) {
        return 'export default null';
      }

      return null;
    }

  };
}

module.exports = nullify;
