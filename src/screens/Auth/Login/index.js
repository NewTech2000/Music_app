import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import AppTextInput from '../../../components/TextInput';
import {getByScreenSize, hdp, wdp} from '../../../Utils/responsive';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppButton from '../../../components/Button';

const BackgroundContainer = styled.View`
  backgroundColor: ${({theme}) => theme.secondary};
  width: 100%;
  height: 100%;
`;

const Logo = styled(Image)`
  width: 35%;
  height: 28%;
  align-self: center;
`;

const MainContainer = styled.View`
  padding: 5%;
`;

const ErrorText = styled(Text)`
  color: ${({theme}) => theme.text.required};
`;

const ForgotPassword = styled(Text)`
  color: ${({theme}) => theme.text.light};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s1)}px;
  padding-top: ${hdp(2)}px;
`;
const FooterText = styled(Text)`
  color: ${({theme}) => theme.text.light};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s7)}px;
  padding-top: ${hdp(2)}px;
  text-align: center;
`;
const FooterTextStyled = styled(Text)`
  color: ${({theme}) => theme.primary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s7)}px;
  padding-top: ${hdp(2)}px;
  text-align: center;
  align-self: center;
`;
const FooterPrivacyText = styled(Text)`
  color: ${({theme}) => theme.text.light};
  font-size: ${({theme}) => getByScreenSize(theme.text.s10, theme.text.s9)}px;
  align-self: center;
`;
const SocialMediaText = styled(Text)`
  color: ${({theme}) => theme.text.light};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s1)}px;
  padding-top: ${hdp(2)}px;
  text-align: center;
`;
const SocialImages = styled(Image)`
  width: ${wdp(12)}px;
  height: ${hdp(7)}px;
`;
const SocialContainer = styled(TouchableOpacity)`
  margin-top: ${hdp(2)}px;
`;

const Spacer = styled.View`
  padding-vertical: 2px;
  backgroundolor: ${({theme}) => theme.text.light};
  margin-top: ${hdp(3)}px;
  width: ${wdp(80)}px;
  align-self: center;
`;
function Login({navigation}) {
  const theme = useTheme();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    userName: Yup.string().trim().required().label('userName'),
    password: Yup.string().required().label('Password'),
  });

  const handleLogin = () => {
    setLoading(true);
    let payload = {
      userName: username,
      password: password,
    };
    navigation.navigate('Home');
    // this.props.login(payload);
    setLoading(false);
  };

  return (
    <BackgroundContainer>
      <Logo
        source={require('../../../assets/images/practical_test_logo.png')}
      />
      <MainContainer>
        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors, touched}) => (
            <>
              <View>
                <Text style={{color: 'white'}}>User Name</Text>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange('userName')}
                  placeholder="Enter your User Name"
                  textContentType="User Name"
                />
                {touched.userName && <ErrorText>{errors.userName}</ErrorText>}
                <Text style={{color: 'white', marginTop: 10}}>Password</Text>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyBoardType="default"
                  onChangeText={handleChange('password')}
                  placeholder="Enter your password"
                  secureTextEntry
                  textContentType="password"
                />
                {touched.password && <ErrorText>{errors.password}</ErrorText>}
              </View>

              <ForgotPassword>Forgot Your Password?</ForgotPassword>

              <View style={{marginTop: hdp('5%'), alignSelf: 'center'}}>
                <AppButton
                  title="Login"
                  mode="contained"
                  loading={loading}
                  style={{
                    backgroundColor: theme.primary,
                    width: wdp('90%'),
                    alignSelf: 'center',
                    marginLeft: 10,
                    borderRadius: 100,
                  }}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
        <SocialMediaText>Or Continue With</SocialMediaText>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', height: hdp(10)}}>
          <SocialContainer>
            <SocialImages
              source={require('../../../assets/images/facebook.png')}
            />
          </SocialContainer>

          <SocialContainer>
            <SocialImages
              source={require('../../../assets/images/google.png')}
              style={{width: 45, height: 45, marginTop: 8, marginLeft: 20}}
            />
          </SocialContainer>
        </View>
      </MainContainer>

      <FooterPrivacyText>
        By Continuing, you agree to terms Of Service Privacy,policy{' '}
      </FooterPrivacyText>

      <Spacer />
      <FooterText>
        Not have an account yet? <FooterTextStyled>Join us</FooterTextStyled>
      </FooterText>
    </BackgroundContainer>
  );
}

export default Login;
