import listUserIDService from "../services/listUserID.services";

const listUserIDController = (request, response) => {
    const { id } = request.params;
    const listUserID = listUserIDService(id);
    return response.json(listUserID);
};

export default listUserIDController;
