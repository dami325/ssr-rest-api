const users = [
  { id: 1, username: "박주닮"},
  { id: 2, username: "ParkJuDalm"},
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else {
    res.status(405).end(); // 405 Method Not Allowed
  }
}