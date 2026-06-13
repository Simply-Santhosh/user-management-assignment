import UserRow from "./UserRow";

type UserTableProps = {
  users: any[];
  onDelete: (id: number) => void;
};

function UserTable({ users, onDelete }: UserTableProps) {
  return (
    <table className="user-table" border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Role</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
