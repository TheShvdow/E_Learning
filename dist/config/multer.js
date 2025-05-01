"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("./cloudinary");
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.cloudinary,
    params: async (req, file) => {
        let folder = 'cours';
        const resource_type = file.mimetype.startsWith('video')
            ? 'video'
            : file.mimetype === 'application/pdf'
                ? 'raw'
                : 'image';
        return {
            folder,
            resource_type,
            allowed_formats: ["jpg", "png", "jpeg", 'gif', 'webp', 'mp4', 'avi', 'pdf', 'docx', 'odt', 'pptx', 'xlsx', 'doc', 'md',],
            public_id: `${Date.now()}-${file.originalname}`,
        };
    },
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
