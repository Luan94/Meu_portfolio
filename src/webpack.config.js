const path = require('path');

module.exports = {
  // Outras configurações do Webpack...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
