import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCard from '../UserCard';

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

interface State {
  user: User | null;
  loading: boolean;
  error: string | null;
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
  const [state, setState] = useState<State>({
    user: null,
    loading: true,
    error: null,
  });

  const fetchUser = async () => {
    setState({ ...state, loading: true, error: null });
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setState({ ...state, user: data.results[0], loading: false });
    } catch (error) {
      setState({ ...state, error: 'Failed to fetch user', loading: false });
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('lastUser');
    if (savedUser) {
      setState({ ...state, user: JSON.parse(savedUser), loading: false });
    } else {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('lastUser', JSON.stringify(state.user));
    }
  }, [state.user]);

  return (
    <Container>
      {state.loading ? <Loading>Loading...</Loading> : state.user && <UserCard user={state.user} />}
      {state.error && <p>{state.error}</p>}
      <Button onClick={fetchUser}>Get New User</Button>
    </Container>
  );
};

export default MainApp;