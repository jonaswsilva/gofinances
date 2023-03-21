import React from "react";

import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,

} from './styles';

interface Props {
    tilte: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({ type, tilte, amount, lastTransaction } : Props){
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{ tilte }</Title>
                <Icon name={icon[type]} type={type} /> 
            </Header>

            <Footer>
                <Amount type={type}>{ amount }</Amount>
                <LastTransaction type={type}>
                    { lastTransaction }
                </LastTransaction>
            </Footer>
        </Container>
    )
}