import User from "../model/User.model.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // 1. Validate fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // 2. Password length
    if (password.length < 6) {
      return res.status(400).json({
        status: false,
        message: "Password must be at least 6 characters",
      });
    }

    // 3. Password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Passwords do not match",
      });
    }

    // 4. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    // 5. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6. Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    // otp = Math.floor(100000 + Math.random() * 9000000)
    // otp = Math.floor(100000 + 0.5932432 * 900000)
    // otp = Math.floor(100000 + 4500000)
    // otp = Math.floor(55000000)
    // 7. OTP expiry (5 mins)
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    // 8. Create user with OTP
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false,
    });

    await newUser.save();

    // 9. Create transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    /*
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: PROCESS.env.EMAIL_USER,
        pass: PROCESS.env.EMAIL_PASS,
      }
    })
    */
    // 10. Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    // 11. Send response
    res.status(201).json({
      status: true,
      message: "User has registered. OTP sent to email - verify email",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};
export const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(501).json({
        status: false,
        message: "User not found",
      });
    }
    if (user.otp == otp && Date.now() < user.otpExpiry) {
      // 231132 = 231132 && 1441441 < 123211 + 5
      user.isVerified = true;
      user.otp = undefined;
      user.otpExpiry = undefined;
      // save the user
      await user.save();
      return res.status(200).json({
        status: true,
        message: "Email has been verified succesfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "OTP is incorrect, please re enter the OTP",
      error: error.message,
    });
  }
};
/*
export const registerUser = async (req,res) => {
  try {
  const {name, email, password, confirmPassword} = req.body;
  if (!name || !email || !password || !confirmPassword)
    return res.status(400).json({
      status: false,
      message: "All fields are necessary"
  })
  if (password != confirmPasword)
    return res.status(400).json({
    status: false
    message: "Passwords should match"
    })
  const exisingUser = User.findOne({email});
  if (existingUser)
    return res.status(400).json({
    status: false,
    message: 'User already exists'
  })
  const newUser = new User({
  name,email, password})
  await newUser.save()
  res.status(201).json({
    status: true,
    message: "User registered succesfully",
    data: {
      name: newUser.name,
      email: newUser.email
    }
  })
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',

  })
  catch (error) {
    res.status(201).json({
      status: false,
      message: "Server error",
      error: error.message
    })
  }
  }
*/
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({
      status: false,
      message: "User doesn't exist",
    });
  if (!email || !password) {
    res.status(500).json({
      status: false,
      message: "All fields are necessary",
    });
  }
  const isMatching = bcrypt.compare(password, user.password);
  if (isMatching) {
    return res.status(200).json({
      status: true,
      message: "User has given the right password",
    });
  } else
    return res.status(401).json({
      status: false,
      message: "Incorrect password",
    });
};
