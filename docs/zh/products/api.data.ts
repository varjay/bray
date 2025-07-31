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
    
    // 从 frontmatter 的 imgs 字段获取图片
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)!;
    const frontmatter = frontmatterMatch[1];
    
    // 匹配imgs字段，支持多种格式
    // 1. 查找imgs:行
    const imgsLine = frontmatter.match(/imgs:\s*(.*)/);
    if (imgsLine) {
        if (imgsLine[1].trim()) {
            // 如果imgs:后面直接跟着内容，可能是单张图片
            images.push(imgsLine[1].trim().replace(/^-/, ''));
        } else {
            // 如果imgs:后面是换行，则查找列表项
            const imgsList = frontmatter.match(/imgs:\s*\n((\s*-\s*.*\n*)+)/);
            if (imgsList && imgsList[1]) {
                // 分割成行并处理每一行
                const lines = imgsList[1].split('\n');
                lines.forEach(line => {
                    const imgPath = line.match(/\s*-\s*(.*)/);
                    if (imgPath && imgPath[1] && imgPath[1].trim()) {
                      images.push(imgPath[1].trim().replace(/^-/, ''));
                    }
                });
            }
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
          url: file.replace(/^docs/, '').replace(/index\.md$/, ''),
          category: content.match(/category: (.*)/)?.[1].split(';') || [],
        }
      })
      .filter((item) => item.images.length > 0)
  }
}
