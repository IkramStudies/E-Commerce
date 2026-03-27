import User from "../model/User.model";
import nodemailer from "nodemailer";
export const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    if (!name || !email || !password || !confirmPassword)
      return res.status(400).json({
        status: false,
        message: "All fields are necesssary",
      });
    if (password != confirmPassword)
      return res.status(400).json({
        status: false,
        message: "Passwords do not match",
      });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    const newUser = new User({
      name,
      email,
      password,
    });
    await User.create(newUser);
    res.status(200).json({
      status: true,
      message: "User created succesfully",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env_USER_EMAIL,
      to: email,
      subject: "OTP for email verification",
      text: "Your otp is 214412, it expires in 5 minutes",
    });
    res.status(200).json({
      status: true,
      message: "User has been registered and OTP has been sent to the email",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "User could not be created",
    });
  }
};

const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = User.findOne({ email });
  try {
    if (!user)
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    if (otp == user.otp && user.otpExpiry > Date.now()) {
      user.isVerified = true;
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();
    }
    res.status(200).json({
      status: true,
      message: "User verified succesfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};
