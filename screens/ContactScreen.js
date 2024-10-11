import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from 'react-native'; 

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 10 }}>1 Nucamp Way</Text>
                <Text style={{ margin: 10 }}>Seattle, WA 98001</Text>
                <Text style={{ margin: 10 }}>U.S.A.</Text>
                <Text style={{ marginBottom: 10, margin: 10 }}>Phone: 1-206-555-1234</Text>
                <Text style={{ margin: 10 }}>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;