import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

export default observer(function ActivityForm() {
    const history = useHistory();
    const { activityStore } = useStore();
    const { createActivity, updateActivity,
        loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    function handleSubmit() {
        if (activity.id.length === 0) { //create
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => history.push(`activities/${newActivity.id}`));
        } else { //edit
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Carregando atividade...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Header as='h4' inverted style={{ color: 'grey', fontSize: 15, marginTop:20, marginLeft: 20 }}>
                    Digite a título:
                </Header>
                <Form.Input placeholder='Título' value={activity.title} name='title' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }} />
                <Header as='h4' inverted style={{ color:'grey', fontSize: 15,  marginTop:20, marginLeft: 20 }}>
                Digite a descrição: 
                </Header>
                <Form.TextArea placeholder='Descrição' value={activity.description} name='description' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }}/>
                <Header as='h4' inverted style={{ color: 'grey', fontSize: 15,  marginTop:20, marginLeft: 20  }}>
                    Digite a categoria (culture, drinks, film, food, music, travel):
                </Header>
                <Form.Input placeholder='Categoria' value={activity.category} name='category' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }}/>
                <Header as='h4' inverted style={{ color: 'grey', fontSize: 15,  marginTop:20, marginLeft: 20  }}>
                    Selecione a data:
                </Header>
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }}/>
                <Header as='h4' inverted style={{ color: 'grey', fontSize: 15,  marginTop:20, marginLeft: 20  }}>
                    Digite o nome da cidade:
                </Header>
                <Form.Input placeholder='Cidade' value={activity.city} name='city' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }}/>
                <Header as='h4' inverted style={{ color: 'grey', fontSize: 15,  marginTop:20, marginLeft: 20  }}>
                    Digite o endereço:
                </Header>
                <Form.Input placeholder='Local' value={activity.venue} name='venue' onChange={handleInputChange} style={{ marginLeft: 20, width: 1050 }}/>
                <Button loading={loading} floated='right' positive type='submit' content='Enviar' />
                <Button as={Link} to='/activities' floated='right' type='button' content='Cancelar' />
            </Form>
        </Segment>
    )
})