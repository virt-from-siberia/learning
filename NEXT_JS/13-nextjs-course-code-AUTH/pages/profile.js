import { getSession } from 'next-auth/client'
import UserProfile from '../components/profile/user-profile'

function ProfilePage() {
  return <UserProfile />
}

export async function getServerSideProps(
  context
) {
  console.log(context.req)
  const session = await getSession({
    req: context.req,
  })

  if (!session) {
    return {
      notFound: false,
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session: session,
    },
  }
}

export default ProfilePage
