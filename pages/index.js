import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
    const usersReq = await axios.get('http://localhost:8080/api/users');
    return {
        props: {
            users: usersReq.data,
        },
    };
}

function HomePage({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.username}`} passHref>
                        {user.username}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default HomePage;