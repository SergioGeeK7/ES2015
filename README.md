git init 
git commit tag "01"
git remote add origin https://github.com/afnarqui/es2015.git
git push -u origin master
git push origin v1.5
npm init --yes

npm install --save-dev babel
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015
babel-node index.js --presets es2015

git checkout nametags
git tag -a "nametag" -m "message"
git push origin --tags 

git branch es5
git checkout es5

npm 
npmjs.com
package manager for 
semver semantic versioning 
1 major no es compatible con las versiones anteriores
2 minor funcionalidad que se agrega pero es compatible con las versiones anteriores 
3 patch se incrementa cuando se arreglan bugs manteniendo compatibilidad con las versiones anteriores
npm install --save jquery
^ --> significa que trae la última versión compatible 
browserify.org --> permite requerir módulos
npm install --save-dev browserify
npm run build-js
babeljs.io
npm install --save-dev babelify babel-preset-es2015
