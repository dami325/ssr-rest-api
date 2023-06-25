import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export async function getServerSideProps({ query }) {
  const { username } = query;

  return {
    props: {
      username
    }
  };
}


function UserPage({ username }) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

  useEffect(() => {

        async function fetchData() {
            const req = await fetch(
                `/api/singleUser?username=${username}`
            );
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

function UserData({ user }) {
  return (
    <div>
      <p>User Primary Key: {user.id}</p>
      <p>User Name: {user.username}</p>
      <p>User Email: {user.email}</p>
    </div>
  );
}

export default UserPage;
