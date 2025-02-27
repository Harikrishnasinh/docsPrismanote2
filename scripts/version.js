const fs = require('fs');
const path = require('path');

const [,, docType, version] = process.argv;

const docsPath = path.join(__dirname, `../docs/${docType}`);
const versionedDocsPath = path.join(docsPath, 'versioned_docs', `version-${version}`);
const versionsFile = path.join(docsPath, 'versions.json');

// Ensure versioned_docs folder exists
if (!fs.existsSync(versionedDocsPath)) {
  fs.mkdirSync(versionedDocsPath, { recursive: true });
}

// Copy current docs to versioned_docs
fs.cpSync(path.join(docsPath, 'current'), versionedDocsPath, { recursive: true });

// Update versions.json
let versions = [];
if (fs.existsSync(versionsFile)) {
  versions = JSON.parse(fs.readFileSync(versionsFile));
}

if (!versions.includes(version)) {
  versions.unshift(version);
}

fs.writeFileSync(versionsFile, JSON.stringify(versions, null, 2));

console.log(`✅ Version ${version} created for ${docType}`);
