import { readFileSync } from 'fs'
import { parse } from 'path'

export default {
  watch: ['./**/*.md'],
  load(watchedFiles) {
    // 读取所有md文件
    return watchedFiles.map((file) => {
      const content = readFileSync(file, 'utf-8')
      const { name, dir } = parse(file)
      
      return {
        filename: name,
        path: file,
        content,
        directory: dir.split('/').pop() || ''
      }
    })
  }
}
