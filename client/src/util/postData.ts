import { API_ERROR_MESSAGE } from './constants';

export interface PostConfig {
  endpoint: 'contact' | 'establishments' | 'enquiries';
  data?: Object;
}

async function postData(config: PostConfig): Promise<Response> {
  const url: string = `${process.env.REACT_APP_API_URL}${config.endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config.data),
  });

  if (response.status === 404) {
    throw new Error(API_ERROR_MESSAGE.notFound);
  } else if (response.status === 500) {
    throw new Error(API_ERROR_MESSAGE.serverProblem);
  }

  return response;
}

export default postData;
