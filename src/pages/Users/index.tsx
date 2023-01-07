// import { useEffect, useState } from "react";
//import { UsePlaceholderProps } from "react-bootstrap/esm/usePlaceholder";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../../components";
// //import { userService } from "../../services";
// import { User } from "../../types";

const Users = () => {

// const [users, setUsers] = useState<User[]>([]);
//   const [search, setSearch] = useState("");
  
//   const navigate = useNavigate();

// //   const fetchData = () =>
// //     userService.getAll(search).then((data) => setUser(data));

// //   useEffect(() => {
// //     fetchData();
// //   }, [search]);

// //   const borrarUser = async (id: string) => {
// //     await usersService.remove(id);
// //     fetchData();
return(
<div>
      <h1>Estoy en users</h1>

      <hr />
      </div>
)
};

//   return (
    

//       <form action="">
//         <input
//           type="text"
//           name="text"
//           id="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </form>

    //   <hr />

//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>name</th>
//             <th>lastname</th>
//             <th>email</th>
//             <th>password</th>
//             <th>birthdate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((elem) => {
//             return (
//               <tr key={elem.id}>
//                 <td>{elem.id}</td>
//                 <td>{elem.name}</td>
//                 <td>{elem.color}</td>
//                 <td>
//                   <Button
//                     variant="danger"
//                     icon="trash"
//                     handleClick={() => borrarCategoria(elem.id)}
//                   />
//                   <Button
//                     variant="primary"
//                     icon="pencil"
//                     handleClick={() => navigate(`/categories/save/${elem.id}`)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export { Users }
