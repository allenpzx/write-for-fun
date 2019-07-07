import React from 'react';
import { Card, Row, Col, Table, Select, Popconfirm, Button } from 'antd';
import './SkuTable.css';

class SkuTable extends React.Component {
  state = {
    data: {},
    duplicateData: {},
    formatData: [],
  };

  async componentDidMount() {
    // const { dispatch } = this.props;
    // const res = await dispatch({ type: 'dynamic/mockLoad' });
    const res = {
      "header" : {
        "transactionId" : null,
        "code" : 2000,
        "msg" : "SUCCEED"
      },
      "data" : {
        "id" : 10206,
        "receiptStatus" : 2,
        "description" : null,
        "dismissDescription" : "sdfsadfsafsa",
        "dismissNumber" : 3,
        "receiptDetailsDTOList" : [ {
          "id" : 10498,
          "receiptId" : 10206,
          "receiptNumber" : 5,
          "spuId" : 18220,
          "skuId" : null,
          "basisDTOS" : [ {
            "id" : 11037,
            "receiptDetailId" : 10498,
            "detailsBasisValue" : "A",
            "detailsBasisName" : "测试标准1",
            "basisId" : 461,
            "type" : 1,
            "standardId" : 186,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          }, {
            "id" : 11038,
            "receiptDetailId" : 10498,
            "detailsBasisValue" : "白",
            "detailsBasisName" : "单色",
            "basisId" : 341,
            "type" : 1,
            "standardId" : 152,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          } ],
          "updateAt" : null,
          "createBy" : 25,
          "updateBy" : 25,
          "delFlag" : 0,
          "brandName" : "Addidas",
          "spuName" : "zhongxuan001",
          "seriesName" : "系列一"
        }, {
          "id" : 10499,
          "receiptId" : 10206,
          "receiptNumber" : 9,
          "spuId" : 18220,
          "skuId" : null,
          "basisDTOS" : [ {
            "id" : 11039,
            "receiptDetailId" : 10499,
            "detailsBasisValue" : "D",
            "detailsBasisName" : "测试标准1",
            "basisId" : 464,
            "type" : 1,
            "standardId" : 186,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          }, {
            "id" : 11040,
            "receiptDetailId" : 10499,
            "detailsBasisValue" : "紫",
            "detailsBasisName" : "单色",
            "basisId" : 342,
            "type" : 1,
            "standardId" : 152,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          } ],
          "updateAt" : null,
          "createBy" : 25,
          "updateBy" : 25,
          "delFlag" : 0,
          "brandName" : "Addidas",
          "spuName" : "zhongxuan001",
          "seriesName" : "系列一"
        }, {
          "id" : 10501,
          "receiptId" : 10206,
          "receiptNumber" : 5,
          "spuId" : 18220,
          "skuId" : null,
          "basisDTOS" : [ {
            "id" : 11041,
            "receiptDetailId" : 10501,
            "detailsBasisValue" : "B",
            "detailsBasisName" : "测试标准1",
            "basisId" : 462,
            "type" : 1,
            "standardId" : 186,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          }, {
            "id" : 11042,
            "receiptDetailId" : 10501,
            "detailsBasisValue" : "紫",
            "detailsBasisName" : "单色",
            "basisId" : 342,
            "type" : 1,
            "standardId" : 152,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          } ],
          "updateAt" : null,
          "createBy" : 25,
          "updateBy" : 25,
          "delFlag" : 0,
          "brandName" : "Addidas",
          "spuName" : "zhongxuan001",
          "seriesName" : "系列一"
        }, {
          "id" : 10502,
          "receiptId" : 10206,
          "receiptNumber" : 5,
          "spuId" : 18219,
          "skuId" : null,
          "basisDTOS" : [ {
            "id" : 11043,
            "receiptDetailId" : 10502,
            "detailsBasisValue" : "白",
            "detailsBasisName" : "单色",
            "basisId" : 341,
            "type" : 1,
            "standardId" : 152,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          }, {
            "id" : 11044,
            "receiptDetailId" : 10502,
            "detailsBasisValue" : "猪皮",
            "detailsBasisName" : "皮质",
            "basisId" : 348,
            "type" : 1,
            "standardId" : 154,
            "createdAt" : "2019-06-26T10:45:43.769+0800",
            "updatedAt" : "1970-01-01T10:45:43.769+0800",
            "createBy" : 25,
            "updateBy" : 25,
            "delFlag" : 0
          } ],
          "updateAt" : null,
          "createBy" : 25,
          "updateBy" : 25,
          "delFlag" : 0,
          "brandName" : "测试品牌6",
          "spuName" : "chengshanshan100",
          "seriesName" : "系列111"
        } ],
        "deleteList" : null,
        "spuDTOS" : [ {
          "spuId" : 18219,
          "englishName" : "chengshanshan100",
          "brandName" : "测试品牌6",
          "seriesName" : "系列111",
          "backItemList" : null,
          "delFlag" : 0,
          "blackUrl" : "https://test-woof.heywoof.com/file/2019/06/24/5833574740672980e359ec487154ed1aee530dfaccbe1af.jpg",
          "forClassList" : null,
          "specStandardDTOList" : [ {
            "id" : 152,
            "specId" : 10056,
            "status" : 0,
            "chineseName" : "单色",
            "englishName" : "Only",
            "attributes" : null,
            "delFlag" : 0,
            "createdAt" : "2019-06-05T21:54:28.538+0800",
            "updatedAt" : "2019-06-05T21:54:28.538+0800",
            "createdBy" : 100000,
            "updatedBy" : 100000,
            "ssDetailDTOList" : [ {
              "id" : 340,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "黑",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 341,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "白",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 342,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "紫",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            } ],
            "isEdit" : null
          }, {
            "id" : 154,
            "specId" : 10057,
            "status" : 0,
            "chineseName" : "皮质",
            "englishName" : "pi",
            "attributes" : null,
            "delFlag" : 0,
            "createdAt" : "2019-06-05T21:57:21.156+0800",
            "updatedAt" : "2019-06-05T21:57:21.156+0800",
            "createdBy" : 100000,
            "updatedBy" : 100000,
            "ssDetailDTOList" : [ {
              "id" : 346,
              "specStandardId" : 154,
              "status" : 0,
              "attributes" : "牛皮",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:57:21.156+0800",
              "updatedAt" : "2019-06-05T21:57:21.156+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 347,
              "specStandardId" : 154,
              "status" : 0,
              "attributes" : "犀牛皮",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:57:21.156+0800",
              "updatedAt" : "2019-06-05T21:57:21.156+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 348,
              "specStandardId" : 154,
              "status" : 0,
              "attributes" : "猪皮",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:57:21.156+0800",
              "updatedAt" : "2019-06-05T21:57:21.156+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 349,
              "specStandardId" : 154,
              "status" : 0,
              "attributes" : "骆驼皮",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:57:21.156+0800",
              "updatedAt" : "2019-06-05T21:57:21.156+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            } ],
            "isEdit" : null
          } ],
          "outBoundRespList" : null,
          "createdAt" : null
        }, {
          "spuId" : 18220,
          "englishName" : "zhongxuan001",
          "brandName" : "Addidas",
          "seriesName" : "系列一",
          "backItemList" : null,
          "delFlag" : 0,
          "blackUrl" : "https://test-woof.heywoof.com/file/2019/06/24/584362276660757660a5f4f7ef842cc928313214dea9303.jpg",
          "forClassList" : null,
          "specStandardDTOList" : [ {
            "id" : 186,
            "specId" : 10083,
            "status" : 0,
            "chineseName" : "测试标准1",
            "englishName" : "Test Standard1",
            "attributes" : null,
            "delFlag" : 0,
            "createdAt" : "2019-06-18T16:44:47.967+0800",
            "updatedAt" : "2019-06-18T16:44:47.967+0800",
            "createdBy" : 1,
            "updatedBy" : 1,
            "ssDetailDTOList" : [ {
              "id" : 461,
              "specStandardId" : 186,
              "status" : 0,
              "attributes" : "A",
              "delFlag" : 0,
              "createdAt" : "2019-06-18T16:44:47.967+0800",
              "updatedAt" : "2019-06-18T16:44:47.967+0800",
              "createdBy" : 1,
              "updatedBy" : 1,
              "isEdit" : null
            }, {
              "id" : 462,
              "specStandardId" : 186,
              "status" : 0,
              "attributes" : "B",
              "delFlag" : 0,
              "createdAt" : "2019-06-18T16:44:47.967+0800",
              "updatedAt" : "2019-06-18T16:44:47.967+0800",
              "createdBy" : 1,
              "updatedBy" : 1,
              "isEdit" : null
            }, {
              "id" : 463,
              "specStandardId" : 186,
              "status" : 0,
              "attributes" : "C",
              "delFlag" : 0,
              "createdAt" : "2019-06-18T16:44:47.967+0800",
              "updatedAt" : "2019-06-18T16:44:47.967+0800",
              "createdBy" : 1,
              "updatedBy" : 1,
              "isEdit" : null
            }, {
              "id" : 464,
              "specStandardId" : 186,
              "status" : 0,
              "attributes" : "D",
              "delFlag" : 0,
              "createdAt" : "2019-06-18T16:44:47.967+0800",
              "updatedAt" : "2019-06-18T16:44:47.967+0800",
              "createdBy" : 1,
              "updatedBy" : 1,
              "isEdit" : null
            } ],
            "isEdit" : null
          }, {
            "id" : 152,
            "specId" : 10056,
            "status" : 0,
            "chineseName" : "单色",
            "englishName" : "Only",
            "attributes" : null,
            "delFlag" : 0,
            "createdAt" : "2019-06-05T21:54:28.538+0800",
            "updatedAt" : "2019-06-05T21:54:28.538+0800",
            "createdBy" : 100000,
            "updatedBy" : 100000,
            "ssDetailDTOList" : [ {
              "id" : 340,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "黑",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 341,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "白",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            }, {
              "id" : 342,
              "specStandardId" : 152,
              "status" : 0,
              "attributes" : "紫",
              "delFlag" : 0,
              "createdAt" : "2019-06-05T21:54:28.538+0800",
              "updatedAt" : "2019-06-05T21:54:28.538+0800",
              "createdBy" : 100000,
              "updatedBy" : 100000,
              "isEdit" : null
            } ],
            "isEdit" : null
          } ],
          "outBoundRespList" : null,
          "createdAt" : null
        } ],
        "proOperationLogDTOS" : [ {
          "id" : 11056,
          "operation" : "驳回",
          "operationCode" : 2,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-07-02T10:45:28.640+0800",
          "updatedAt" : "2019-07-02T10:45:29.000+0800",
          "createdBy" : 1,
          "updatedBy" : 1,
          "createdName" : "管理员",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        }, {
          "id" : 11041,
          "operation" : "提交",
          "operationCode" : 1,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-06-26T10:45:44.216+0800",
          "updatedAt" : "2019-06-26T10:45:44.000+0800",
          "createdBy" : 25,
          "updatedBy" : 25,
          "createdName" : "彪",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        }, {
          "id" : 11040,
          "operation" : "驳回",
          "operationCode" : 2,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-06-26T10:44:28.198+0800",
          "updatedAt" : "2019-06-26T10:44:28.000+0800",
          "createdBy" : 25,
          "updatedBy" : 25,
          "createdName" : "彪",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        }, {
          "id" : 11039,
          "operation" : "提交",
          "operationCode" : 1,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-06-26T10:38:51.678+0800",
          "updatedAt" : "2019-06-26T10:38:52.000+0800",
          "createdBy" : 25,
          "updatedBy" : 25,
          "createdName" : "彪",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        }, {
          "id" : 11038,
          "operation" : "驳回",
          "operationCode" : 2,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-06-26T10:36:41.497+0800",
          "updatedAt" : "2019-06-26T10:36:41.000+0800",
          "createdBy" : 25,
          "updatedBy" : 25,
          "createdName" : "彪",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        }, {
          "id" : 11037,
          "operation" : "提交",
          "operationCode" : 1,
          "description" : null,
          "targetId" : 10206,
          "createdAt" : "2019-06-26T10:36:09.891+0800",
          "updatedAt" : "2019-06-26T10:36:10.000+0800",
          "createdBy" : 25,
          "updatedBy" : 25,
          "createdName" : "彪",
          "updatedName" : null,
          "delFlag" : 0,
          "type" : 1
        } ],
        "operationLogDTO" : null,
        "spuId" : "0",
        "channelType" : 1,
        "sellerId" : 10001,
        "sellerName" : "10001",
        "createdAt" : "2019-06-26T10:36:09.714+0800",
        "updatedAt" : "2019-07-02T10:45:28.640+0800",
        "createBy" : 25,
        "updateBy" : 25,
        "createdName" : "彪",
        "approverName" : null,
        "updatedName" : null,
        "delFlag" : 0
      }
    }
    const {
      data: { receiptDetailsDTOList, spuDTOS },
    } = res;
    const formatData = this.formatData({
      key: 'spuId',
      keyList: receiptDetailsDTOList,
      joinKey: 'spuDTOS',
      joinList: spuDTOS,
    });
    this.setState({ data: JSON.parse(JSON.stringify(res.data)), duplicateData: res.data, formatData });
  }

  formatData = ({ key = '', keyList = [], joinKey = '', joinList = [] }) => {
    const formatObj = keyList.reduce((prev, current) => {
      if (Reflect.has(prev, current[key])) {
        prev[current[key]].details.push(current);
        prev[current[key]].delFlag = current.delFlag;
        prev[current[key]][joinKey] = joinList.find(v => v[key] === current[key]);
      } else {
        const { basisDTOS, createBy, updateAt, updateBy, ...others } = current
        Reflect.set(prev, current[key], {
          ...others,
          details: [{ ...current }],
          delFlag: current.delFlag,
          [joinKey]: joinList.find(v => v[key] === current[key]),
        });
      }
      return prev;
    }, {});
    return Object.entries(formatObj).map(([k, v]) => {
      return { ...v, details: v.details.filter(item => item.delFlag === 0) };
    });
  };

  addSku = spuId => () => {
    const { formatData } = this.state;
    const target = formatData.find(v => v.spuId === spuId);
    const basisDTOS = target.spuDTOS.specStandardDTOList.map(dto=>({
      standardId: dto.id,
      basisId: null,
      delFlag: 0,
    }));
    target.details.push({
      basisDTOS,
      brandName: "测试品牌6",
      delFlag: 0,
      id: Math.random() + '',
      skuId: null,
      spuId
    })
    this.setState({ formatData });
  };

  deleteSpu = spuId => {
    const { formatData } = this.state;
    const spu = formatData.find(v => v.spuId === spuId);
    spu.delFlag = 1;
    spu.details.filter(v=>typeof v.id === 'number').map(v=>({...v, delFlag: 1}));
    this.setState({ formatData });
  };

  deleteSku = (spuId, detailId) => {
    const { formatData } = this.state;
    formatData
      .find(v => v.spuId === spuId)
      .details.find(detail => detail.id === detailId).delFlag = 1;
    this.setState({ formatData });
  };

  changeSku = (record, key, value) => {
    const { formatData } = this.state;
    const mapItem = formatData.find(v => v.spuId === record.spuId).details.find(detail=>detail.id === record.id)
    mapItem.basisDTOS.find(v=>v.standardId === key.id).basisId = value;
    this.setState({ formatData });
  };

  generateSpuColumns = () => {
    return [
      {
        title: '名称',
        dataIndex: 'brandName',
      },
      {
        title: 'spuName',
        dataIndex: 'spuName',
      },
      {
        title: 'spuId',
        dataIndex: 'spuId',
      },
      {
        title: '系列名称',
        dataIndex: 'seriesName',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            <Popconfirm
              title="确定删除SPU及其以下的SKU吗?"
              onConfirm={() => this.deleteSpu(record.spuId)}
            >
              <a href="'" style={{ color: '#f5222d' }}>删除</a>
            </Popconfirm>
          );
        },
      },
    ];
  };

  handleSubmit = () => {
    const { data: { receiptDetailsDTOList }, formatData } = this.state;
    let addArr = [];
    let deleteArr = [];
    let updatArr = [];

    formatData.forEach(spu=>{
      spu.details.forEach(detail=>{
        if((typeof detail.id === 'number') && detail.delFlag === 1) return deleteArr.push(detail);
        const target = receiptDetailsDTOList.find(dto=>dto.id===detail.id);
        if(!target) addArr.push(detail)
        if(target){
          const isUpdate = detail.basisDTOS.some(dto=>target.basisDTOS.find(targetDTO=>targetDTO.standardId===dto.standardId && targetDTO.basisId !== dto.basisId));
          if(isUpdate) updatArr.push(detail);
          console.log('target: ', target);
          console.log('detail: ', detail);
          console.log('isUpdate: ', isUpdate);
        }
      })
    });
    console.log(addArr, deleteArr, updatArr);
  }

  render() {
    const { formatData } = this.state;
    // console.log('formatData: ', formatData);

    const expandedRowRender = record => {
      // console.log('record: ', record);
      const { details, spuDTOS } = record;
      const columns = spuDTOS.specStandardDTOList
        .map(standardDTO => ({
          title: standardDTO.chineseName,
          dataIndex: 'standardId',
          key: Math.random(),
          render: (text, row) => {
            const mapItem = row.basisDTOS.find(dto => dto.standardId === standardDTO.id);
            return (
              <Select
                value={mapItem ? mapItem.basisId : null}
                style={{ width: 200 }}
                onChange={e => this.changeSku(row, standardDTO, e)}
              >
                {standardDTO.ssDetailDTOList.map(item => (
                  <Select.Option key={Math.random()} value={item.id}>{item.attributes}</Select.Option>
                ))}
              </Select>
            );
          },
        }))
        .concat([
          {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => {
              return (
                <Popconfirm
                  title="确定删除SKU吗?"
                  onConfirm={() => this.deleteSku(record.spuId, record.id)}
                >
                  <a href="'" style={{ color: '#f5222d' }}>删除</a>
                </Popconfirm>
              );
            },
          },
        ]);

        const mapDetailToCol = details => {
          return details.filter(v => v.delFlag === 0)
        }

      return (
        <React.Fragment>
          <Table
            columns={columns}
            dataSource={mapDetailToCol(details)}
            rowKey={item => item.id}
            pagination={false}
          />
          <Row className="row">
            <Col span={24}>
              <Button type="dashed" icon="plus" onClick={this.addSku(record.spuId)}>
                添加SKU
              </Button>
            </Col>
          </Row>
        </React.Fragment>
      );
    };

    return (
      <Card className='content'>
        {formatData.length > 0 && (
          <Row>
            <Table
              columns={this.generateSpuColumns()}
              dataSource={formatData.filter(v => v.delFlag === 0)}
              rowKey={record => record.id}
              expandedRowRender={expandedRowRender}
              defaultExpandAllRows
              pagination={false}
            />
          </Row>
        )}
        <Row className="row">
          <Col span={24}>
            <Button type="dashed" icon="plus">
              添加SPU
            </Button>
          </Col>
        </Row>
        <Row className="row">
          <Col span={24}>
            <Button onClick={this.handleSubmit}>
              提交
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SkuTable;
