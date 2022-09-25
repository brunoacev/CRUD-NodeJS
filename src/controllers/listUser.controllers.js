import listUserService from "../services/listUser.services";

const listUserController = (request, response) => {
    const userList = listUserService();
    return response.json(userList);
};

export default listUserController;
