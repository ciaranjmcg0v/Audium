/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
  'Raleway-Regular': require('Assets/fonts/Raleway-Regular.ttf'),
  'Raleway-Black': require('Assets/fonts/Raleway-Black.ttf'),
  'Raleway-Medium': require('Assets/fonts/Raleway-Medium.ttf'),
  'Raleway-SemiBold': require('Assets/fonts/Raleway-SemiBold.ttf'),
  'Raleway-Bold': require('Assets/fonts/Raleway-Bold.ttf'),
  'Raleway-Italic': require('Assets/fonts/Raleway-Italic.ttf'),
  'OpenSans-Regular': require('Assets/fonts/OpenSans-Regular.ttf'),
  'Raleway-Italic': require('Assets/fonts/Raleway-Italic.ttf'),
  'GreatVibes-Regular': require('Assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
  primary: 'Raleway-Regular',
  secondary: 'OpenSans-Regular',
  black: 'Raleway-Black',
  medium: 'Raleway-Medium',
  bold: 'Raleway-Bold',
  semi: 'Raleway-SemiBold',
  extra: 'Raleway-ExtraBold',
  stylish: 'GreatVibes-Regular',
  italic: 'Raleway-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
