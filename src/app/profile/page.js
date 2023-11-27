'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function ProfilePage() {
  
  const session = useSession()
  const [userName, setUserName] = useState('')
  const { status } = session
  
  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name)
    }

  }, [status, session])

  if (status === 'loading') {
    return 'Loading...'
  }
  if (status === 'unauthenticated') {
    return redirect('/login')
  }
  async function handleProfileInfoUpdate(e) {
    e.preventDefault()
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName })
    })
    console.log(response)
  }

  return (
    <div className="my-8">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Profile
      </h1>
      <form className='max-w-lg mx-auto'>
        <div className='flex gap-2 items-center'>
          <div>
            <div className='bg-gray-200 p-2 rounded-lg'>
            <Image className='rounded-lg ml-3 pb-2' src={'/Yonas Feshaye.jpg'} width={80} height={80} alt={'avator'}/>
            <button type='button' className='text-sm'>Change Avator</button>
            </div>
          </div>
          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input type='text' placeholder='First and last name'
            value={userName} onChange={(e) => setUserName(e.target.value)}
            />
            <input type='email' disabled={true} value={session.data.user.email}/>
            <button type='submit'>Save</button>
          </form>
         
        </div>
      </form>
    </div>
  )
}
