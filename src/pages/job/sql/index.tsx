import { PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined, DeleteFilled } from '@ant-design/icons';
import React from 'react';
import { history } from 'umi';
// import type {Option} from 'antd';
import {
  Carousel,
  Button,
  Form,
  Row,
  Col,
  Switch,
  Input,
  Select,
  Table,
  Tooltip,
  Dropdown,
  Menu,
} from 'antd';
import styles from './index.less';
import { useRef, useState } from 'react';
import TextTitle from '../components/title';
import { ColumnsType } from 'antd/es/table';

const goToLink = () => {
  history.push('/job');
};
const Title: React.FC = () => {
  const { location } = history;
  const query = location?.query || {};

  return (
    <div className={styles.title}>
      <ArrowLeftOutlined
        onClick={goToLink}
        className={styles.title_icon}
        style={{ fontSize: 12, color: '#165DFF' }}
      />
      {query?.id ? '修改SQL作业' : '创建SQL作业'}
    </div>
  );
};

interface UserList {
  name: string;
  read: boolean;
  editing: boolean;
}

const SqlCom = () => {
  // const [sliceIndex, setSliceIndex] = useState(0);
  const [userList] = useState<UserList[]>([
    {
      name: '平台管理员',
      read: false,
      editing: false,
    },
    {
      name: 'test-001',
      read: false,
      editing: false,
    },
    {
      name: 'test-002',
      read: false,
      editing: false,
    },
    {
      name: 'test-003',
      read: false,
      editing: false,
    },
    {
      name: 'test-004',
      read: false,
      editing: false,
    },
  ]);
  const [selectData, setSelectData] = useState<UserList[]>([]);
  const carRef = useRef<React.ElementRef<typeof Carousel>>();
  const switchOnChange = () => {};
  const columns: ColumnsType<any> = [
    {
      align: 'center',
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      align: 'center',
      title: '用户/用户组',
      dataIndex: 'name',
      key: 'name',
    },
    {
      align: 'center',
      title: '读权限',
      dataIndex: 'read',
      key: 'read',
      render: (text, record) => {
        return <Switch size={'small'} defaultChecked={record.read} onChange={switchOnChange} />;
      },
    },
    {
      align: 'center',
      title: '编辑权限',
      dataIndex: 'editing',
      key: 'editing',
      render: (text, record) => {
        return <Switch size={'small'} defaultChecked={record.editing} onChange={switchOnChange} />;
      },
    },
    {
      align: 'center',
      title: '操作',
      width: '120px',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record: any) => {
        return (
          <>
            <Tooltip title={'删除'}>
              <span
                style={{
                  display: 'inline-block',
                  width: '22px',
                  height: '22px',
                  background: '#F7FAFF',
                  borderRadius: '2px',
                  marginRight: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => {}}
              >
                <DeleteFilled className="editorspan" style={{ color: '#BDC4CF' }} />
              </span>
            </Tooltip>
          </>
        );
      },
    },
  ];
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const selectOnChange = (value: string[]) => {
    setSelectData(userList.filter((u) => value.includes(u.name)));
  };
  const goSlice = (index: number) => {
    if (carRef.current) {
      if (index === 1) {
        carRef.current.next();
      } else {
        carRef.current.prev();
      }
    }
  };

  const onFinish = () => {};
  const getUserOptions = (data: UserList[]): { label: string; value: string }[] => {
    return data.map((u) => {
      return { label: u.name, value: u.name };
    });
  };
  return (
    <PageContainer className={styles.sql_box} title={<Title />} breadcrumbRender={false}>
      <Carousel ref={carRef} infinite={false} dots={false} afterChange={onChange}>
        <div className={styles.slide}>
          <Form
            name="basic"
            layout={'vertical'}
            // wrapperCol={{span: 16}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row>
              <TextTitle text={'基础信息'} />
            </Row>
            <Row gutter={90}>
              <Col span={12}>
                <Form.Item
                  label="作业名称"
                  name="username"
                  rules={[{ required: true, message: '请输入作业名称' }]}
                >
                  <Input className={styles.textBc} placeholder={'请输入作业名称'} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="作业描述"
                  name="description"
                  rules={[{ required: true, message: '请输入作业描述' }]}
                >
                  <Input.TextArea
                    className={styles.textBc}
                    rows={1}
                    placeholder={'请输入作业描述'}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <TextTitle text={'权限信息'} />
            </Row>
            <Row gutter={90}>
              <Col span={12}>
                <Form.Item label="用户选择" name="user_permissions">
                  <Select
                    className={styles.textBc}
                    mode="multiple"
                    showArrow
                    onChange={selectOnChange}
                    maxTagCount={'responsive'}
                    placeholder="请选择用户权限"
                    defaultValue={[]}
                    options={getUserOptions(userList)}
                  ></Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label=" ">
                  <Button>添加至权限列表</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className={styles.table_box}>
            <div className={styles.table_title}>*您可选择用户或用户组添加至下方权限列表</div>
            <div className={styles.table_com}>
              <Table dataSource={selectData} size={'middle'} columns={columns} />
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Carousel>
      <div className={styles.btns}>
        <Button className={styles.btn} onClick={goToLink}>
          取消
        </Button>
        <Button className={styles.btn} onClick={() => goSlice(-1)}>
          上一步
        </Button>
        <Button className={styles.btn} onClick={() => goSlice(1)} type="primary">
          下一步
        </Button>
        <Button className={styles.btn} type="primary">
          确认
        </Button>
      </div>
    </PageContainer>
  );
};
export default SqlCom;
