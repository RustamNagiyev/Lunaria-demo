export type NavPage = 'ana-sehife' | 'xidmetler' | 'paketler' | 'layiheler' | 'haqqimizda' | 'elaqe';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  area: string;
  type: 'rezidensiya' | 'dupleks' | 'villa' | 'iqametgah';
  location: string;
  imageUrl: string;
  altText: string;
  description?: string;
  details?: string[];
}
