import User from "../model/User.model.js";

export const registerUser = async (req, res) => {
  try {
    // req.body = {name: "Inaam", email: "inaamwani123@gmail.com", password: "1234abcd",confirmPassword: "1234abcd" }
    const { name, email, password, confirmPassword } = req.body;
    // const {name: "Inaam", email: "inaamwani123@gmail.com", password: "1234abcd",confirmPassword: "1234abcd" }
    // 1. Check all required fields
    if (!name || !email || !password || !confirmPassword) {
      // if (!name || !email || !password || !confirmPassword)
      // if (!('Inaam') || !("inaamwani123@gmail.com" || !("1234abcd") || !("1234abcd"))
      // if (!true || !true || !true || !true )
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // 2. Check password match
    if (password !== confirmPassword) {
      // if ('1234abcd' != '1234abcd') , false
      return res.status(400).json({
        status: false,
        message: "Passwords do not match",
      });
    }

    // 3. Check if user already exists
    const existingUser = await User.findOne({ email });
    // const existingUser = await User.findOne({email});
    if (existingUser) {
      // if (null), false
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    // 4. Create new user (DO NOT include confirmPassword)
    const newUser = new User({
      name,
      email,
      password,
    });
    // newUser = new User({
    //  name,
    //  email,
    //  password
    // newUser =
    // 5. Save to DB
    await newUser.save();
    // 6. Send response (avoid sending password ideally)
    res.status(201).json({
      status: true,
      message: "Registration successful",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server error",
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
  catch (error) {
    res.status(201).json({
      status: false,
      message: "Server error",
      error: error.message
    })
  }
  }
*/
