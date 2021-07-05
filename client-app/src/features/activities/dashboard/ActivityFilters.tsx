import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='filter' attached color='violet' content='Filtros' />
                <Menu.Item content='Todas atividades' />
                <Menu.Item content="Para fazer" />
                <Menu.Item content="Finalizadas" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}