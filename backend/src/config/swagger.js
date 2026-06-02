import swaggerJsdoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MindCare API",
            version: "1.0.0",
            description: "Dokumentasi REST API MindCare"
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "API Server"
            },
            {
                url: "https://capstone-project-mindcare.vercel.app/api",
                description: "Production"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [{ bearerAuth: [] }]
    },
    apis: [path.resolve(__dirname, "../docs/*.yaml")], // ← path absolut
};

export default swaggerJsdoc(options);