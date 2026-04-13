const models = require("../models");

const AllowedPlans = new Set(["free", "basic", "premium", "premium+"]);

const purchase = async (req, res) => {
  try {
    const session = req.session.account;
    if (!session || !session._id) {
      return res.status(401).json({ error: "You must be logged in to purchase a subscription" });
    }

    const { plan, cycle } = req.body;
    if (!plan || !cycle) return res.status(400).json({ error: "Plan and cycle are required" });

    if (!AllowedPlans.has(plan) || plan === "free") {
      return res.status(400).json({ error: "Invalid subscription plan" });
    }

    // Just update the account plan since we dont collect any payment information
    const updated = await models.Account.findByIdAndUpdate(
      session._id,
      { $set: { plan } },
      { new: true },
    ).exec();

    if (!updated) {
      return res.status(404).json({ error: "Account not found" });
    }

    req.session.account = models.Account.toAPI(updated);
    return res.json({
      plan: updated.plan,
      cycle: cycle || null,
      session: req.session.account,
    });
  } catch {
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  purchase,
};
