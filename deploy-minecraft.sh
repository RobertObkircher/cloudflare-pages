
rm pkg/*
cp ../minecraft-clone/pkg/* pkg/
rm pkg/README.md
rm pkg/package.json

cp ../minecraft-clone/index.html minecraft-clone.html
cp ../minecraft-clone/worker.js worker.js

git add .
git commit --amend && git push -f


