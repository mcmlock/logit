import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width, height } = Dimensions.get('window');

export const LineGraph = props => {
    return (
        <LineChart
            fromZero={true}
            onDataPointClick={value => {
                props.selectPoint(value.index * 1440 + props.startDateValue)
            }}
            segments={1}
            withInnerLines={false}
            withOuterLines={false}
            withHorizontalLines={false}
            withVerticalLines={false}
            formatYLabel={() => ''}
            hidePointsAtIndex={props.pointsToHide}

            data={{
                datasets: [
                    {
                        data: props.values
                    }
                ]
            }}
            width={(props.values.length * 50)}
            height={height * .25 * (props.highestValue / props.yScale)}
            chartConfig={{
                backgroundGradientFrom: props.color,
                backgroundGradientTo: props.color,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                }
            }}
            bezier
            style={{
                paddingBottom: -15,
                marginLeft: -15,
            }}

        />
    );
}