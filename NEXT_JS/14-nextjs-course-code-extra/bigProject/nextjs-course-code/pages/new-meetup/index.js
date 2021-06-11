import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default NewMeetUpPage;
