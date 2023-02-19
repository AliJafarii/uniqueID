"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("react");
function App() {
    const [generatedId, setGeneratedId] = (0, react_2.useState)(null);
    async function handleCreateDocument() {
        const query = prompt("Enter a query:");
        const response = await fetch(`/v1?query=${query}`);
        const data = await response.json();
        setGeneratedId(data.generatedId);
    }
    async function handleGetLastGeneratedId() {
        const query = prompt("Enter a query:");
        const response = await fetch(`/v1/lastid?query=${query}`);
        const data = await response.json();
        setGeneratedId(data);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: handleCreateDocument }, "Create Document"),
        react_1.default.createElement("button", { onClick: handleGetLastGeneratedId }, "Get Last Generated ID"),
        react_1.default.createElement("div", null,
            "Generated ID: ",
            generatedId)));
}
exports.default = App;
//# sourceMappingURL=App.js.map