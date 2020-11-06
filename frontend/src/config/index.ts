import appJson from './app.json';

export function getNameApp(): string {
  return appJson.name;
}
export function getHostApi(): string {
  return appJson.hostApi;
}

export function getDisplayNameApp(): string {
  return appJson.displayName;
}
export function getNamePathLocalStorageApp(complement?: string): string {
  return complement ? `@${appJson.name}/${complement}` : `@${appJson.name}`;
}
