export interface Content {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'article' | 'video' | 'tweet' | 'post';
  tags: string[];
  createdAt: string;
  collection?: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  count: number;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences?: {
    theme: 'light' | 'dark';
    defaultView: 'grid' | 'list';
  };
}