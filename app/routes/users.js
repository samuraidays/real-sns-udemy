const router = require("express").Router();
const User = require("../models/User");

// ユーザ情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const loginuser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("ユーザ情報が更新されました");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res
      .status(403)
      .json("あなたは自分のアカウントのときだけ更新できます");
  }
});

// ユーザ情報の削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const loginuser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザ情報を削除しました");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("該当するユーザ情報が存在しませんでした");
  }
});

// ユーザ情報の取得
router.get("/:id", async (req, res) => {
  try {
    const loginuser = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = loginuser._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json("存在しないユーザです");
  }
});

// ユーザのフォロー
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      // フォロワーに自分がいなかったらフォローできる
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォローに成功しました!");
      } else {
        return res.status(403).json("あなたはすでにフォローしています");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません");
  }
});

module.exports = router;
