import request from '@/pages/components/request';

interface getListData {
  key: string;
  pageNum: number;
}

//搜索列表
export async function getList(params: getListData) {
  return request('/getlist', { params });
}

export { getListData };
