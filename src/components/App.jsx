import Container from './Container/Container';
import Section from './Section/Section';

import Profile from './profile/Profile';
import user from './profile/user.json';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json';

import FriendsList from './friendsList/FriendsList';
import friends from './friendsList/friends.json';

import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json'


export const App = () => {
  return (
    <Container>
      <Section>
        <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats = {user.stats}
          />
      </Section>
      <Section>
      <Statistics
        title={data.title}
        stats={data.stats}
        />
      </Section>
      <Section>
        <FriendsList
          friends={friends}
        />
      </Section>
      <Section>
        <TransactionHistory
          items={transactions}
        />
      </Section>
  </Container>
  );
}


/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
