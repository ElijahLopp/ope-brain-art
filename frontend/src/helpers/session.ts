export const converteDataToFromData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'file') {
      formData.append('file', data.file.length >= 1 ? data.file[0] : null);
    } else {
      formData.append(key, data[key]);
    }
  });
  return formData;
};
