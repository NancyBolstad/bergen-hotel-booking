export interface Image {
  url: string;
  alt: string;
  caption?: string;
}

export enum AuthResponseCodes {
  Success = 200,
  Fail = 400,
}
