module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // style: (name) => `${name}/style/less`,
        style: true,
      },
      'vant',
    ],
    // [
    // 	"component",
    // 	{
    // 		libraryName: "element-ui",
    // 		styleLibraryName: "theme-chalk",
    // 	},
    // ],
  ],
  // presets: ["@vue/cli-plugin-babel/preset"],
};
