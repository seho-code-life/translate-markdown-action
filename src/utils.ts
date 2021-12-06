import replaceAsync from 'string-replace-async';
import translate from '@vitalets/google-translate-api';

export const translateContent = async (
  content: string,
  flag: {
    start: string;
    end: string;
  }
): Promise<string> => {
  const regExp = new RegExp(`^${flag.start}\\n[\\s\\S]*${flag.end}\\n`);
  return await replaceAsync(content, regExp, async (match, name) => {
    try {
      return (await translate(match, { to: 'en', tld: 'cn' })).text;
    } catch (error) {
      console.log(error);
      return match;
    }
  });
};
