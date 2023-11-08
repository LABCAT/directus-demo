module.exports = function registerHook({ action }, { services, env, exceptions }) {
    action('items.create', async ({ key, collection, payload }, { database, schema, accountability }) => {
        console.log(collection);
    });
};
