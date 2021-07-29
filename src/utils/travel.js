import path from 'path'
export function concatRouter() {
  const modulesFiles = require.context('@/views/activity/travels', false, /\.vue$/);
  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    const filename = path.basename(modulePath, '.vue')
    modules[filename] = value.default
    return modules;
  },[])
  return modules;
}