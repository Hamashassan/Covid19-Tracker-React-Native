import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const chartConfig = {
  backgroundColor: '#3d4563',
  backgroundGradientFrom: '#3d4563',
  backgroundGradientTo: '#11141f',
  fillShadowGradient: 'rgba(29,33,47,0)',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(231, 423, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  useShadowColorFromDataset: false, // optional

  propsForDots: {
    r: '0',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
