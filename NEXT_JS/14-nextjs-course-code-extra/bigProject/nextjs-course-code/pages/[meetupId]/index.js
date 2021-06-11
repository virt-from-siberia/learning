import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU'
        }
        title={'First meetup'}
        address={'Some street 5, Some City'}
        description={'The meetup description'}
      />
    </>
  )
}

export default MeetupDetails
