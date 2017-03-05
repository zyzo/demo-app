import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  row: {
    padding: 10,
    marginTop: 5,
    flexDirection: 'row',
    flex: 1
  },
  firstColumn: {
    flex: 0.6
  },
  secondColumn: {
    flex: 0.4,
    alignItems: 'flex-end'
  },
  amountLabel: {
    fontSize: 30
  },
  currencyLabel: {
    opacity: 0.8
  }
});

const RowItem = React.createClass({
  render() {
    const {
      row
    } = this.props;
    return (
      <View style={styles.row}>
        <View style={styles.firstColumn}>
          <Text>
            <Text style={styles.amountLabel}>{row.amount}</Text>
            <Text style={styles.currencyLabel}> €</Text>
          </Text>
          <Text>{row.name}</Text>
        </View>
        <View style={styles.secondColumn}>
          <Text>yoha
          </Text>
        </View>
      </View>
    );
  }
});

export default RowItem;
