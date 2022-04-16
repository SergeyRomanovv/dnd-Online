let users = [];

const addUser = ({ id, user, room }) => {
  console.log('service' ,users);
  user = user.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!user || !room) {
    return { error: "name and room required" };
  }

  if (users.length) {
    const data = users.find((e) => e.user === user && e.room === room);

    if (data) {
      return { error: "user already exist" };
    }
  }

  const response = { id, user, room };

  users.push(response);


  return { response };
};

const getRoomUsers = (room) => {
  return users.filter(e => e.room === room);
};

const getUser = (id) => {
  return users.find(e => e.id == id);
};

const removeUser = (id) => {
  const findIdx = users.findIndex(e => e.id == id);

  if (findIdx >= 0) {
      return users.splice(findIdx, 1)[0];
  }
};

module.exports = {addUser, getRoomUsers, getUser, removeUser};
