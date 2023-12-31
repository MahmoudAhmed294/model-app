module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/theme': './src/theme',
          '~/utils': './src/utils',
        },
      },
      'react-native-paper/babel',
    ],
  ],
};
