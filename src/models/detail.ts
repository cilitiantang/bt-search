import { getDetail } from '@/services/main';

export default {
  namespace: 'detail',
  state: {
    data: {},
  },
  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      const res = yield call(getDetail, payload);
      yield put({
        type: 'save',
        payload: res,
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
