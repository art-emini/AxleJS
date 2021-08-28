echo "Compiling"
tsc
echo "Compiled"
echo "Bundling"
npm run bundle
echo "Bundled"
echo "Minifying"
npm run minify
echo "Minified"
echo "Done"
