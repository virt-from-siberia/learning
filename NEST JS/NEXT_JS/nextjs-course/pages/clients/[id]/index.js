import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The Projects of a Given Client </h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectPage;
