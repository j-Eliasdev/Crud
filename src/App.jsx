import { ListOfUsers } from "./components/tableOfUser";

function App() {
  return (
    <div className="flex flex-col justify-center p-16">
      <h1 className="my-9">Nuestro proyecto con redux</h1>
      <ListOfUsers />
    </div>
  );
}

export default App;
