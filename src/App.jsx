import { ListOfUsers } from "./components/TableOfUser";
import CreateNewUser from "./components/CreateNewUser"
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex flex-col justify-center p-16">
      <h1 className="my-9">Nuestro proyecto con redux</h1>
      <ListOfUsers />
      <CreateNewUser/>
      <Toaster richColors/>
    </div>
  );
}

export default App;
