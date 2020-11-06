import {getHostApi} from '~/config';

export const converteDataToFromData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'file') {
      formData.append('avatar', data.file.length >= 1 ? data.file[0] : null);
    } else if (key === 'dataNascimento') {
      formData.append(
        'dataNascimento',
        typeof data.dataNascimento === 'object'
          ? data.dataNascimento.toISOString()
          : data.dataNascimento,
      );
    } else {
      formData.append(key, data[key]);
    }
  });
  return formData;
};
export const uriAvatar = (nameAvatar: string | FileList | null) => {
  if (!nameAvatar) {
    return null;
  }
  return `${getHostApi()}/patients/avatars/${nameAvatar}`;
};
