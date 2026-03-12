import { User } from "../models/user.models.js"

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!email || !password || !username) {
            console.error(404, { message: "please enter email, passoword and username" });
        };

        //make sure you save the finding things from data bse to put your logic again

        const existedUser = await User.findOne({ email })
        if (existedUser) {
            return res.status(404).json(
                { message: "user already exist" })

        }

        const newUser = await User.create({
            username,
            email,
            password
        })
        res.status(201).json({ newUser })
    } catch (error) {
        console.error(500, {
            message: "something went wrong"
        });

    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter email or password"
            })
        }

        const existedUser = await User.findOne({ email });
        if (!existedUser) {
            return res.status(404).json({
                message: "email not found"
            })
        }
        

        //as we are validating we should find and compare with existedUser
        const validate = await existedUser.isPasswordCorrect(password);
        if (validate) {
            return res.status(201).json({ message: "user found" })
        }
        else{
            return res.status(404).json({ message: "incorrect passwod" })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }



}


export { registerUser, login }