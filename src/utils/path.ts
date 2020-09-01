import path from 'path'

export function getPath(
  localPath: string,
  projectName: string,
) {
  return path.resolve(process.cwd(), localPath, projectName)
}