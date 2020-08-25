import request from '@/utils/request';
export function getKeyword(data) {
    return request({
      url: '/getKeyword',
      method: 'post',
      data
    })
}
  
  