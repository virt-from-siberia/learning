import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

export async function getServerSideProps(
  context
) {
  const req = context.req
  const res = context.res

  console.log(res)

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 3600,
//   }
// }

export default HomePage

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU',
    address: 'Some address 5, Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU',
    address: 'Some address 10, Some City',
    description: 'This is a second meetup',
  },
]
