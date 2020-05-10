export interface Headers {
  [key: string]: string;
}

export interface RequestData {
  [key: string]: any;
}

export interface ApiOpts {
  endpoint: 'contact' | 'establishment' | 'enquiry';
  data?: Object;
}

async function postData<T>(opts: ApiOpts): Promise<Response> {
  const url: string = `${process.env.REACT_APP_API_URL}${opts.endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(opts.data),
  });

  if (response.status === 404) {
    throw new Error('pageNotFound');
  } else if (response.status === 500) {
    throw new Error('internalServerError');
  } else if (!response.status.toString().startsWith('2')) {
    throw await response.json();
  }

  return response;
}

export default postData;
