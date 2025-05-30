import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SudokuTab: React.FC = () => {
  const [board, setBoard] = useState(
    Array(9).fill(null).map(() => Array(9).fill(0))
  );

  const handleCellPress = (row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = (newBoard[row][col] + 1) % 10; // Cycle through 0-9
    setBoard(newBoard);
  };

  const renderSudokuCell = (row: number, col: number) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={styles.cell}
        onPress={() => handleCellPress(row, col)}
        accessibilityLabel={`Sudoku cell row ${row + 1}, column ${col + 1}`}
      >
        <Text style={styles.cellText}>
          {board[row][col] || ''}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSudokuBoard = () => {
    return (
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((_, colIndex) => renderSudokuCell(rowIndex, colIndex))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView 
      style={styles.container}
      accessibilityLabel="Sudoku Game Tab"
    >
      <Text style={styles.instructions}>
        Tap cells to cycle through numbers 0-9
      </Text>
      {renderSudokuBoard()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Pink theme
    paddingTop: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  board: {
    borderWidth: 2,
    borderColor: '#FF1493',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF69B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SudokuTab;
