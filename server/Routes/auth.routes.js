const Router = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const router = new Router()

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
            const hashPassword = await bcrypt.hash(password, 15);
            const user = new User({nickname, hashPassword})
            await user.save();
            return res.status(201).json('User has been created')

        }catch (e){
            console.log(e)
            res.send({message: "Server error"})
        }
})

module.exports = router