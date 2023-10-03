import { Card, Title, Button, TextInput } from "@tremor/react";
import { useUserActions } from "../hooks/userUsersActions";
import { toast } from "sonner";
export default function CreateNewUser() {
  const { addUser } = useUserActions();


  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const gitHub = formData.get("gitHub");
  
    addUser({ name, email, gitHub });
    toast.success('Usuario creado correctamente')
    form.reset()
  };
  return (
    <Card className="mt-12">
      <Title>Crear Nuevo Usuario</Title>
      <form onSubmit={handleSubmit}>
        <TextInput className="my-6" name="name" placeholder="Nombre" />
        <TextInput className="my-6" name="email" placeholder="Email" />
        <TextInput className="my-6" name="gitHub" placeholder="GitHub" />
        <div>
          <Button type="submit">Añadir Usuario</Button>
        </div>
      </form>
    </Card>
  );
}
