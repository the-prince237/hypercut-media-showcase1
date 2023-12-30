'use client'

import { ChangeEvent, useEffect, useState } from 'react';
import { query, createRecord } from 'thin-backend'
import { useQuery } from 'thin-backend-react'

export default function Home() {
  const rdvs = useQuery(query('rdvs'));
  const [rdvForm, setRdvForm] = useState({email: "", start: "", finish: ""})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRdvForm((r) => ({ ...r, [name]: value }))
  }

  const addRdv = () => {
    setLoading(true);
    createRecord("rdvs", rdvForm)
    .then((data) => console.log({ data }))
    .catch((e) => console.log({ e }))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    console.log({ rdvs })
  }, [rdvs])
  
  // if(rdvs === null) {
  //   return <h1 className='text-white'>Loading Rdvs ...</h1>
  // }

  return  <div className='flex flex-col gap-[100px] items-center'>
    {rdvs && <div className='flex flex-col gap-[20px] items-center'>
      {
        rdvs.map((rdv) => <h2 className='text-green font-bold text-[14px]' key={rdv.id}>{rdv.email}</h2>)
      }
    </div>}
    <div className='flex flex-col gap-[20px]'>
      <input name="email" type="email" onChange={handleChange} value={rdvForm.email} placeholder='your email' />
      <input name="start" type="date" onChange={handleChange} value={rdvForm.start} />
      <input name="finish" type="date" onChange={handleChange} value={rdvForm.finish} />

      {loading ? <h1>Loading ...</h1> : <button onClick={addRdv}>Add rdv</button>}
    </div>
  </div>
}
