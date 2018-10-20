import connection from '../../database/connect'

export default (req, res) => {
    console.log('Connection', connection)
    res.json({ msg: `${req.params.id}` })
}
