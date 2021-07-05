import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12, width: "90px" }} />
                    OrganizaAqui!
                </Header>
                <Header as='h2' inverted content='Sua plataforma de atividade!' style={{ marginBottom: 60 }} />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Vê minhas atividades
                </Button>
            </Container>
        </Segment>
    )
}