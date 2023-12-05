import * as dao from "./dao.js";

// let currentUser = null;

function ItemRoutes(app) {


    const findAll = async (req, res) => {
        const items = await dao.findAllItems();
        res.json(items);
    };
    const findById = async (req,res) =>{
        const id = req.params.id;
        const item = await dao.findItemById(id)
        res.json(item)
    }
    // const findUItemById = async (req, res) => {
    //     const id = req.params.id;
    //     const user = await dao.findUserById(id);
    //     res.json(user);
    // };
    // const findByItemName = async (req, res) => {
    //     const username = req.params.username;
    //     const user = await dao.findUserByUsername(username);
    //     res.json(user);
    // };
    // const createItem = async (req, res) => {
    //     const user = await dao.createUser(req.body);
    //     res.json(user);
    // };
    // app.post("/api/users", createUser);
    app.get("/api/shopping", findAll);
    app.get("/api/shopping/item/:id", findById);
    // app.get("/api/users/username/:username", findByUsername);
}


export default ItemRoutes;