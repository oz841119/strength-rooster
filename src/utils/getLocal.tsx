export default function(acceptLanguage: string | null) {
  if(typeof acceptLanguage === 'string') {
    const languages = acceptLanguage.split(',');
    const preferredLanguage = languages[0].split(';')[0];
    return preferredLanguage;
  }
  return ''
}