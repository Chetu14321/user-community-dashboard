const { users } = require("./users.controller");

const communities = [
  { id: 1, name: "Developers Hub", members: [1, 2] }
];

exports.getCommunityById = (req, res) => {
  const community = communities.find(
    c => c.id === Number(req.params.id)
  );

  if (!community) {
    return res.status(404).json({ error: "Community not found" });
  }

  const memberDetails = users.filter(user =>
    community.members.includes(user.id)
  );

  res.json({
    id: community.id,
    name: community.name,
    members: memberDetails
  });
};
