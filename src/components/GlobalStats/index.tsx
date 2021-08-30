// import React from 'react';
// import {View, Text, Dimensions} from 'react-native';
// import styles from './styles';
// import {PieChart} from 'react-native-chart-kit';

// const {width} = Dimensions.get('window');

// const getTitleColor = (name: string) => {
//   let color;
//   if (name === 'Infected') {
//     color = '#E34234';
//   } else if (name === 'Recovered') {
//     color = '#7C3030';
//   } else {
//     color = '#65000B';
//   }
//   return color;
// };

// const data = [
//   {
//     name: '',
//     population: 6760,
//     color: '#E34234',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
//   {
//     name: '',
//     population: 747,
//     color: '#7C3030',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
//   {
//     name: '',
//     population: 590,
//     color: '#65000B',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
// ];

// const chartConfig = {
//   //   backgroundGradientFrom: '#1E2923',
//   backgroundGradientFromOpacity: 0,
//   //   backgroundGradientTo: '#08130D',
//   //   backgroundGradientToOpacity: 0.5,
//   color: (opacity = 1) => `red`,
//   // strokeWidth: 2, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false, // optional
//   style: {
//     borderRadius: 16,
//   },
// };

// const GlobalStats = () => {
//   const renderChart = () => {
//     return (
//       <PieChart
//         data={data}
//         width={width - 60}
//         height={220}
//         chartConfig={chartConfig}
//         accessor={'population'}
//         backgroundColor={'transparent'}
//         paddingLeft={'15'}
//         // center={[10, 50]}
//         absolute
//       />
//     );
//   };

//   const renderStatsItem = (title: string, count: number) => {
//     return (
//       <View>
//         <Text style={[styles.statsTitle, {color: getTitleColor(title)}]}>
//           {title}
//         </Text>
//         <Text style={styles.statsCount}>{count}</Text>
//       </View>
//     );
//   };

//   const renderStatsContainer = () => {
//     return (
//       <View style={styles.statsContainer}>
//         {renderStatsItem('Infected', 6760)}
//         {renderStatsItem('Recovered', 747)}
//         {renderStatsItem('Death', 590)}
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text style={styles.title}>Global Statistics</Text>
//       <View style={styles.container}>
//         {renderStatsContainer()}
//         {renderChart()}
//       </View>
//     </View>
//   );
// };

// export default GlobalStats;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const GlobalStats = () => {
  const renderStats = (title: string, count: string) => {
    return (
      <View style={styles.stats(title)}>
        <Text style={styles.statsTitle}>{title}</Text>
        <Text style={styles.statsCount}>{count}</Text>
      </View>
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.date}>Apr 28 2020, 12:11 PM</Text>
      <Text style={styles.title}>Carona Virus Cases</Text>
      <Text style={styles.count}>23,2450,035</Text>
      <View style={styles.statsContainer}>
        {renderStats('Deaths', '243,567')}
        {renderSeperator()}
        {renderStats('Recovered', '43,567')}
      </View>
    </View>
  );
};

export default GlobalStats;
