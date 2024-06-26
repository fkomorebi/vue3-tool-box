module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 14, // Vant 官方根字体大小是 37.5
      // minPixelValue: 0,
      // exclude: "",
      propList: [ '*' ],
      selectorBlackList: [ '.norem' ], // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
};
