"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const formation_routes_1 = __importDefault(require("./routes/formation.routes"));
const tutorial_routes_1 = __importDefault(require("./routes/tutorial.routes"));
const cours_routes_1 = __importDefault(require("./routes/cours.routes"));
const certificat_routes_1 = __importDefault(require("./routes/certificat.routes"));
const user_routes_1 = __importDefault(require("./infrastructure/routes/user.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const progress_routes_1 = __importDefault(require("./infrastructure/routes/progress.routes"));
const upload_routes_1 = __importDefault(require("./infrastructure/routes/upload.routes"));
const commentaire_routes_1 = __importDefault(require("./infrastructure/routes/commentaire.routes"));
const reponseCommentaire_routes_1 = __importDefault(require("./infrastructure/routes/reponseCommentaire.routes"));
const statistique_routes_1 = __importDefault(require("./routes/statistique.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'access-control-allow-origin'],
}));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 // 1h
    }
}));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use('/api/v1/stats', statistique_routes_1.default);
// app.use('/api/v1/users', userRoutes);
app.use('/api/v1/formations', formation_routes_1.default);
app.use('/api/v1/tutorials', tutorial_routes_1.default);
app.use('/api/v1/cours', cours_routes_1.default);
app.use('/api/v1/certificats', certificat_routes_1.default);
app.use('/api/v1/uploads', upload_routes_1.default);
// Route From Infrastructure
app.use('/api/v1/commentaires', commentaire_routes_1.default);
// Route From Infrastructure
app.use('/api/v1/reponseCommentaires', reponseCommentaire_routes_1.default);
// Pregess Route
app.use('/api/v1/progress', progress_routes_1.default);
// Statistique Route
// Route From Infrastructure
app.use('/api/v1/users', user_routes_1.default);
app.use(error_middleware_1.errorHandler);
exports.default = app;
