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
        },
      },
      'react-native-paper/babel',
    ],
  ],
};
