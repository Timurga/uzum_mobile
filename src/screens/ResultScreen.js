import React, { useState } from "react";
import { View, Text } from "react-native";

const ResultScreen = ({route}) => {
    const [results, setResults] = useState([]);

   
    React.useEffect(() => {
        const addResult = () => {
            results.push(route.params?.data);
            setResults([...results]);
        }
    
    }, [route.params?.data]);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Saved Results:</Text>
            {results.map((item, index) => (
                <Text style={{ fontSize: 24 }} key={index}>{item}</Text>
            ))}
        </View>
    );
};

export default ResultScreen;