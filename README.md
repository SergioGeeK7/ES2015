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

