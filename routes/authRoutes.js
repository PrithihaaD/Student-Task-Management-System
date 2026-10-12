const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// POST - User Registration
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: "student"
});

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
// POST - Register Multiple Users
router.post("/register-many", async (req, res) => {
    try {
        const users = req.body;

        const createdUsers = [];

        for (const userData of users) {
            const existingUser = await User.findOne({
                email: userData.email
            });

           if (existingUser) {
                continue;
            }

            if (!userData.name || !userData.email || !userData.password) {
                return res.status(400).json({
                message: "Missing name, email, or password",
                user: userData
            });
        }

        const hashedPassword = await bcrypt.hash(
            userData.password,
            10
        );

            const user = await User.create({
                name: userData.name,
                email: userData.email,
                password: hashedPassword,
                role: "student"
            });

            createdUsers.push({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            });
        }

        res.status(201).json({
            message: "Users registered successfully",
            users: createdUsers
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
// POST - User Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Check password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Create JWT token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// GET - Protected User Profile
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;