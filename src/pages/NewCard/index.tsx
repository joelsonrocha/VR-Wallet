/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BaseScreen from '../../global/baseScreen';
import topography from '../../global/typography';
import theme from '../../global/theme';
import CustomHeaderSlim from '../../components/CustomHeaderSlim';

function NewCard(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <BaseScreen>
      <View style={styles.container}>
        <CustomHeaderSlim title="cadastro" />
        <View style={styles.body}>
          <Text style={[topography.h1, styles.title]}>Novo Cartão</Text>
        </View>
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: theme.baseColor.blueDark,
    justifyContent: 'flex-start',
  },
  title: {
    color: theme.textColor.white,
    fontFamily: 'Roboto',
    marginBottom: 30,
  },
  subtitle: {
    color: theme.baseColor.greenLight,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
});

export default NewCard;