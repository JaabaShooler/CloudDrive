const Router = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('config')
const router = new Router()
const authMiddleware = require('../Middleware/auth.middleware')
const FileService = require('../Services/FileService');
const File = require('../Models/File');



router.post('/registration', async (req, res)=> {
        try{
            console.log(req.body)

            const {nickname, password} = req.body;
            if((nickname.length < 3 || nickname.length >= 12) || (password.length < 3 || password.length >= 12)){
                return res.status(400).json({messsage: "Incorrect login or password"})
            }

            const candidate = await User.findOne({nickname});

            if(candidate){
                return res.status(400).json({message: `User with nickname - ${nickname} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 7);
            const user = new User({nickname, password: hashPassword})
            await user.save();
            await FileService.createDir(new File({user: user._id, name: ''}))
            return res.status(201).json('User has been created')

        }catch (e){
            console.log(e)
            res.send({message: "Server error", error: e})
        }
})

router.post('/login', async (req, res)=> {
    try{
        const {nickname, password} = req.body;
        const user = await User.findOne({nickname});
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password);
        if(!isPassValid){
            return res.status(400).json({message: "Incorrect password"});
        }

        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: '1h'})

        return res.status(202).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                discSpace: user.discSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
            }
        })

    }catch (e){
        console.log(e)
        res.send({message: "Server error"})
    }
})


router.get('/auth', authMiddleware,
    async (req, res)=> {
    try{
        // console.log(req);
        const user = await User.findOne({_id: req.user.id});

        const token = jwt.sign({id: user._id}, config.get("secretKey"), {expiresIn: '1h'})

        return res.status(202).json({
            token,
            user: {
                id: user.id,
                nickname: user.nickname,
                discSpace: user.discSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
            }
        })
    }catch (e){
        console.log(e)
        res.send({message: "Server error"})
    }
})


module.exports = router