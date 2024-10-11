import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements'; 
import { ListItem, Avatar } from 'react-native-elements'; 
import {PARTNERS} from '../shared/partners';

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness...
            </Text>
        </Card>
    );
};

const AboutScreen = () => {
    const [communityPartners, setCommunityPartners] = useState(PARTNERS); 

    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {communityPartners.map((partner) => (
                    <ListItem key={partner.id}>
                        <Avatar rounded source={partner.image} />
                        <ListItem.Content>
                            <ListItem.Title>{partner.name}</ListItem.Title>
                            <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </Card>
        </ScrollView>
    );
};

export default AboutScreen;
