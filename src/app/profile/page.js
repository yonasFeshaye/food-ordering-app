"use client"

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState({
    name: '',
    image: '',
    phone: '',
    streetAddress: '',
    zip: '',
    city: '',
    state: '',
    country: '',
  });

  useEffect(() => {
    if (status === 'authenticated') {
      setUserData({
        name: session.data.user.name,
        image: session.data.user.image || '',
        phone: '',
        streetAddress: '',
        zip: '',
        city: '',
        state: '',
        country: '',
      });

      fetchProfileData();
    }
  }, [status, session]);

  async function fetchProfileData() {
    try {
      const response = await fetch('/api/profile');

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (
        data &&
        data.phone &&
        data.streetAddress &&
        data.zip &&
        data.city &&
        data.state &&
        data.country
      ) {
        setUserData((prevData) => ({
          ...prevData,
          phone: data.phone,
          streetAddress: data.streetAddress,
          zip: data.zip,
          city: data.city,
          state: data.state,
          country: data.country,
        }));
      } else {
        console.log('Invalid response format from /api/profile');
      }
    } catch (error) {
      console.error('Error fetching profile data', error);
    }
  }

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name,
          phone: userData.phone,
          streetAddress: userData.streetAddress,
          zip: userData.zip,
          city: userData.city,
          state: userData.state,
          country: userData.country,
        }),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  }

  function handleFileChange(ev) {
    const file = ev.target.files;

    if (file?.length) {
      const data = new FormData();
      data.set('file', file[0]);

      fetch('/api/upload', {
        method: 'POST',
        body: data,
      })
        .then(async (response) => {
          if (response.ok) {
            return response.json().then((link) => {
              setUserData((prevData) => ({
                ...prevData,
                image: link,
              }));
            });
          }
          throw new Error('Network response was not ok.');
        })
        .catch((error) => {
          console.error('Error during file upload:', error);
        });
    }
  }

  if (status === 'loading') {
    return 'Loading';
  }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Profile
      </h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-2">
          <div>
            <div className="p-2 rounded-lg relative">
              {userData.image && (
                <Image
                  className="rounded-lg mt-3 mb-2"
                  src={userData.image}
                  width={120}
                  height={120}
                  alt="Avatar"
                />
              )}

              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>First and Last Name</label>
            <input
              type="text"
              placeholder="First and last name"
              value={userData.name}
              onChange={(ev) =>
                setUserData((prevData) => ({
                  ...prevData,
                  name: ev.target.value,
                }))
              }
            />
            <label>Email</label>
            <input
              type="email"
              disabled={true}
              value={session.data?.user?.email || ''}
            />
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={userData.phone}
              onChange={(ev) =>
                setUserData((prevData) => ({
                  ...prevData,
                  phone: ev.target.value,
                }))
              }
            />
            <label>Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={userData.streetAddress}
              onChange={(ev) =>
                setUserData((prevData) => ({
                  ...prevData,
                  streetAddress: ev.target.value,
                }))
              }
            />

            <div className="flex gap-2">
              <div>
                <label>Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip"
                  value={userData.zip}
                  onChange={(ev) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      zip: ev.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={userData.city}
                  onChange={(ev) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      city: ev.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label>State</label>
                <input
                  type="text"
                  placeholder="State"
                  value={userData.state}
                  onChange={(ev) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      state: ev.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  value={userData.country}
                  onChange={(ev) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      country: ev.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
