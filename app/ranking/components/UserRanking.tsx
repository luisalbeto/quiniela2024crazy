import React from 'react';

const UserRanking = ({ users }) => {
  return (
    <div className="ranking-container">
      <h2>User Ranking</h2>
      <ul className="ranking-list">
        {users.map((user, index) => (
          <li key={user.id} className="ranking-item">
            <span className="position">{index + 1}</span>
            <span className="user-name">{user.name}</span>
            <span className="user-points">{user.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRanking;