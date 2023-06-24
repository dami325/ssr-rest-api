export default function handler(req, res) {
  const { username } = req.query;
  const users = [
      { id: 1, username: "박주닮"},
      { id: 2, username: "ParkJuDalm"},
  ];
  const user = users.find((user) => user.username === username);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}