import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
  console.log(props)
  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://alex:5l3exDU15qo5ECOh@cluster0.qunp1.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection =
    db.collection('meetups')

  const meetups = await meetupsCollection
    .find()
    .toArray()

  client.close()

  console.log(meetups)

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
        image: meetup.image,
      })),
    },
    revalidate: 3600,
  }
}

// export async function getServerSideProps(
//   context
// ) {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

export default HomePage
