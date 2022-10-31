import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  const router = useRouter()

  async function addMeetUpHandler(
    enteredMeetupData
  ) {
    console.log(enteredMeetupData)
    const response = await fetch(
      '/api/new-meetup',
      {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    router.push('/')
  }

  return (
    <NewMeetupForm
      onAddMeetup={addMeetUpHandler}
    />
  )
}

export default NewMeetUpPage
