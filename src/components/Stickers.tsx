import { STICKERS } from '../lib/storage';
import { LanguageButton, useI18n } from '../lib/i18n';

export function Stickers({ owned, onBack }: { owned: string[]; onBack: () => void }) {
  const { t } = useI18n();
  return (
    <section class="screen">
      <header class="topbar">
        <button class="puffy icon-btn" aria-label={t('Back')} onClick={onBack}>
          ◀
        </button>
        <span class="spacer" /><LanguageButton />
      </header>
      <div class="book-body">
        <h1 class="book-title">{t('My sticker book')}</h1>
        <p class="book-count">
          {t(`${owned.length} of ${STICKERS.length} stickers · finish a quiz to get one`)}
        </p>
        <div class="book">
          {STICKERS.map((s) =>
            owned.includes(s) ? (
              <div key={s} class="sticker" role="img" aria-label={t('sticker')}>
                {s}
              </div>
            ) : (
              <div key={s} class="sticker empty" aria-label={t('not found yet')}>
                ?
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
