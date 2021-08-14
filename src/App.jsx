import Section from './UI/Section/Section';
import Container from './UI/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Section title="Profile">
        <Container>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Section title="FriendList">
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section title="TransactionHistory">
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
};

export default App;
