import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    User,
    Photo,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    TransactionList,
    Title,
    LogoutButton,
 } from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title:'Desenvolvimento de site',
        amount:'R$ 12.000,00',
        category:{
            name:'Vendas',
            icon:'dollar-sign',
        },
        date:'09/03/2023'
    },
    {
        id: '2',
        type: 'negative',
        title:'Humburguer Pizzy',
        amount:'R$ 59,00',
        category:{
            name:'Alimentação',
            icon:'coffee',
        },
        date:'09/03/2023'
    },
    {
        id: '3',
        type: 'negative',
        title:'Aluguel do apartamento',
        amount:'R$ 12,000',
        category:{
            name:'Casa',
            icon:'shopping-bag',
        },
        date:'09/03/2023'
    }
];
    
    return(
        <Container >
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo 
                        source={{ uri: 'https://avatars.githubusercontent.com/u/17762923?v=4' }}
                        />
                    <User>
                        <UserGreeting>Olá,</ UserGreeting>
                        <UserName>Jonas</UserName>
                    </User>
                </UserInfo>   

                <LogoutButton onPress={() => {}}>
                    <Icon name="power"/>
                </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard type='up' tilte='Entradas' amount='R$ 17,400,00' lastTransaction='ultima entrada dia 13 de abril'/>
                <HighlightCard type='down' tilte='Saídas' amount='R$ 1,259,00' lastTransaction='ultima entrada dia 3 de abril'/>
                <HighlightCard type='total' tilte='Total' amount='R$ 16,141,00' lastTransaction='1 a 16 de abril'/>
               
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}                     
                />
                        
            </Transactions>

        </Container>
    )
}
