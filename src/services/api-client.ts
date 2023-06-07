import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiClient = axios.create({
  baseURL: '',
  params: {

  }
});


export default apiClient;
