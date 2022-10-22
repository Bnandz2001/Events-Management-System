const logout = (req,res) => {
    res.clearCookie('logUser')
    res.send('done')
}
module.exports = logout