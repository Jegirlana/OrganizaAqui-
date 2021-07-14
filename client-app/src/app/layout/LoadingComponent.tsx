import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({inverted = true, content = 'Carregando...'}: Props) {
    return (
        <Dimmer style={{ background:'#bfa6ca' }} active={true} inverted={inverted}>
            <Loader style={{ color:'white' }} content={content} />
        </Dimmer>
    )
}