# get emcc in path
source ~/bin/emsdk_portable/emsdk_env.sh 

# compile to js
emcc test.c              \
  --memory-init-file 0   \
  -s EXPORT_ALL=1        \
  -s LINKABLE=1          \
  -o out.js

# run
node index.js