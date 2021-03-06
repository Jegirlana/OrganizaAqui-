import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/Activity';

interface Props {
    activity: Activity
}
export default function ActivityListItem({activity}: Props) {
    
    return (
        <Segment.Group>
            <Segment >
                <Item.Group >
                    <Item.Image size='tiny' circular src='/assets/user.png' />
                    <Item.Content>
                        <Item.Header as={Link} to={`activities/${activity.id}`}>
                        <Item.Description style={{ marginBottom: 8, marginTop: 24, marginLeft: 6, color:'black' }}>
                            {activity.title}
                        </Item.Description>
                        </Item.Header>
                        
                    </Item.Content>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Onde acontecer√° o evento
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='Visualizar'
                />
            </Segment>
        </Segment.Group>
    )
}