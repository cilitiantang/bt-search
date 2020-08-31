import React, { FC, useEffect } from 'react';
import { connect, useParams } from 'umi';
import { Card, Divider, Alert, Result } from 'antd';
import Layout from './components/_layout';

const namespace = 'detail';

const page: FC<any> = ({ detail: { data }, loading, dispatch }) => {
  const { hash } = useParams();

  useEffect(() => {
    document.title = hash + ' - 种子搜索神器';

    dispatch({
      type: `${namespace}/fetch`,
      payload: { hash: '/hash/' + hash },
    });
  }, []);

  return (
    <Layout>
      <div style={{ width: '90%', margin: '0 auto' }}>
        {loading && <Card loading={loading}></Card>}

        {!loading && (
          <>
            {data.name && (
              <div style={{ marginTop: '30px', color: 'rgba(0,0,0,.6)' }}>
                <h1>{data.name}</h1>

                <Alert
                  message="免责声明"
                  description="本站所有搜索结果均为互联网信息收集整理而成，不储存任何结果。搜索资料仅供交流学习之用，严禁用以非法用途。"
                  type="warning"
                  showIcon
                />
                <p style={{ margin: '30px 0' }}>
                  文件大小：{data.filesize}
                  <Divider type="vertical" />
                  创建时间：{data.time}
                </p>

                <Card title="磁力链接" bordered>
                  <b>
                    <a href={data.bturl}>{data.bturl}</a>
                  </b>
                </Card>
                <Card title="迅雷链接" bordered style={{ margin: '20px 0' }}>
                  <b>
                    <a href={data.xlurl}>{data.xlurl}</a>
                  </b>
                </Card>

                <Card
                  title="文件列表镜像"
                  bordered
                  style={{ margin: '20px 0' }}
                >
                  {(JSON.parse(data.filelist || '[]') || []).map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                    ),
                  )}
                </Card>
              </div>
            )}
            {!data.name && (
              <Result
                status="404"
                title="抱歉，这篇记录不存在呢，是不是地址栏打错了？"
                subTitle="资料很多哦，搜点其他的资料吧～"
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default connect(({ detail, loading }: any) => ({
  detail,
  loading: loading.effects[`${namespace}/fetch`],
}))(page);
