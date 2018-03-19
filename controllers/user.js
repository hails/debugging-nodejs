let users = []

const index = (req, res) => {
  res.json(users)
}

const get = (req, res) => {
  const userId = req.params.user_id
  res.json(users[userId] || [])
}

const create = (req, res) => {
  const user = {
    username: req.params.username,
    real_name: req.params.real_name,
    country: req.params.country
  }
  const userId = users.push(user)
  const userResponse = Object.assign(user, { user_id: userId - 1 })

  res.json(userResponse)
}

module.exports = {
  index,
  get,
  create
}
