import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export type Language = 'en' | 'zh-CN';
export const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: 'en', setLanguage: () => {} });

const zh: Record<string, string> = {
  'Bunny': '兔兔', 'Math': '数学', 'Bunny Math 🐰': '兔兔数学 🐰',
  'What shall we practice?': '今天练点什么？',
  'Add & take away': '加减法', 'Adding and taking away, up to 3 digits': '从简单加减，到三位数计算',
  'All four': '加减乘除', 'Times tables and dividing too': '一起练习乘法和除法',
  "Pick a level and let's hop to it!": '选个难度，和兔兔一起出发！',
  'Warm-up': '热热身', 'Big + small': '轻松加减', 'Tricky ones': '进位与退位',
  'Double digits': '两位数', 'Hundreds': '三位数', 'Super sums': '计算小高手',
  'First tables': '乘法初体验', 'More tables': '更多乘法', 'All tables': '乘法小能手', 'Big times': '两位数乘除',
  'Within 20': '20 以内', 'No carrying': '不进位、不退位', 'Carry and borrow': '进位加法与退位减法',
  'Two-digit numbers': '两位数加减', 'Three-digit numbers': '三位数加减', 'Lots of carrying': '连续进位与退位',
  'Tables of 2, 5 and 10': '2、5、10 的乘除法', 'Tables up to 5': '5 以内的乘法口诀',
  'Tables up to 10': '10 以内的乘法口诀', 'Two-digit times and divide': '两位数乘除一位数',
  'Questions': '题数', 'Level': '难度', 'Start!': '开始！',
  'Turn sound off': '关闭声音', 'Turn sound on': '打开声音', 'Print a worksheet': '打印练习卷',
  'Sticker book': '贴纸本', 'What to practice': '练习内容',
  'Find the missing number!': '填上缺少的数！', 'Pick the answer!': '选出正确答案！',
  'Bigger, smaller, or the same?': '比一比：大、小，还是相等？',
  'Add them up!': '加起来是多少？', 'Take away!': '减一减，还剩多少？', 'Times!': '乘一乘！', 'Share it out!': '分一分！',
  'You can do it!': '你一定可以！', 'Take your time!': '慢慢想，不着急！', "Let's hop to it!": '一起加油吧！',
  'Think hard!': '开动小脑筋！', 'I believe in you!': '兔兔相信你！',
  'Yes!': '答对啦！', 'Great job!': '做得真棒！', 'You got it!': '你做到了！', 'Super!': '太棒啦！', 'Hoppy-tastic!': '兔兔为你欢呼！',
  'Hmm…': '再想一想…', 'Again!': '再练一次！', 'One more try!': '再来试一试！',
  '💡 Show me how': '💡 兔兔教你', 'Delete': '退格', 'Clear': '清空', 'Check': '检查',
  'smaller than': '小于', 'the same as': '等于', 'bigger than': '大于', 'smaller': '小于', 'same': '等于', 'bigger': '大于',
  'See my stars!': '看看我的星星！', 'Next': '下一题', 'So close!': '差一点点！', 'Have one more go.': '再试一次吧。',
  'Try again': '再试一次', "Let's look at how it works.": '一起看看怎么算。', "We'll try it again at the end.": '最后我们再练一次。',
  'Stop quiz': '结束练习', 'Stop the quiz?': '要结束练习吗？', "Your answers so far won't be saved.": '这一轮还没完成，答案不会保存。',
  'Stop': '结束', 'Keep going': '继续练习', '🧱 Blocks': '🧱 积木图解', '✏️ Columns': '✏️ 竖式计算',
  'Show it with': '讲解方式', 'Close': '关闭', '◀ Back': '◀ 返回', 'Next ▶': '下一步 ▶', 'Got it!': '明白啦！',
  'Amazing!': '太厉害啦！', 'Good try!': '继续加油！', 'Home': '首页',
  'Your answers': '我的答题情况', 'Tap one to see how': '点题号看讲解', '⭐ Super!': '⭐ 真棒！', '🌱 Practice more': '🌱 再练一练',
  'New sticker!': '获得新贴纸！', "It's in your sticker book now.": '已经放进你的贴纸本啦。',
  'Try the next level ▶': '挑战下一关 ▶', 'Play again': '再玩一轮',
  'Adding to 20': '20 以内加法', 'Taking away to 20': '20 以内减法', 'Adding': '加法', 'Taking away': '减法',
  'Carrying a ten': '进位加法', 'Breaking a ten': '退位减法', 'Times': '乘法', 'Dividing': '除法',
  'Back': '返回', 'My sticker book': '我的贴纸本', 'sticker': '贴纸', 'not found yet': '还没收集到',
  'Pages': '页数', '🔄 New questions': '🔄 换一组题', '🖨️ Print': '🖨️ 打印',
  'Name: ____________________': '姓名：____________________', 'Date: ____________': '日期：____________', 'Answers': '参考答案',
  'How many now?': '现在一共有多少？', 'How many are left?': '还剩多少？', 'How many cookies?': '一共有多少块饼干？',
  'How many flowers?': '一共有多少朵花？', 'How many carrots?': '一共吃了多少根胡萝卜？',
  'How many sweets?': '一共有多少颗糖？', 'How many each?': '每人分到多少？', 'How many boxes?': '需要多少个盒子？',
  'How many tanks?': '需要多少个鱼缸？', 'How many in each?': '每束有多少朵？',
  'Circle *10 ones*…': '圈出 *10 个一*…', '…they turn into *1 ten*!': '…合起来就是 *1 个十*！',
  'Circle *10 tens*…': '圈出 *10 个十*…', '…they turn into *1 hundred*!': '…合起来就是 *1 个百*！',
  'Break *1 hundred* into *10 tens*!': '把 *1 个百*换成 *10 个十*！', 'Now take *1 ten*…': '再拿出 *1 个十*…',
  'Break *1 ten* into *10 ones*!': '把 *1 个十*换成 *10 个一*！',
  'Stack them up: *ones under ones*.': '把数字排好：*个位对齐个位*。', 'Missing number? *Turn it around!*': '缺少一个数？试试*倒过来算*！',
};

// Complete sentences keep generated numbers and highlighted parts intact.
const templates: Record<string, string> = {
  'Practicing: {0}. Change': '正在练习：{0}。切换', 'Best: {0} stars': '最好成绩：{0} 颗星',
  'Question {0} of {1}': '第 {0} 题，共 {1} 题', 'Step {0} of {1}': '第 {0} 步，共 {1} 步', 'How to solve {0}': '如何计算 {0}',
  'The answer is {0}': '答案是 {0}', '{0} out of {1}': '答对 {0} 题，共 {1} 题', '{0} of 3 stars': '获得 {0} 颗星，满分 3 颗',
  'Question {0}: right': '第 {0} 题：答对了', 'Question {0}: needs practice': '第 {0} 题：再练一练',
  '{0} of {1} stickers · finish a quiz to get one': '已收集 {0} / {1} 张贴纸 · 完成一轮就能获得一张',
  ' · Page {0} of {1}': ' · 第 {0} 页，共 {1} 页', 'Page {0}': '第 {0} 页',
  '{0} fish in the tank. {1} more swim in.': '鱼缸里有 {0} 条鱼，又游来了 {1} 条。',
  '{0} flowers in the garden. {1} more grow.': '花园里有 {0} 朵花，又开了 {1} 朵。',
  '{0} cookies in the jar. You bake {1} more.': '罐子里有 {0} 块饼干，你又烤了 {1} 块。',
  'You have {0} stickers. You get {1} more.': '你有 {0} 张贴纸，又得到了 {1} 张。',
  '{0} ladybugs on a leaf. {1} more land.': '叶子上有 {0} 只瓢虫，又飞来了 {1} 只。',
  '{0} strawberries in a bowl. You eat {1}.': '碗里有 {0} 颗草莓，你吃掉了 {1} 颗。',
  '{0} balloons at the party. {1} go pop!': '派对上有 {0} 个气球，破了 {1} 个！',
  '{0} birds in a tree. {1} fly away.': '树上有 {0} 只小鸟，飞走了 {1} 只。',
  '{0} cupcakes on a plate. Friends eat {1}.': '盘子里有 {0} 个纸杯蛋糕，朋友们吃掉了 {1} 个。',
  '{0} butterflies in the garden. {1} fly off.': '花园里有 {0} 只蝴蝶，飞走了 {1} 只。',
  '{0} plates with {1} cookies on each.': '有 {0} 个盘子，每个盘子放了 {1} 块饼干。',
  '{0} pots with {1} flowers in each.': '有 {0} 个花盆，每盆开了 {1} 朵花。',
  '{0} bunnies each eat {1} carrots.': '有 {0} 只兔兔，每只吃了 {1} 根胡萝卜。',
  '{0} bags with {1} sweets in each.': '有 {0} 个袋子，每袋装了 {1} 颗糖。',
  '{0} strawberries shared by {1} friends.': '{0} 颗草莓，平均分给 {1} 位小朋友。',
  '{0} cupcakes go in boxes of {1}.': '有 {0} 个纸杯蛋糕，每 {1} 个装一盒。',
  '{0} fish, with {1} in each tank.': '有 {0} 条鱼，每个鱼缸放 {1} 条。',
  '{0} flowers in {1} equal bunches.': '把 {0} 朵花，平均分成 {1} 束。',
  'Make *{0}* and *{1}* with blocks.': '用积木摆出 *{0}* 和 *{1}*。',
  'Put them together: *{0}* ones.': '合在一起，有 *{0}* 个一。',
  'Put the ones together: *{0}*': '先把个位加起来：*{0}*',
  'Now the tens: *{0}*': '再算十位：*{0}*', 'Now the hundreds: *{0}*': '再算百位：*{0}*',
  'Count them: *{0}*!': '数一数，一共 *{0}*！', 'Start with *{0}*.': '先摆出 *{0}*。',
  'Take away {0} ones? There are only *{1}*, and no tens!': '要减去 {0} 个一？这里只有 *{1}* 个一，十位还是 0！',
  'Take away {0} ones? There are only *{1}*!': '要减去 {0} 个一？这里只有 *{1}* 个一！',
  'Take away {0} tens? There are only *{1}*!': '要减去 {0} 个十？这里只有 *{1}* 个十！',
  'Take away *{0}*.': '拿走 *{0}*。', '{0} left. That\'s *{1}*!': '还剩 {0}，就是 *{1}*！', '*{0}* left!': '还剩 *{0}*！',
  '*{0} × {1}* means *{2} rows* of *{3}*.': '*{0} × {1}* 表示 *{2} 排*，每排 *{3}* 个。',
  'Count by {0}s: {1}': '每次加 {0}：{1}',
  '{0} × {1} means *{2} groups* of *{3}*.': '{0} × {1} 表示 *{2} 组*，每组 *{3}* 个。',
  '{0} lots of *{1} tens* is *{2} tens*.': '{0} 组 *{1} 个十*，就是 *{2} 个十*。',
  'Split *{0}* into tens and ones.': '把 *{0}* 拆成整十数和个位数。',
  '{0} lots of {1}: *{2}*': '{0} 个 {1}，就是 *{2}*', 'That\'s *{0}*!': '就是 *{0}*！',
  '*{0} ÷ {1}*: how many *{2}s* make {3}?': '*{0} ÷ {1}*：{3} 里面有几个 *{2}*？',
  'Make rows of {0}: {1}': '每排放 {0} 个：{1}',
  'That\'s *{0} rows*. {1} ÷ {2} = *{3}*': '一共 *{0} 排*。{1} ÷ {2} = *{3}*',
  'Share *{0}* into *{1}* equal groups.': '把 *{0}* 平均分成 *{1}* 组。',
  'Split {0} into parts that are easy to share.': '把 {0} 拆成容易平均分的两部分。',
  '{0} is easy to share!': '{0} 可以直接平均分！', 'Each group gets *{0}*…': '每组先分到 *{0}* 个…',
  '…and *{0}* more.': '…再分到 *{0}* 个。', '{0} in each group.': '每组有 {0} 个。',
  'Put *{0}* on top and *{1}* under it.': '把 *{0}* 写在上面，*{1}* 写在下面。',
  'How many *{0}s* in *{1}*? Start on the left.': '*{1}* 里面有几个 *{0}*？从左边开始算。',
  '{0} is less than {1}, so look at *{2}*.': '{0} 比 {1} 小，所以看前两位组成的 *{2}*。',
  '{0} ÷ {1}: *{2}*. Write {3} on top.': '{0} ÷ {1}：*{2}*。在上面写 {3}。',
  '{0}. Bring down the {1}: *{2}*.': '{0}。把下一位 {1} 落下来，得到 *{2}*。',
  '{0}. Nothing left over!': '{0}。正好分完，没有余数！',
  'The missing number is *{0}*!': '缺少的数就是 *{0}*！',
  '*{0}* is smaller than *{1}*.': '*{0}* 小于 *{1}*。', '*{0}* is bigger than *{1}*.': '*{0}* 大于 *{1}*。',
  '*{0}* is the same as *{1}*.': '*{0}* 等于 *{1}*。',
};

const rules = Object.entries(templates).map(([source, target]) => {
  const parts = source.split(/(\{\d+\})/);
  const keys: string[] = [];
  const pattern = parts.map(part => {
    if (/^\{\d+\}$/.test(part)) { keys.push(part); return '(.+?)'; }
    return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('');
  return { pattern: new RegExp(`^${pattern}$`), target, keys };
});

function placeWords(text: string): string {
  return text.replace(/(\d+) hundreds?/g, '$1 个百').replace(/(\d+) tens?/g, '$1 个十').replace(/(\d+) ones?/g, '$1 个一').replace(/(个[百十一]), /g, '$1、').replace(/ and /g, '和');
}

export function translate(text: string, language: Language): string {
  if (language === 'en') return text;
  if (zh[text]) return zh[text];
  for (const rule of rules) {
    const match = text.match(rule.pattern);
    if (match) return placeWords(rule.target.replace(/\{\d+\}/g, key => {
      const value = match[rule.keys.indexOf(key) + 1];
      return zh[value] ?? value;
    }));
  }
  // Column captions combine a place, an equation, and a short instruction.
  return placeWords(text)
    .replace(/Ones:/g, '个位：').replace(/Tens:/g, '十位：').replace(/Hundreds:/g, '百位：')
    .replace(/Write (\d+), carry (\d+)\./g, '写 $1，向前一位进 $2。')
    .replace(/Write (\d+)\./g, '写 $1。')
    .replace(/too small again! Borrow 1:/g, '又不够减了！向前一位借 1：')
    .replace(/Too small! Borrow 1 from next door:/g, '不够减！向前一位借 1：')
    .replace(/the dot means 1 less\./g, '小圆点表示这一位已被借走 1。')
    .replace(/nothing to take away\. Write \*(\d+)\*\./g, '这一位不用减，写 *$1*。')
    .replace(/ No 0 at the front\./g, '最前面的 0 不用写。');
}

export function useI18n() {
  const context = useContext(LanguageContext);
  return { ...context, t: (text: string) => translate(text, context.language) };
}

export function LanguageButton() {
  const { language, setLanguage } = useI18n();
  return <button class="puffy language-btn" aria-label={language === 'en' ? 'Switch to Chinese' : '切换到英文'} onClick={() => setLanguage(language === 'en' ? 'zh-CN' : 'en')}>{language === 'en' ? '中文' : 'English'}</button>;
}
