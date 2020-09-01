import request from '@/pages/components/request';

interface getListData {
  key: string;
  pageNum: number;
}

interface getDetailData {
  hash: string;
}

//搜索列表
export async function getList(params: getListData) {
  return request('/getlist', { params });
}

//详情
export async function getDetail(params: getDetailData) {
  return request('/detail', { params });
}

//记录
export async function doIp() {
  return request('/Recordip');
}

export { getListData };
