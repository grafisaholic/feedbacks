import markdownit from 'markdown-it';

const md = new markdownit();

export async function renderMarkdown(content: string) {
  return md.render(content);
}
