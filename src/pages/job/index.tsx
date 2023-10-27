import { PageContainer } from '@ant-design/pro-layout';
import { Link, history } from 'umi';
import styles from './index.less';
import {
  DownOutlined,
  SearchOutlined,
  EditFilled,
  DeleteFilled,
  EllipsisOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
import { Dropdown, Input, Select, Table, Menu, Tooltip } from 'antd';

interface DataType {
  name: string;
  type: string;
  description: string;
  edition: string;
  founder: string;
  creationTime: string;
  lastUpdateTime: string;
}

const dataSource = [
  {
    key: '0',
    id: '1',
    name: '事件处理',
    type: 'SQL作业',
    description: '描述内容描述内容描述内容',
    edition: '4.0.0',
    founder: '李旭东',
    creationTime: '2023.09.12 12:00:00',
    lastUpdateTime: '2023.09.12 12:00:00',
  },
  {
    key: '1',
    id: '2',
    name: '事件处理',
    type: 'SQL作业',
    description: '描述内容描述内容描述内容',
    edition: '4.0.0',
    founder: '李旭东',
    creationTime: '2023.09.12 12:00:00',
    lastUpdateTime: '2023.09.12 12:00:00',
  },
  {
    key: '2',
    id: '3',
    name: '事件处理',
    type: 'SQL作业',
    description: '描述内容描述内容描述内容',
    edition: '4.0.0',
    founder: '李旭东',
    creationTime: '2023.09.12 12:00:00',
    lastUpdateTime: '2023.09.12 12:00:00',
  },
  {
    key: '3',
    id: '4',
    name: '事件处理',
    type: 'SQL作业',
    description: '描述内容描述内容描述内容',
    edition: '4.0.0',
    founder: '李旭东',
    creationTime: '2023.09.12 12:00:00',
    lastUpdateTime: '2023.09.12 12:00:00',
  },
  {
    key: '4',
    id: '5',
    name: '事件处理',
    type: 'SQL作业',
    description: '描述内容描述内容描述内容',
    edition: '4.0.0',
    founder: '李旭东',
    creationTime: '2023.09.12 12:00:00',
    lastUpdateTime: '2023.09.12 12:00:00',
  },
];

const columns: ColumnsType<DataType> = [
  {
    align: 'center',
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: (text: any, record: any, index: number) => index + 1,
  },
  {
    align: 'center',
    title: '作业名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    align: 'center',
    title: '作业类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    align: 'center',
    title: '作业描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    align: 'center',
    title: '当前版本',
    dataIndex: 'edition',
    key: 'edition',
  },
  {
    align: 'center',
    title: '创建人',
    dataIndex: 'founder',
    key: 'founder',
  },
  {
    align: 'center',
    title: '创建时间',
    dataIndex: 'creationTime',
    key: 'creationTime',
  },
  {
    align: 'center',
    title: '最后更新时间',
    sorter: true,
    dataIndex: 'lastUpdateTime',
    key: 'lastUpdateTime',
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
          <Tooltip title={'编辑'}>
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
              onClick={() => {
                history.push(`/job/sql?id=${record.id}`);
              }}
            >
              <EditFilled className="editorspan" style={{ color: '#BDC4CF' }} />
            </span>
          </Tooltip>
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
          <Tooltip title={'更多'}>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={() => {}} key="1">
                    创建实例
                  </Menu.Item>
                  <Menu.Item onClick={() => {}} key="2">
                    复制
                  </Menu.Item>
                  <Menu.Item onClick={() => {}} key="3">
                    导出
                  </Menu.Item>
                </Menu>
              }
            >
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
                onClick={() => {
                  console.log(record, 'fff');
                }}
              >
                <EllipsisOutlined className="editorspan" style={{ color: '#BDC4CF' }} />
              </span>
            </Dropdown>
          </Tooltip>
        </>
      );
    },
  },
];

const JobCom = () => {
  const items: MenuProps['items'] = [
    {
      label: '算子作业',
      key: '1',
    },
    {
      label: <Link to={'/job/sql'}>SQL作业</Link>,
      key: '2',
    },
    {
      label: 'Jar作业',
      key: '3',
    },
  ];

  return (
    <PageContainer breadcrumbRender={false}>
      <div className={styles.job_box}>
        <div className={styles.job_top}>
          <Dropdown.Button
            type="primary"
            style={{ width: 'auto', height: 32 }}
            icon={<DownOutlined />}
            menu={{ items }}
          >
            新增作业
          </Dropdown.Button>
          <span className={styles.form_fg}></span>
          <Input
            placeholder={'输入关键词'}
            suffix={<SearchOutlined />}
            style={{ width: 200, height: 32, marginRight: 16 }}
          />
          <Select
            placeholder="选择作业类型"
            style={{ width: 200, height: 32, marginRight: 16 }}
            options={[
              {
                label: '算子作业',
                value: '1',
              },
              {
                label: 'SQL作业',
                value: '2',
              },
              {
                label: 'Jar作业',
                value: '3',
              },
            ]}
          />
          <Select
            mode="multiple"
            placeholder="选择所属团队"
            style={{ width: 200, height: 32 }}
            maxTagCount={'responsive'}
            options={[
              {
                label: '所有团队',
                value: '1',
              },
              {
                label: '团队A',
                value: '2',
              },
              {
                label: '团队B',
                value: '3',
              },
              {
                label: '团队C',
                value: '4',
              },
              {
                label: '团队D',
                value: '5',
              },
            ]}
            dropdownRender={(menu) => {
              return (
                <>
                  <Input
                    style={{ margin: 8, width: 184, borderRadius: 14 }}
                    placeholder={'输入关键字搜索团队'}
                    suffix={<SearchOutlined />}
                  />
                  {menu}
                </>
              );
            }}
          />
        </div>
        <div className={styles.job_bom}>
          <Table dataSource={dataSource} size={'small'} columns={columns} />
        </div>
      </div>
    </PageContainer>
  );
};

export default JobCom;
