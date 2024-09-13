const { defineConfig, loadEnv } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.env.REACT_APP_EMAIL_PRIVATE_KEY': JSON.stringify(env.REACT_APP_EMAIL_PRIVATE_KEY),
            'process.env.REACT_APP_EMAIL_PUBLIC_KEY': JSON.stringify(env.REACT_APP_EMAIL_PUBLIC_KEY),
            'process.env.REACT_APP_EMAIL_SERVICE_KEY': JSON.stringify(env.REACT_APP_EMAIL_SERVICE_KEY),
            'process.env.REACT_APP_EMAIL_TEMPLATE_KEY': JSON.stringify(env.REACT_APP_EMAIL_TEMPLATE_KEY),
        },
        base: '/',
        plugins: [react()],
        preview: {
            port: 3000,
            strictPort: true,
        },
        server: {
            port: 3000,
            strictPort: true,
            host: true,
            origin: 'http://0.0.0.0:3000',
        },
        envPrefix: 'REACT_APP_',
    };
});
