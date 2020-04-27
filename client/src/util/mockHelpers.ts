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
