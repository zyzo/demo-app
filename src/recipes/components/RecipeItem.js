import React from 'react';
import { View, Text } from 'react-native';

const RowItem = React.createClass({
  render() {
    const {
      row
    } = this.props;
    return (
      <View>
        <View>
          <Text>
            <Text>{row.amount}</Text>
            <Text> €</Text>
          </Text>
          <Text>{row.name}</Text>
        </View>
        <View>
          <Text>yoha
          </Text>
        </View>
      </View>
    );
  }
});

export default RowItem;
