'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function ProfilePage() { 
  const session = useSession()
  const [userName, setUserName] = useState('')
  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const { status } = session
  
  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name)
    }
  }, [status, session])
  async function handleProfileInfoUpdate(e) {
    e.preventDefault()
    setSaved(false)
    setIsSaving(true)
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName })
    })
    setIsSaving(false)
    if (response.ok) {
      setSaved(true)
    }
  }
  if (status === 'unauthenticated') {
    return redirect('/login')
  }

  // const userImage = session.data.user.image
  return (
    <div className="my-8">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Profile
      </h1>
      <div className='max-w-md mx-auto'>
        {saved && (<h2 className='text-center bg-green-100 p-4 rounded-lg border border-green-300'>
        Profile saved successfully
      </h2>)}
      {isSaving && (<h2 className='text-center bg-green-100 p-4 rounded-lg border border-green-300'>
        Saving ...
      </h2>)}
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
            <input type='email' disabled={true} value={session.data && session.data.user && session.data.user.email}/>
            <button type='submit'>Save</button>
          </form>  
        </div>
      </div>
    </div>
  )
}
