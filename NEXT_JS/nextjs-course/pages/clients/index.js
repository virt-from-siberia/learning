import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "maximilian" },
    { id: "man", name: "manuel" },
    { id: "lol", name: "lololo" },
  ];

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul> 
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
