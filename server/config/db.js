"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSecret = exports.URI = exports.HostName = void 0;
let LOCAL = false;
let HostName, URI;
if (LOCAL) {
    exports.URI = URI = "mongodb://localhost/contacts";
    exports.HostName = HostName = "localhost";
}
else {
    exports.URI = URI = "mongodb+srv://jadenparris:Cupcake$101@cluster0.6neikt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    exports.HostName = HostName = "MongoDB Atlas";
}
exports.SessionSecret = "INFT2202SessionSecret";
//# sourceMappingURL=db.js.map