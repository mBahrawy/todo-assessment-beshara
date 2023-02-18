import http from "@/core/interceptors/interceptor";
import { AxiosResponse } from "axios";

class HttpService {
  public postRequest =  async <T>(url: string, data: unknown): Promise<AxiosResponse<unknown, unknown> | T> => {
  
    return http
      .post(url, data)
      .then(
        (respose) => {
          return respose.data;
        },
        (error: Error) => {
          return Promise.reject(error);
        }
      );
  };

  public putRequest =  async <T>(url: string, data: unknown): Promise<AxiosResponse<unknown, unknown> | T> => {
    return http
      .put(url, data)
      .then(
        (respose) => {
          return respose.data;
        },
        (error: Error) => {
          return Promise.reject(error);
        }
      );
  };

  public getRequest = async <T>(url: string): Promise<AxiosResponse<unknown, unknown> | T> => {
    return http
      .get(url)
      .then(
        (respose) => {
          return respose.data;
        },
        (error: Error) => {
          return Promise.reject(error);
        }
      );
  };

  public deleteRequest =  async <T>(url: string): Promise<AxiosResponse<unknown, unknown> | T> => {
    return http
      .delete(url)
      .then(
        (respose) => {
          return respose.data;
        },
        (error: Error) => {
          return Promise.reject(error);
        }
      );
  };
}

export default HttpService;
