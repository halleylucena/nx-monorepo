module.exports = {
    name: 'pos-base',
    exposes: {
        './App': './src/remote-entry.ts',
        './Bootstrap': './src/bootstrap.tsx',
    },
    remotes: ['pos-documents', 'pos-products'],
};
