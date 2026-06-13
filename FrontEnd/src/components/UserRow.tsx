type UserRowProps = {
  user: any;
  onDelete: (id: number) => void;
};

function UserRow({ user, onDelete }: UserRowProps) {
  return (
    
    <tr>
      <td>{user.firstName}</td>
      <td>{user.company?.name}</td>
      <td>{user.company?.title}</td>
      <td>{user.address?.country}</td>

      <td>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
