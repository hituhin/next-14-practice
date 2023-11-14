const UserPage = async () => {
  interface User {
    id: number;
    name: string;
  }
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let user: User[] = await res.json();
  return (
    <>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default UserPage;
