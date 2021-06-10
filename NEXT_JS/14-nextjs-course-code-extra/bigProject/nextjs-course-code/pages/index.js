import MeetupItem from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU",
    address: "Some address 5, Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E_JKckPXcB2PyudDfACaxIJOaM0A33oZzMcUBVFCa9IR2oJGK7rDIes6ZebapOTNOk0&usqp=CAU",
    address: "Some address 10, Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupItem meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
