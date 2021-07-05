import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    OrganizaAqui!
                </Menu.Item>
                <Menu.Item class="item" as={NavLink} to='/activities' name='Atividades' />
                <Menu.Item>
                    
                    <Button color='green' class="ui green button" as={NavLink} to='/createActivity' positive content='Criar Atividade' style={{height: "35px" }}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}