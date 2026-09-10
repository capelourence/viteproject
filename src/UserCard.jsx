function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <div className="user-info">
        <h2>{user.name}</h2>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>

        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserCard;