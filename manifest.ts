import packageJson from './package.json';

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/pages/options/index.html',
  background: { service_worker: 'src/pages/background/index.js' },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'lens32.png',
  },
  icons: {
    '512': 'lens.png',
    '256': 'lens256.png',
    '128': 'lens128.png',
    '64': 'lens64.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      css: ['assets/css/contentStyle.chunk.css'],
    },
  ],
  permissions: ['activeTab'],
  host_permissions: ['<all_urls>'],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'lens*.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
