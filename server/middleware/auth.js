import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    // Read the cookie from the request
    const token = req.cookies.token;
    // If user doesn't have a token
    if (!token) res.status(401).json({errorMessage: 'Unauthorized'});
    // Verify token, get object with user field that holds the id 
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // req.user is a field we create
    req.user = verified?.user;
    // exits out of the middleware and moves onto handler function 
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({errorMessage: 'Unauthorized'});
  }
}

export default auth;