'use client'

import { useEffect } from 'react';
import { query } from 'thin-backend'
import { useQuery } from 'thin-backend-react'

export default function Home() {
  const users = useQuery(query('users'));

  useEffect(() => {
    console.log({ users })
  }, [users])
  
  if(users === null) {
    return <h1 className='text-white'>Loading Users ...</h1>
  }

  return <div className='flex flex-col gap-[20px] items-center'>
    {
      users.map((user) => <h2 className='text-green font-bold text-[14px]' key={user.id}>{user.email}</h2>)
    }
  </div>
}
