import Link from 'next/link';
import axios from 'axios';
import React from 'react';

export async function getServerSideProps(ctx) {
    const { username } = ctx.query;
    const userReq = await axios.get(
      `http://localhost:8080/api/${username}`,
      {
        headers: {
          authorization: process.env.API_TOKEN,
        },
      }
    );

    if (userReq.status === 404) {
    	return {
    		notFound: true
    	};
    }

    return {
      props: {
        user: userReq.data,
      },
    };
}

function UserPage({ user }) {
  return (
    <div>
      <p>User Primary Key: {user.id}</p>
      <p>User Name: {user.username}</p>
      <p>User Email: {user.email}</p>
    </div>
  );
}

export default UserPage;
