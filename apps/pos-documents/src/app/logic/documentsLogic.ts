import { CapacitorHttp } from '@capacitor/core';

let baseUrl = 'http://vendus-pt/ws/v1.2/documents/';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.vendus.pt/ws/v1.2/documents/';
}

export const getDocsList = async (
  apiKey: string,
  page = 1,
  typesFiltered: string[],
  query = ''
) => {
  const types = typesFiltered.join(',');
  let res: any;

  const options: any = {
    url: `${baseUrl}`,
    params: {
      api_key: apiKey,
      envelope: '1',
      page: page.toString(),
      type: types,
      q: query,
    },
  };
  await CapacitorHttp.get(options)
    .then((response) => (res = response.data))
    .catch((error) => {
      return Promise.reject(new Error(error));
    });

  return res;
};

export const getDocDetail = async (apiKey: string, id: string) => {
  let res: any;

  const options: any = {
    url: `${baseUrl}${id}`,
    params: {
      api_key: apiKey,
    },
  };
  await CapacitorHttp.get(options)
    .then((response) => (res = response.data))
    .catch((error) => {
      return Promise.reject(new Error(error));
    });

  return res;
};

export const downloadPdf = async (
  apiKey: string,
  id: string,
  number: string,
  dismiss: any
) => {
  const options: any = {
    url: `${baseUrl}${id}.pdf`,
    responseType: 'blob',
    params: {
      api_key: apiKey,
    },
  };
  await CapacitorHttp.get(options)
    .then((response) => {
      console.log('response from download: ', response);
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = `${number}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      dismiss();
    })
    .catch((error) => {
      dismiss();
      return Promise.reject(new Error(error));
    });

  dismiss();
};
