import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
await build({configFile:false,plugins:[react()],build:{outDir:'dist-lab',target:'esnext'}});
const html = (await readFile('dist-lab/index.html','utf8')).replace(/<title>.*?<\/title>/, '<title>Lance Li — Design Lab</title>').replace('</head>','<meta name="robots" content="noindex, nofollow"></head>');
for(const route of ['design-lab','design-lab/editorial','design-lab/systems','design-lab/cinematic','design-lab/minimal']){
 await mkdir('dist-lab/'+route,{recursive:true}); await writeFile('dist-lab/'+route+'/index.html',html);
}
console.log('Design Lab production build: five directly accessible routes in dist-lab.');
