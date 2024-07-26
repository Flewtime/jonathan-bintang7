import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function generateReversePascal(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    return triangle.reverse();
}

export default function ReversePascal() {
    const [rows, setRows] = useState('');
    const [triangle, setTriangle] = useState([]);

    const handleGenerate = () => {
        const numberOfRows = parseInt(rows, 10);
        if (isNaN(numberOfRows) || numberOfRows <= 0) {
            alert('Masukkan Nomor yang Valid');
            return;
        }
        setTriangle(generateReversePascal(numberOfRows));
    };

    return (
        <View style={styles.container}>
            <Text>Masukkan Banyak Segitiga</Text>
            <TextInput
                placeholder="Masukkan Banyak Segitiga"
                value={rows}
                onChangeText={setRows}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Process" onPress={handleGenerate} />
            <Text style={styles.resultTitle}>Hasil</Text>
            {triangle.map((row, index) => (
                <Text key={index} style={styles.row}>
                    {row.join(' ')}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    resultTitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    row: {
        fontSize: 16,
        marginVertical: 2,
    },
});
