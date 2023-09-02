import axios from "axios";
import router from "@/router/index";
import { ElMessage } from "element-plus";

const base_request_url = process.env.NODE_ENV == 'development' ? "/" : "https://api.mtyyzx.com";
// 请求基础 URL
axios.defaults.baseURL = base_request_url;

// POST 请求头
// application/x-www-form-urlencoded
axios.defaults.headers.post["Content-Type"] = "application/json";

// 响应拦截
axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      ElMessage.warning("请求错误");
      setTimeout(() => {
        router.replace({
          path: "/",
        });
      }, 400);
      return response;
    }
  },
  (error) => {
    console.log("请求错误", error);
    if (error.response.status) {
      console.log(error.response);
      switch (error.response.status) {
        case 404:
          ElMessage.warning("接口不存在，请刷新重试");
          break;
        case 500:
          ElMessage.error("服务异常，请稍后刷新重试");
          break;
        case 502:
          ElMessage.error("服务异常，请稍后刷新重试");
          break;
        default:
          ElMessage.warning(error.response.data.message);
          return Promise.reject(error.response);
      }
    }

    return Promise.reject(error);
  }
);

/**
 * 封装 get方法 对应 GET 请求
 * @param {string} url 请求url
 * @param {object} params 查询参数
 * @returns {Promise}
 */
export function get(url: string, params?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * 封装 post 方法，对应 POST 请求
 * @param {string} url 请求url
 * @param {object} data 请求体
 * @param {boolean | undefined} info 请求体是否为 FormData 格式
 * @returns {Promise}
 */
export function post(
  url: string,
  data: any = {},
  info?: Boolean | undefined
): Promise<any> {
  return new Promise((resolve, reject) => {
    let newData = data;
    if (info) {
      //  转formData格式
      newData = new FormData();
      for (let i in data) {
        newData.append(i, data[i]);
      }
    }
    axios
      .post(url, newData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 封装 put 方法，对应 PUT 请求
 * @param {string} url 请求url
 * @param {object} params 请求体
 * @returns {Promise}
 */
export function put(url: string, params: object = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装 axiosDelete 方法，对应 DELETE 请求
 * @param {string} url 请求url
 * @param {object} params 请求体
 * @returns {Promise}
 */
export function axiosDelete(url: string, params: object = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { base_request_url };
