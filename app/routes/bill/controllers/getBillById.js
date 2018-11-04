export default (req, res) => {
    // console.log('Connection', connection)
    res.json({ msg: `${req.params.id}` })
}
