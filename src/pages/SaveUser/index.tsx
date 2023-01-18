import { useEffect, useState } from "react";
import { usersService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
//import { createSemanticDiagnosticsBuilderProgram } from "typescript";

const SaveUser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  // los useState son: se usa el set para
  

  const [ifError, setIfError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); 
  // pedir explicación de UseParams


useEffect(()=>{
  
    if (id) {
      usersService.get(id).then(rta =>{
        setName(rta.name);
        setLastname(rta.lastname);
        setEmail(rta.email);
        setPassword(rta.password);
        // setBirthDate(rta.birthDate);
      });
      
  };
},[])


// si pongo el arreglo vacío se ejecuta una sola vez cuando cargo el componente. si le paso un 
// parametro al arreglo (estado) se va a ejecutar cuando ese estado. sin el arreglo de dependencias se genera un lop infinito

  // if (id && name === "" &&  === "")

  const enviarFormulario = async (e: any) => {
    e.preventDefault();

    setIfError(false);

    let rta;
    if (id) {
      rta = await usersService.update({ id, name, lastname,email, birthDate: new Date(birthDate), password });
          } else {
      rta = await usersService.add({ name, lastname, birthDate: new Date(birthDate), email, password });
    }

    if (rta) {
      navigate("/users");
    } else {
      setIfError(true);
    }
  };




  return (
    <form onSubmit={enviarFormulario}>
      <div className="mb-3">
        <label htmlFor="name-control">Nombre</label>
        <input
          type="text"
          name="name"
          id="name-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname-control">Apellido</label>
        <input
          type="text"
          name="lastname"
          id="lastname-control"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email-control">Email</label>
        <input
          type="email"
          name="email"
          id="email-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password-control">Password</label>
        <input
          type="password"
          name="password"
          id="lastname-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname-control">Fecha de nacimiento</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>

      {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
    </form>
  );
};
export { SaveUser };
