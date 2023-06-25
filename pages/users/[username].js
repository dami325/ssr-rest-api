import Link from 'next/link';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export async function getServerSideProps({query}) {
    const { username } = query;

    return {
      props: {
        username,
        authorization: process.env.API_TOKEN,
      },
    };
}

function UserPage({ username, authorization }) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

  useEffect(() => {

        async function fetchData() {
            const req = await fetch(`http://localhost:8080/api/${username}`,{
                headers: { authorization },
            });
            const reqData = await req.json();

            setLoading(false);
            setData(reqData);
        }

        fetchData();
    }, []);
  return (
    <div>
        <div>
            <Link href="/" passHref>
                Back to home
            </Link>
        </div>
       <hr />
        {loading &&<div>Loading users...</div>}
       {data && <UserData user={data}/>}
    </div>
  );
}

export default UserPage;

function UserData({user}) {
    return (
    <div>
      <p>User Primary Key: {user.id}</p>
      <p>User Name: {user.username}</p>
      <p>User Email: {user.email}</p>
    </div>
    );
}
