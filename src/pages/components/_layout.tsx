import React, { FC } from 'react';
import { BackTop, Space, Input, Divider } from 'antd';
import Logo from '@/pages/components/logo';
import { useParams } from 'umi';
import './_layout.css';

const { Search } = Input;

const TopNav: FC<any> = ({ hiddenSearch }) => {
  const { search } = useParams();

  return (
    <div className="nav-border">
      <Space align="start" size={20}>
        <Logo style={{ fontSize: '30px', marginTop: '14px' }} />
        <p style={{ fontSize: '20px' }}>BT Tool</p>
      </Space>

      {!hiddenSearch && (
        <div className="right-border">
          <Search
            placeholder="搜索你想搜索的任何资源"
            onSearch={value => {
              if (value) window.location.href = `/search/${value}`;
            }}
            enterButton
            defaultValue={search ? search : ''}
          />
        </div>
      )}
    </div>
  );
};

const Footer: FC = () => (
  <div className="footer">
    <a href="http://beian.miit.gov.cn/" target="_blank">
      浙ICP备18036473号-2
    </a>
    <p>
      ©{new Date().getFullYear()} 彼岸花网 All rights reserved.
      <Divider type="vertical" />
      <a href="http://jx.sanqii.cn" target="_blank">
        涂叶解析
      </a>
      <Divider type="vertical" />
      <a href="http://blog.sanqii.cn" target="_blank">
        博客
      </a>
    </p>
  </div>
);

const page: FC<any> = ({ children, hiddenSearch }) => {
  return (
    <>
      <TopNav hiddenSearch={hiddenSearch} />
      <div className="body-content">{children}</div>
      <Footer />
      <BackTop />
    </>
  );
};

export default page;
