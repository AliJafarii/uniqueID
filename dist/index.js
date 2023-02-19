"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap().catch(error => console.error(error));
class App {
    constructor() {
        this._app = core_1.NestFactory.create(app_module_1.AppModule);
    }
    static get instance() {
        if (!App._instance) {
            App._instance = new App();
        }
        return App._instance;
    }
    get app() {
        return this._app;
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map