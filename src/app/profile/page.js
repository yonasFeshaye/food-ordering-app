'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
export default function ProfilePage() {
  const session = useSession()
  const { status } = session
  console.log(session)
  if (status === 'loading') {
    return 'Loading...'
  }
  if (status === 'unauthenticated') {
    return redirect('/login')
  }
  const userImage = session.data.user.image

  return (
    <section className="my-8 ">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Profile
      </h1>
      <form className='max-w-xs mx-auto border'>
        <div>
            {userImage && <Image src={userImage} width={64} height={64} alt={'avator'}/>}
        </div>
      </form>
    </section>
  )
}
