import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Images} from '../../theme';

export type Props = {
  message: string;
};

const ErrorView: React.FC<Props> = ({message}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.icons.error} style={styles.errorImage} />
      <Text style={styles.message}>Something went wrong</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ErrorView;
