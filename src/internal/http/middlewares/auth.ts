import { Request, Response, NextFunction } from 'express';

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // You need to make sure its more secure
  try {
    // Check for secret header
    const secretHeader = req.get("Codex-Web3");
    
    // If the secret header is not correct, stop the request and send Forbidden response
    if (secretHeader !== "b77759141fc85bf31e75b1d9c48bbe67") {
      res.status(403).json({ message: "Forbidden!" });  // Return here to stop further processing
      return;
    }

    // // If session_id cookie is missing, send Unauthorized response
    // const sessionID = req?.cookies?.session_id;
    // if (!sessionID) {
    //   res.status(401).json({ message: "Unauthorized" });  // Return here to stop further processing
    //   return ;
    // }

    // Everything is good, so call the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    res.status(500).json({ message: "Internal Server Error" });  // Return here to stop further processing
    return ;
  }
};

export default authMiddleware;
