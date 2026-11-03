import { describe, expect, it } from 'vitest';
import { explain } from './explain';
import { generateQuiz, LEVELS } from './generator';
import { translate } from './i18n';

describe('Chinese and English', () => {
  it('keeps the original English wording and generated numbers', () => {
    expect(translate('Start!', 'en')).toBe('Start!');
    expect(translate('12 fish in the tank. 8 more swim in.', 'en')).toBe('12 fish in the tank. 8 more swim in.');
    expect(translate('12 fish in the tank. 8 more swim in.', 'zh-CN')).toBe('鱼缸里有 12 条鱼，又游来了 8 条。');
    expect(translate('Ones: *8 + 4 = 12*. Write 2, carry 1.', 'zh-CN')).toBe('个位： *8 + 4 = 12*. 写 2，向前一位进 1。');
  });

  it('translates every generated story and both explanation styles across all levels', () => {
    const untranslated = new Set<string>();
    for (const level of LEVELS) {
      for (let seed = 1; seed <= 40; seed++) {
        const questions = generateQuiz({ level: level.id, count: 20, seed });
        for (const q of questions) {
          const text = q.kind === 'story' ? [q.story.text, q.story.ask] : [];
          for (const style of ['blocks', 'column'] as const) {
            for (const step of explain(q, style)) {
              text.push(step.caption);
              if (step.scene.type === 'text') text.push(...step.scene.lines);
            }
          }
          for (const source of text) {
            const translated = translate(source, 'zh-CN');
            if (/[a-z]/i.test(translated)) untranslated.add(`${source} => ${translated}`);
            expect(translated.match(/\*/g)?.length ?? 0).toBe(source.match(/\*/g)?.length ?? 0);
          }
        }
      }
    }
    expect([...untranslated]).toEqual([]);
  });
});
