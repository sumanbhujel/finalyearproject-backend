
const User = require('../models/User');

class UserController {

    async getCurrentUser(request,response) {
        let userId = request.params.id;
        let user = await User.findById(userId);
        if (!user) {
            response.status(404).json({ success: false, message: "User does not exist!" });
        } else {
            response.status(200).json({ success: true, user: user });
        }
    }

}

module.exports = new UserController();