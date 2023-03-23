const router = require("express").Router();
const User = require("../models/User");

// ユーザ情報の更新
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const loginuser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("ユーザ情報が更新されました")
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json("あなたは自分のアカウントのときだけ更新できます");
    }
    
})

// ユーザ情報の削除

// ユーザ情報の取得

module.exports = router;