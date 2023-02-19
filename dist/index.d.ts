type AppReturnType = ReturnType<typeof App>;
declare class App {
    private static _instance;
    private _app;
    private constructor();
    static get instance(): App;
    get app(): AppReturnType;
}
export default App;
