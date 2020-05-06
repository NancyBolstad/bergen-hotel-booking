export const mockImageURL =
  'https://images.unsplash.com/photo-1584088634200-52239888d599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80';

export function createImagesList(length: number): string[] {
  let createImagesList: string[] = [];
  let i: number;
  for (i = 0; i < length; i++) {
    createImagesList.push(mockImageURL);
  }

  return createImagesList;
}

export const mockImageObject = {
  url:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  alt: 'Foo',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export function createList(item: any, length: number): any[] {
  let list: any[] = [];
  let i: number;
  for (i = 0; i < length; i++) {
    list.push(item);
  }

  return list;
}
