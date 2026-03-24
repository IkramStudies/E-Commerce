import User from "../model/User.model";

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
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "User could not be created",
    });
  }
};
