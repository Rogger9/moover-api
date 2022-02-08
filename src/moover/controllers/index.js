const mooverCtrl = {
  get (req, res, next) {
    const { path } = req
    if (path === '/') return res.status(200).send('Welcome to moover-API')
    if (path === '/orders') return res.status(200).json({ message: 'Información de los pedidos recibida desde la API' })
    if (path === '/tracking') return res.status(200).json({ message: 'Información del seguimiento de los pedidos recibida desde la API' })
    next()
  }
}

module.exports = mooverCtrl
