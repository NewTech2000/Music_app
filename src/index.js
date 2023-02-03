import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {connect} from 'react-redux';
import Loading from '../src/components/Loading/Loading';

import AuthNavigator from './routes/AuthNavigator';
import AppNavigator from './routes/AppNavigator';
import env from './config/config';
import defaultTheme from './assets/resources/theme';
import styled, {useTheme} from 'styled-components/native';

import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';

const Root = ({store, persistor, authenticated}) => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <StatusBar backgroundColor="#111111" barStyle="light-content" />
        {/*  */}
          {/* {authenticated?<AppNavigator />:<AuthNavigator/>}  */}
          <AppNavigator />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getDefaultUserToken: dispatch.auth.getDefaultUserToken,
});

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
