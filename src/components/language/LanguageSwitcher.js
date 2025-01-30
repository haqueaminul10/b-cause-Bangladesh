import { useI18n } from '../../../I18nProvider';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
      className='border  rounded-md'
    >
      <option value='en'>🇬🇧 English</option>
      <option value='jp'>🇯🇵 日本語</option>
    </select>
  );
}
