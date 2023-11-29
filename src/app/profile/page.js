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
  const [phone, setPhone] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')


  const { status } = session
  
  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name)
    }
  }, [status, session])

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault()
    setSaved(false)
    setIsSaving(true)

    const savingPromise = new Promise(async(resolve, reject) => {
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name: userName,
        phone,
        streetAddress,
        zip,
        city,
        state,
        country

       })
    })
  })
    setIsSaving(false)
    if (response.ok) {
      setSaved(true)
    }
  }

  function handleFileChange(ev) {
    const file = ev.target.files[0]
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
    <section className="my-8">
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
        <div className='flex gap-2'>
          <div className=''>
            <div className='p-2 rounded-lg relative'>
            <Image className='rounded-lg mt-3 mb-2' src={'/Yonas Feshaye.jpg'} width={120} height={120} alt={'avator'}/>
            
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
            <input type='tel' placeholder='Phone number'
            value={phone} onChange={ev => setPhone(ev.target.value)}/>
            <input type='text' placeholder='Street Address'
            value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}/>
            <div className='flex gap-4'>
            <input type='text' placeholder='Zip'
            value={zip} onChange={ev => setZip(ev.target.value)}/>
            <input type='text' placeholder='City'
            value={city} onChange={ev => setCity(ev.target.value)}/>
            </div>          
            <input type='text' placeholder='State'
            value={state} onChange={ev => setState(ev.target.value)}/>
            <input type='text' placeholder='Country'
            value={country} onChange={ev => setCountry(ev.target.value)}/>
            <button type='submit'>Save</button>
          </form>  
        </div>
      </div>
    </section>
  )
}
