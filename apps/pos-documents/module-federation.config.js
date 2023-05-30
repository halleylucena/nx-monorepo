module.exports = {
  name: 'pos-documents',
  exposes: {
    './ButtonDesktop': './src/app/components/ButtonDesktop.tsx',
    './ButtonMobile': './src/app/components/ButtonMobile.tsx',
    './Documents': './src/app/pages/DocumentsPage.tsx',
    './DocumentDetail': './src/app/pages/DocumentDetailPage.tsx',
    './DocumentDetailOptions': './src/app/components/DocumentDetailOptions.tsx',
    './DocumentFilter': './src/app/components/Filter.tsx',
  },
};
