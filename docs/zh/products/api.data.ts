import { readFileSync } from 'fs'
import { parse } from 'path'
const path = require('path');

interface Product {
  title: string
  directory: string
  images: string[]
  url: string
}


export declare const data: Product[]


// Utility function to generate a slug from a string (used for anchor links)
function slugify(text: string): string {
  return (
    text
      // Replace special characters and spaces with hyphens
      .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-')
      // Remove continuous separators
      .replace(/-{2,}/g, '-')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Ensure it doesn't start with a number (e.g. #121)
      .replace(/^(\d)/, '_$1')
      // Convert to lowercase
      .toLowerCase()
  )
}



/**
 * 从markdown内容中提取标题
 */
function extractTitle(content: string, filename: string) {
  if (filename !== 'index.md') {
      // 如果不是index.md，使用文件名（去掉.md扩展名）
      return slugify(path.basename(filename, '.md'));
  }
  
  // 如果是index.md，从内容中提取标题
  const lines = content.split('\n');
  
  // 跳过vitepress frontmatter（YAML格式的元数据）
  let startIndex = 0;
  if (lines[0] === '---') {
      for (let i = 1; i < lines.length; i++) {
          if (lines[i] === '---') {
              startIndex = i + 1;
              break;
          }
      }
  }
  
  // 从非vitepress格式起始处寻找第一个标题或文本
  for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
          // 如果是标题，提取标题内容
          if (line.startsWith('#')) {
              return slugify(line.replace(/^#+\s*/, ''));
          }
          // 如果是普通文本，直接返回
          if (!line.startsWith('<') && !line.startsWith('![')) {
              return slugify(line);
          }
      }
  }
  
  return 'Untitled';
}

/**
 * 从markdown内容中提取图片
 */
function extractImages(content: string): string[] {
    const images: string[] = [];
    
    // 匹配 ![alt](src) 格式的图片
    const markdownImageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    while ((match = markdownImageRegex.exec(content)) !== null) {
        if (match[1]) {
            images.push(match[1]);
        }
    }
    
    // 匹配 HTML img 标签
    const htmlImageRegex = /<img[^>]+src="([^"]+)"/gi;
    while ((match = htmlImageRegex.exec(content)) !== null) {
        if (match[1]) {
            images.push(match[1]);
        }
    }
    
    return images;
}

export default {
  watch: ['../../products/**/*.md'],
  load(watchedFiles) {
    // 读取所有md文件
    return watchedFiles
      .map((file) => {
        const content = readFileSync(file, 'utf-8')
        const { name, dir } = parse(file)
        const images = extractImages(content)
        return {
          title: extractTitle(content, name+'.md').replace(/^bray-/, '').replace(/^博雷-/, ''),
          directory: (dir.split('/').pop() || '').replace(/^\d+-/, '').replace(/^博雷/, '').replace(/^bray博雷/, ''),
          images,
          url: file.replace(/^docs/, '').replace(/\.md$/, '.html'),
        }
      })
      .filter((item) => item.images.length > 0)
  }
}
