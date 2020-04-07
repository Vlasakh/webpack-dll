const aModule = require('./a');

const alpha = () => {
  const str = aModule();

  return str;
};

module.exports = alpha;
