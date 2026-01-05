import React from "react";

function Profile({ user }) {
  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Profile</h1>
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
