import axios from 'axios';

class APIClient {
  private static instance: APIClient;
  private axiosInstance: any;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://your-django-api-url.com/api',
      timeout: 60000,
    });

    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }

  public get(url: string, config?: any): Promise<any> {
    return this.axiosInstance.get(url, config);
  }

  public post(url: string, data?: any, config?: any): Promise<any> {
    return this.axiosInstance.post(url, data, config);
  }

  public put(url: string, data?: any, config?: any): Promise<any> {
    return this.axiosInstance.put(url, data, config);
  }

  public delete(url: string, config?: any): Promise<any> {
    return this.axiosInstance.delete(url, config);
  }
}

export default APIClient.getInstance();
