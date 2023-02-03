import {RFValue} from 'react-native-responsive-fontsize';

const SCREEN_HEIGHT_REFERENCE = 742;

/**
 * This can be used to create different themes
 * like dark and light. It can be then connected to
 * React context and controlled via a setting flag.
 */

export const PRIMARY_COLOR = '#FBBC05';
export const SECONDARY_COLOR = '#111111';

const defaultTheme = {
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  generalColor: '#1F313F',
  darkGray: '#535353',
  lightGray: '#e1e1e1',
  gray: '#A1A1A1',
  homeBackground: '#F5F6F7',
  textInput: '#3A3C3F',
  label: '#9CA3AF',

  genericInput: {
    colorPrimary: '#FFFFFF',
    textPrimary: '#242424',
    borderPrimary: '#CCCCCC',
    placeholderPrimary: '#777777',
  },
  label: {
    textPrimary: '#777777',
    required: '#8f1313',
  },
  text: {
    textPrimary: '#242424',
    dark: '#242424',
    light: '#FFFFFF',
    required: '#ab0303',
    placeholder: '#FFFFFF',
    borderLight: '#FFFFFF',
    borderFocus: '#80CBC4',
    s1: RFValue(44, SCREEN_HEIGHT_REFERENCE),
    s2: RFValue(32, SCREEN_HEIGHT_REFERENCE),
    s3: RFValue(28, SCREEN_HEIGHT_REFERENCE),
    s4: RFValue(25, SCREEN_HEIGHT_REFERENCE),
    s5: RFValue(23, SCREEN_HEIGHT_REFERENCE),
    s6: RFValue(20, SCREEN_HEIGHT_REFERENCE),
    s7: RFValue(17, SCREEN_HEIGHT_REFERENCE),
    s8: RFValue(16, SCREEN_HEIGHT_REFERENCE),
    s9: RFValue(14, SCREEN_HEIGHT_REFERENCE),
    s10: RFValue(12, SCREEN_HEIGHT_REFERENCE),
    s11: RFValue(10, SCREEN_HEIGHT_REFERENCE),
    s12: RFValue(8, SCREEN_HEIGHT_REFERENCE),
  },
};

export default defaultTheme;
