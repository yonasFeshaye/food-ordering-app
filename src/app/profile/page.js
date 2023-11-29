'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function ProfilePage() { 
  const session = useSession()
  const [userName, setUserName] = useState('')
  const [image, setImage] = useState('')
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
      setImage(session.data.user.image)
      fetch('/api/profile').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }
    
        return response.json()
        }).then(data => {
          if (
            data &&
            data.phone &&
            data.streetAddress && 
            data.zip &&
            data.city &&
            data.state &&
            data.country
          ) { 
            setPhone(data.phone)
            setStreetAddress(data.streetAddress)
            setZip(data.zip)
            setCity(data.city)
            setState(data.state)
            setCountry(data.country)
          } else {
            console.log('Invalid response format from /api/profile')
          }
        }).catch(error => {
          console.error('Error fetching profile data', error)
        })
      
      }  
  }, [status, session])

  async function handleProfileInfoUpdate(ev) {
  ev.preventDefault();

  const savingPromise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userName,
          image,
          phone,
          streetAddress,
          zip,
          city,
          state,
          country,
        }),
      });

      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    } catch (error) {
      console.error('Error during profile update:', error);
      reject(error); // You can reject with the error object for more details
    }
  });

  // Now you can use the savingPromise
  savingPromise
    .then(() => {
      // Handle successful save
      console.log('Profile updated successfully');
    })
    .catch(() => {
      // Handle failed save
      console.error('Failed to update profile');
    });
}

function handleFileChange(ev) {
  const file = ev.target.files;

  if (file?.length) {
    const data = new FormData();
    data.set('file', file[0]);

    const uploadPromise = fetch('/api/upload', {
      method: 'POST',
      body: data,
    })
      .then(response => {
        if (response.ok) {
          return response.json().then(link => {
            setImage(link);
          });
        }
        throw new Error('Network response was not ok.');
      })
      .catch(error => {
        console.error('Error during file upload:', error);
        // Handle the error appropriately
      });
  }
}

// Check status and return appropriate content
if (status === 'loading') {
  return 'Loading';
}
if (status === 'unauthenticated') {
  return redirect('/login');
}

  // const userImage = session.data.user.image
  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Profile
      </h1>
      <div className='max-w-md mx-auto'>
        <div className='flex gap-2'>
          <div>
            <div className='p-2 rounded-lg relative'>
            <Image className='rounded-lg mt-3 mb-2' src={'/Yonas Feshaye.jpg'} width={120}height={120} alt={'avator'}/>
             {/* {image && (<Image className='rounded-lg mt-3 mb-2' src={'/Yonas Feshaye.jpg'} width={120} height={120} alt={'avator'}/>)} */}
            
            <label>
              <input type='file' className='hidden' onChange={handleFileChange}/>
              <span className='block border border-gray-300 rounded-lg p-2 text-center cursor-pointer'>Edit</span>
            </label>
            </div>
          </div>
          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <label>First and Last Name</label>
            <input type='text' placeholder='First and last name'
            value={userName} onChange={(ev) => setUserName(ev.target.value)}
            />
            <label>Email</label>
            <input type='email' disabled={true} value={session.data && session.data.user && session.data.user.email}/>
            <label>Phone Number</label>
            <input type='tel' placeholder='Phone number'
            value={phone} onChange={ev => setPhone(ev.target.value)}/>
            <label>Address</label>
            <input type='text' placeholder='Street Address'
            value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}/>
            
            <div className='flex gap-2'>
            <div>
              <label>Zip Code</label>
            <input type='text' placeholder='Zip'
            value={zip} onChange={ev => setZip(ev.target.value)}/>
            </div>
            <div>
              <label>City</label>
            <input type='text' placeholder='City'
            value={city} onChange={ev => setCity(ev.target.value)}/>
            </div>
            
            </div>
             <div className='flex gap-2'>
              <div>
                 <label>State</label> 
            <input type='text' placeholder='State'
            value={state} onChange={ev => setState(ev.target.value)}/>

              </div>
             
            <div>
               <label>Country</label>
            <input type='text' placeholder='Country'
            value={country} onChange={ev => setCountry(ev.target.value)}/>
            </div>
           
            </div>
            <button type='submit'>Save</button>
          </form>
          </div>  
      </div>
    </section>
  )
}