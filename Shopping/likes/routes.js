import * as dao from "./dao.js";

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {
        const likes = await dao.findAllLikes();
        res.json(likes);
    }
    const createUserLikesItem = async (req, res) => {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        const likes = await dao.createUserLikesItem(userId, itemId);
        res.json(likes);
    };
    const deleteUserLikesItem = async (req, res) => {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        const likes = await dao.deleteUserLikesItem(userId, itemId);
        res.json(likes);
    };
    const findUsersThatLikeItem = async (req, res) => {
        const itemId = req.params.itemId;
        const likes = await dao.findUsersThatLikeItem(itemId);
        res.json(likes);
    };
    const findItemsThatUserLikes = async (req, res) => {
        const userId = req.params.userId;
        const likes = await dao.findItemsThatUserLikes(userId);
        res.json(likes);
    };
    // const findSellersOfItemsLikedByUser = async (req, res) => {
    //     const userId = req.params.userId;
    //     const sellers = await dao.findSellersOfItemsLikedByUser(userId);
    //     res.json(sellers);
    // };

    app.get("/api/users/:userId/liked-items", async (req, res) => {
        try {
            const userId = req.params.userId;
            const likedItems = await dao.findItemsThatUserLikes(userId);
            res.json(likedItems);
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    });    

    app.get("/api/shopping/items/:itemId/like", findAllLikes);
    app.post("/api/shopping/items/:itemId/like/:userId", createUserLikesItem);
    app.delete("/api/shopping/items/:itemId/like/:userId", deleteUserLikesItem);
    app.get("/api/shopping/items/like/:itemId", findUsersThatLikeItem);
    app.get("/api/shopping/items/like/:userId", findItemsThatUserLikes);
    // app.get("/api/shopping/users/:userId/liked-items-sellers", findSellersOfItemsLikedByUser);
}

export default LikesRoutes;