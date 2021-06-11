// import { useRouter } from 'next/router'
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails(props) {
  const { image, title, address, description } =
    props.meetupData

  return (
    <>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: 'meetupId',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU',

        title: 'First meetup',
        address: 'Some street 5, Some City',
        description: 'The meetup description',
      },
    },
  }
}

export default MeetupDetails
