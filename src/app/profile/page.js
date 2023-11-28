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

  function handleFileChange(e) {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
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
        <div className='flex gap-4 items-center'>
          <div className=''>
            <div className='p-2 rounded-lg relative'>
            <Image className='rounded-lg mt-3 mb-4' src={'/Yonas Feshaye.jpg'} width={120} height={120} alt={'avator'}/>
            
            <label>
               <input type='file' className='hidden' onChange={handleFileChange}/>
              <span className='block border border-gray-300 rounded-lg p-2 text-center cursor-pointer'>Edit</span>
            </label>
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
