/**
 * Get string html segment about the not support prompt.
 * @param content The prompt message.
 * @returns The string html segment prompt the browser is not supported.
 */
export default function getNotSupportPromptHTML(content: string): string {
  return `<p style="text-align: center; font-weight: bold; color: red;">${content}</p>`;
}
