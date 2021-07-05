import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>Converse sobre esse evento</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Maria</Comment.Author>
                            <Comment.Metadata>
                                <div>Hoje 5:42 PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Massa!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Responder</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>João</Comment.Author>
                            <Comment.Metadata>
                                <div>5 dias ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Tá certo!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Responder</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Adicionar resposta'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})