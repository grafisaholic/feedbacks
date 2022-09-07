import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

import { renderMarkdown } from 'utils/markdown-to-html';

export async function getContentBySlug(slug: string, fields: string[]) {
  const actualSlug = `${slug}.mdx`;
  const readFile = fs.readFileSync(
    path.join(process.cwd(), '_content', actualSlug)
  );

  const { data, content } = matter(readFile);

  const items: any = {};
  for (const field of fields) {
    if (field == 'content') {
      items[field] = await renderMarkdown(content);
    }

    if (data[field]) {
      items[field] = data[field];
    }
  }

  return items;
}
