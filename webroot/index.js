function saveCredentials(email, apiKey, zoneId, recordId, dnsName) {
  const credentials = { email, apiKey, zoneId, recordId, dnsName };
  localStorage.setItem('cloudflareCredentials', JSON.stringify(credentials));
}
