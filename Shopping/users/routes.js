import * as dao from "./dao.js";

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {
    const id = req.params.id;
    const user = await dao.findUserById(id);
    res.json(user);
  };
  const findUserByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findUserByUsername(username);
    res.json(user);
  };
  const updateUser = async (req, res) => {
    const id = req.params.id;
    const status = await dao.updateUser(id, req.body);
    const currentUser = await dao.findUserById(id);
    // console.log(req.session);
    req.session['currentUser'] = currentUser; 
    res.json(status);
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (!currentUser) {
      // User not found or password incorrect
      return res.status(401).json({ message: "Invalid username or password" });
  }
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };

  const account = async (req, res) => {
    res.json(req.session['currentUser']);
  };

  const findAllUsernames = async (req, res) => {
    const users = await dao.findAllUsers();
    // Adjust here to include the role in the response
    const userProfiles = users.map(user => ({
        id: user._id, 
        username: user.username, 
        role: user.role // Include the role
    }));
    res.json(userProfiles);
  };

  const findUserProfileById = async (req, res) => {
    const id = req.params.id;
    const user = await dao.findUserById(id);
    if (user) {
      const userProfile = { username: user.username, role: user.role, email: user.email };
      res.json(userProfile);
    } else {
      res.status(404).send('User not found');
    }
  };
  

  const getCurrentUserId = (req, res) => {
    if (req.session['currentUser']) {
        res.json({ userId: req.session['currentUser'].id });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
  };

  app.get("/api/users", findAllUsers);
  app.get("/api/users/:id", findUserById);
  app.get("/api/users/username/:username", findUserByUsername);
  app.put("/api/users/:id", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users", createUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", account);
  app.get("/api/profiles", findAllUsernames);
  app.get("/api/profiles/:id", findUserProfileById);
  app.get("/api/users/current-user-id", getCurrentUserId);
  app.get("/api/users/:userId/liked-items", async (req, res) => {
    try {
        const userId = req.params.userId;
        const items = await dao.findLikedItemsByUser(userId);
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
  });
  app.get("/api/items/seller/:sellerId", async (req, res) => {
    try {
        const sellerId = req.params.sellerId;
        const items = await dao.findItemsBySeller(sellerId);
        res.json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
}
export default UserRoutes;