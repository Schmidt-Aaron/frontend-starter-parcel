module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-cssnext"),
    require("postcssPresetEnv"),
    require("postcss-modules")({
      scopeBehaviour: "global", // can be 'global' or 'local',
    }),
  ],
};
