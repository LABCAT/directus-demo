export default function registerHook({ action }, { services, env, exceptions }) {
    action('items.create', async ({ key, collection, payload }, { database, schema, accountability }) => {
        console.log(collection);
        console.log(payload);
    });
};
