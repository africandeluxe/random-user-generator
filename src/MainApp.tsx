import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCard from './components/UserCard';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Loading = styled.p`
  font-size: 1.2rem;
  color: #333333;
`;

const MainApp: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      {loading ? <Loading>Loading...</Loading> : user && <UserCard user={user} />}
      <Button onClick={fetchUser}>Get New User</Button>
    </Container>
  );
};

export default MainApp;