import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './styles';
import {chartConfig, screenWidth} from '../../config/Constants';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};

const Chart = () => {
  const RenderChart = () => {
    return (
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={240}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withInnerLines={false}
        withVerticalLabels={false}
        withOuterLines={false}
      />
    );
  };

  const RenderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Stats</Text>
      </View>
    );
  };

  return (
    <View>
      <RenderTitle />
      <RenderChart />
    </View>
  );
};

export default Chart;
