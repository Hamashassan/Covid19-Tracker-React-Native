import {LineChart} from 'react-native-chart-kit';
import {View, Text} from 'react-native';
import React from 'react';

import {chartConfig, screenWidth} from '../../config/Constants';
import {Util} from '../../utils';
import styles from './styles';

const Chart = ({data}) => {
  const chartData = {
    datasets: [
      {
        data: data
          ? Util.formatChartData(data)
          : [Math.random() * 100, Math.random() * 100, Math.random() * 100],
      },
    ],
  };

  const RenderChart = () => {
    return (
      <LineChart
        data={chartData}
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
        <Text style={styles.title}>Statistics by last days</Text>
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
