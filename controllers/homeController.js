const home = (req, res) => {
    res.render('./Home/index');
}

const about = (req, res) => {
    res.render('./Home/about');
}

module.exports =
{
    home,
    about
}