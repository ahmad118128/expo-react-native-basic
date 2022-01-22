module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            components: "./app/components",
            constants: "./app/constants",
            hooks: "./app/hooks",
            navigation: "./app/navigation",
            screens: "./app/screens",
            style: "./app/style",
          },
        },
      ],
    ],
  };
};
