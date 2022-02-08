const invalidPath = (req, res) => res.status(404).json({ error: 404, message: 'Not found' })

module.exports = invalidPath
