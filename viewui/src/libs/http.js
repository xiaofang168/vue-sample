import axios from 'axios';
import { Message} from 'view-design';
// import { getUrl } from './utils';

const responseSuccess = (response) => {
    return response.status === 200 ? response.data : {
        desc: response.desc
    };
};

const responseError = (e) => {
    return {
        desc: 'network error'
    };
};

const request = async(url, method, data) => {
    try {
        let request_config = {
            method: method,
            url: url,
            withCredentials: true,
            headers: {
                'content-type': 'application/json'
            }
        };

        if (data) {
            request_config.data = data;
        }

        let response = await axios(request_config);
        return responseSuccess(response);
    } catch (e) {
        return responseError(e);
    }
};

axios.interceptors.response.use(
    response => {
        if (response.data.status === 1020) {
            return response;
        }
        if (response.data.status === 1005) {
            console.log('response.data.data', response.data.data);
            setTimeout(() => {
                window.location.href = response.data.data;
            }, 1000);    
            return;
            
        }
        if (response.data.status !== 1000) {
            Message.error(`注意：${response.data.desc}`);
        }

        return response;
    },
    error => {
        if (error.response.status === 401) {
            console.log('logout');
        }
        if (error.response.status === 500) {
            Message.error('服务端错误'); 
        }
        return Promise.reject(error);
    }
);

export default {
    get(url) {
        return request(url, 'get');
    },
    put(url, data) {
        return request(url, 'put', data);
    },
    post(url, data) {
        return request(url, 'post', data);
    },
    delete(url) {
        return request(url, 'delete');
    }
};