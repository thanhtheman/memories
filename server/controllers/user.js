import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signIn = async (res, req) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doens't exist!" });
        }
        const ifPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!ifPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const jwtToken = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1 hour"});

        res.status(200).json({ result: existingUser, jwtToken});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

export const signUp = async (res, req) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "You already had an account!" });
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match. Please check!" })
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const jwtToken = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "1 hour"});

        res.status(200).json({ result, jwtToken});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}