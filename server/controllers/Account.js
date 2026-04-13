const models = require("../models");
const Account = models.Account;

const loginPage = (req, res) => {
  return res.render("login");
};

const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  return Account.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: "Wrong username or password" });
    }

    req.session.account = Account.toAPI(account);
    return res.json({ redirect: "/" });
  });
};

const signup = async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  if (!username || !password || !repeatPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== repeatPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const hash = await Account.generateHash(password);
    const newAccount = new Account({ username, password: hash });
    await newAccount.save();
    req.session.account = Account.toAPI(newAccount);
    return res.json({ redirect: "/" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Username already in use" });
    }

    if (err.name === "ValidationError" && err.errors) {
      const first = Object.values(err.errors)[0];
      return res.status(400).json({
        error: first?.message ?? err.message,
      });
    }

    return res.status(500).json({ error: "An error occurred" });
  }
};

const getSession = (req, res) => {
  return res.json(req.session.account || null);
};

module.exports = {
  loginPage,
  logout,
  login,
  signup,
  getSession,
};
