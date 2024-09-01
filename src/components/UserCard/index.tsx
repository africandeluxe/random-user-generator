import React from 'react';
import styled from 'styled-components';

interface UserProps {
  user: {
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
  };
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1.5rem;
  @media (max-width: 500px) {
    width: 120px;
    height: 120px;
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333333;
`;

const Info = styled.p`
  margin: 0.5rem 0;
  color: #555555;
`;

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <Name>
        {user.name.first} {user.name.last}
      </Name>
      <Info>Email: {user.email}</Info>
      <Info>Phone: {user.phone}</Info>
      <Info>
        Location: {user.location.city}, {user.location.country}
      </Info>
    </Card>
  );
};

export default UserCard;