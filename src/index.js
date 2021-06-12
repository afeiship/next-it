(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { index: 0 };

  nx.it = function (inPath, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var special = inPath.charAt(0);
    var ifReversed = special === '!';
    var ifBoolean = inPath.slice(0, 2) === '!!';
    var isComposizable = inPath.slice(0, 2) === '!@';
    var ifRaw = special === '@';
    var len = inPath.length;
    return function () {
      var item = arguments[options.index];
      if (isComposizable) return !item;
      if (ifBoolean) return !!nx.get(item, inPath.slice(2));
      if (ifReversed) return !nx.get(item, inPath.slice(1));
      if (ifRaw && len === 1) return item;
      return nx.get(item, inPath);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.it;
  }
})();
