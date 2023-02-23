const router = require("express").Router()
const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")

router.post("/register", async(req, res) =>{
    const {name, email, password} = req.body
    try {
        
        if(!email || !name || !password){
            return res.status(400).json("All fields requried")
        }

        const emailExist = await User.findOne({email})

        if(emailExist){
            return res.status(400).json("Email Already Exists")
        }

        const newUser = new User({
            name, email, password: bcrypt.hashSync(password, 11)
        })
        
        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
        
       

    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post("/login",async(req, res) =>{
    const {email, password} = req.body



    try {

        if(!email || !password){
            return res.status(400).json("All fields requried")
        }
        
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json("User does not exists")
        }

       const validateUser = bcrypt.compareSync(password, user.password)

       if(!validateUser){
        return res.status(401).json("Wrong user or password")
       }

        // res.status(201).json(user)
       res.status(201).json("Login Successful!")
        
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router