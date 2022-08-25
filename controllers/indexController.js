//For Register Page
const indexView = (req, res) => {
    res.render("index", {
    });
}
// For View 
const lfView = (req, res) => {

    res.render("lf", {
    });
}

const spView = (req, res) => {

    res.render("sp", {
    });
}

const aptbView = (req, res) => {

    res.render("aptb", {
    });
}

const appaymentView = (req, res) => {

    res.render("appayment", {
    });
}

module.exports = {
    indexView,
    lfView,
    spView,
    aptbView,
    appaymentView
};