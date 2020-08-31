import { getList } from '@/services/main';

export default {
  namespace: 'search',
  state: {
    data: [],
    pageNum: 1,
    total: 0,
  },
  effects: {
    *fetchList({ payload }: any, { call, put }: any) {
      const res = yield call(getList, payload);
      yield put({
        type: 'save',
        payload: { ...res, pageNum: payload.pageNum },
      });
    },
  },
  reducers: {
    save: (state: any, { payload }: any) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
