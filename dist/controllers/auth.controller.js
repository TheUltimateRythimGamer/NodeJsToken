"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingUp = (req, res) => {
    console.log(req.body);
    res.send('Sign Up');
};
exports.SingIn = (req, res) => {
    res.send('Sign In');
};
exports.ViewProfile = (req, res) => {
    res.send('Profile');
};
//# sourceMappingURL=auth.controller.js.map