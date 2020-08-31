import React, { FC, useEffect } from 'react';
import { connect } from 'umi';
import Layout from '@/pages/components/_layout';
import { Card, Alert, Breadcrumb, Divider, Pagination, Result } from 'antd';

const namespace: string = 'search';

const page: FC<any> = ({
  loading,
  search: { data, pageNum, total },
  dispatch,
}) => {
  const changePage = (page: any) => {
    dispatch({
      type: `${namespace}/fetchList`,
      payload: {
        key: '上海堡垒',
        pageNum: page,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: `${namespace}/fetchList`,
      payload: {
        key: '上海堡垒',
        pageNum: 1,
      },
    });
  }, []);

  return (
    <Layout>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <Breadcrumb style={{ marginBottom: '15px' }}>
          <Breadcrumb.Item>
            <a href="/">首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>xxxxx</Breadcrumb.Item>
        </Breadcrumb>

        {loading && (
          <>
            <Alert
              message="基于全网搜索，预计最多需要 10s，请您耐心等待 ..."
              type="success"
              style={{ marginBottom: '15px' }}
              showIcon
              closable
            />
            <Card type="inner" bordered loading={loading}></Card>
          </>
        )}

        {!loading && (
          <>
            {data.length === 0 && (
              <Result
                status="404"
                title="哎呀！没有搜索到相关内容呢"
                subTitle="搜点其他的资料吧～"
              />
            )}
            {data.length !== 0 && (
              <>
                <p>
                  共找到了{' '}
                  <b>
                    <a>{total}</a>
                  </b>{' '}
                  个相关结果
                </p>
                <Card type="inner" bordered loading={loading}>
                  {data.map((item: any, index: number) => (
                    <div style={{ color: 'rgba(0,0,0,.6)' }} key={index}>
                      <b>
                        <a
                          style={{ fontSize: '18px' }}
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        />
                      </b>
                      <p style={{ margin: '10px 0', fontWeight: 'bold' }}>
                        文件大小：{item.filesize} <Divider type="vertical" />
                        创建时间：{item.time}
                      </p>
                      {(JSON.parse(item.filelist) || []).map(
                        (e: any, index: number) => (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: e.name }}
                          />
                        ),
                      )}
                      <Divider />
                    </div>
                  ))}

                  <Pagination
                    total={total}
                    pageSize={20}
                    current={pageNum}
                    style={{ width: 'fit-content', margin: '20px auto' }}
                    showSizeChanger={false}
                    onChange={changePage}
                  />
                </Card>
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default connect(({ search, loading }: any) => ({
  search,
  loading: loading.effects[`${namespace}/fetchList`],
}))(page);
