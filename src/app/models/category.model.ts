
export enum AccessType {
  private  = 'private',
  public = 'public'
}

export interface Category {
  id:    number;
  name:  string;
  image: string;
  access?: AccessType;
}
