export class CacheStatsInfo {
  averageLoadPenalty: Number;
  evictionCount: Number;
  hitCount: Number;
  hitRate: Number;
  loadCount: Number;
  loadExceptionCount: Number;
  loadExceptionRate: Number;
  loadSuccessCount: Number;
  missCount: Number;
  missRate: Number;
  requestCount: Number;
  totalLoadTime: Number;
}

export class CountData {
  /** @format int32 */
  count: number;

  /** @format int64 */
  time: number;
}

export class DeleteRedisRecordRequest {
  /** 流程KEY */
  processDefinitionKey?: string;

  /** 流程Id */
  processId?: string;

  /** 任务节点KEY */
  taskDefinitionKey?: string;

  /** 任务节点 */
  taskId?: string;

  /** 用户名 */
  username?: string;
}

export class DroppedEventEntity {
  deleted: boolean;
  error: string;
  eventContent: string;

  /** @format int64 */
  id: number;

  /** @format int32 */
  retryTimes: number;
  stream: string;

  /** @format int64 */
  time: number;
}

export class Duration {
  /** @format int32 */
  nano: number;
  negative: boolean;

  /** @format int64 */
  seconds: number;
  units: TemporalUnit[];
  zero: boolean;
}

export class FindRedisRecordRequest {
  /** 流程KEY */
  processDefinitionKey?: string;

  /** 任务节点KEY */
  taskDefinitionKey?: string;

  /** 用户名 */
  username?: string;
}

export class FindRedisRecordResponse {
  /** 流程Id */
  processSet: string[];

  /** 任务Id */
  taskSet: string[];
}

export class Form {
  code: string;
  deleted: boolean;
  fields: FormField[];

  /** @format int64 */
  id: number;
  name: string;
  properties: string;
  rel: string;
}

export class FormField {
  arrayType: string;
  complexForm: Form;
  complexFormCode: string;
  default: any;
  deleted: boolean;
  description: string;
  hidden: boolean;

  /** @format int64 */
  id: number;

  /** @format int32 */
  index: number;

  /** @format double */
  max: number;

  /** @format double */
  min: number;
  name: string;
  options: string;
  properties: string;
  regex: string;
  required: boolean;
  tags: string[];
  title: string;
  type: string;
  value: any;
  valueType: string;
}

export class IntegrationContext {
  businessKey: string;
  clientId: string;
  clientName: string;
  clientType: string;
  connectorType: string;
  errorClassName: string;
  errorCode: string;

  /** @format int64 */
  errorDate: number;
  errorMessage: string;
  executionId: string;
  id: string;
  inBoundVariables: any;
  outBoundVariables: any;
  parentProcessInstanceId: string;
  processDefinitionId: string;
  processDefinitionKey: string;

  /** @format int32 */
  processDefinitionVersion: number;
  processInstanceId: string;

  /** @format int64 */
  requestDate: number;

  /** @format int64 */
  resultDate: number;
  status: "INTEGRATION_ERROR_RECEIVED" | "INTEGRATION_REQUESTED" | "INTEGRATION_RESULT_RECEIVED";
}

export type Number = any;

export class PageResultDroppedEventEntity {
  list: DroppedEventEntity[];

  /** @format int64 */
  total: number;
}

export class PageResultIntegrationContext {
  list: IntegrationContext[];

  /** @format int64 */
  total: number;
}

export class PageResultProcessDTO {
  list: ProcessDTO[];

  /** @format int64 */
  total: number;
}

export class PageResultProcessTaskWithProcessInfo {
  list: ProcessTaskWithProcessInfo[];

  /** @format int64 */
  total: number;
}

export class PageResultSubscribeRule {
  list: SubscribeRuleRes[];

  /** @format int64 */
  total: number;
}

export class ProcessDTO {
  /** 业务id */
  businessKey: string;

  /** 流程撤销人 */
  cancelBy: string;

  /** 流程撤销原因 */
  cancelReason: string;

  /**
   * 是否已经取消
   * @example false
   */
  canceled: boolean;

  /** 流程类型 */
  category: string;

  /** 抄送人列表 */
  ccTo: string[];

  /**
   * 是否已经完成
   * @example false
   */
  complete: boolean;

  /** 流程关联部门 */
  department: string;

  /**
   * 结束时间
   * @format int64
   * @example 16480246278910
   */
  endTime: number;

  /** 流程表单结构 */
  form: Form;

  /** 流程表单code */
  formCode: string;

  /** 流程表单数据 */
  formData: any;

  /** 流程id */
  id: string;

  /** 流程名称 */
  name: string;

  /** 流程模版id */
  processDefinitionId: string;

  /** 流程模版key */
  processDefinitionKey: string;

  /** 流程模版名称 */
  processDefinitionName: string;

  /** 发起人 */
  startBy: string;

  /**
   * 启动时间
   * @format int64
   * @example 16480246278910
   */
  startTime: number;

  /** 流程状态 */
  status: "CANCELLED" | "COMPLETED" | "CREATED" | "RUNNING" | "SUSPENDED";

  /**
   * 是否暂停或中断
   * @example false
   */
  suspended: boolean;

  /** 流程节点列表 */
  tasks: ProcessTask[];

  /** 同业务id（兼容性字段） */
  uid: string;
}

export class ProcessSubscribeRule {
  processDefinitionKey: string;
  taskDefinitionKeys: string[];
}

export class ProcessTask {
  /**
   * 是否处于激活状态(兼容性字段)
   * @example false
   */
  active: boolean;

  /** 节点处理人 */
  assignee: string;

  /** 节点附件信息 */
  attachments: ProcessTaskAttachment[];

  /** 节点候选人列表 */
  candidateUsers: string[];

  /** 节点评论信息 */
  comments: ProcessTaskComment[];

  /**
   * 是否已结束(兼容性字段)
   * @example false
   */
  completed: boolean;

  /**
   * 是否已删除(兼容性字段)
   * @example false
   */
  deleted: boolean;

  /** 运行时长(兼容性字段) */
  duration: Duration;

  /**
   * 节点结束时间(兼容性字段)
   * @format int64
   * @example 16480246278910
   */
  endAt: number;

  /**
   * 节点结束时间
   * @format int64
   * @example 16480246278910
   */
  endTime: number;

  /** 错误信息 */
  errors: TaskError[];

  /** 流程执行id */
  executionId: string;

  /** 节点表单结构 */
  form: Form;

  /** 节点表单Code */
  formCode: string;

  /** 节点表单数据 */
  formData: any;

  /** 节点id */
  id: string;

  /** 节点名称 */
  name: string;

  /** 流程业务id */
  processBusinessKey: string;

  /** 流程id */
  processInstanceId: string;

  /** 同流程业务id(兼容性字段) */
  processUid: string;

  /** 节点返回表单结构（仅适用于服务任务类节点） */
  resultForm: Form;

  /** 节点返回表单数据（仅适用于服务任务类节点） */
  resultFormCode: string;

  /** 节点返回表单数据（仅适用于服务任务类节点） */
  resultFormData: any;

  /**
   * 节点开始时间(兼容性字段)
   * @format int64
   * @example 16480246278910
   */
  startAt: number;

  /**
   * 节点开始时间
   * @format int64
   * @example 16480246278910
   */
  startTime: number;

  /**
   * 是否已开始(兼容性字段)
   * @example false
   */
  started: boolean;

  /** 节点状态 */
  status: "ASSIGNED" | "CANCELLED" | "COMPLETED" | "CREATED" | "DELETED" | "SUSPENDED";

  /** 节点子任务列表 */
  subTaskList: ProcessTask[];

  /**
   * 是否处于中断状态(兼容性字段)
   * @example false
   */
  suspended: boolean;

  /** 节点定义key */
  taskDefinitionKey: string;

  /** 任务id */
  taskId: string;

  /** 节点类型 */
  type: string;
}

export class ProcessTaskAttachment {
  description: string;
  id: string;
  name: string;
  taskId: string;

  /** @format int64 */
  time: number;
  type: string;
  url: string;
  user: string;
}

export class ProcessTaskComment {
  id: string;
  message: string;
  taskId: string;

  /** @format int64 */
  time: number;
  user: string;
}

export class ProcessTaskWithProcessInfo {
  /**
   * 是否处于激活状态(兼容性字段)
   * @example false
   */
  active: boolean;

  /** 节点处理人 */
  assignee: string;

  /** 节点附件信息 */
  attachments: ProcessTaskAttachment[];

  /** 节点候选人列表 */
  candidateUsers: string[];

  /** 节点评论信息 */
  comments: ProcessTaskComment[];

  /**
   * 是否已结束(兼容性字段)
   * @example false
   */
  completed: boolean;

  /**
   * 是否已删除(兼容性字段)
   * @example false
   */
  deleted: boolean;

  /** 流程关联部门 */
  department: string;

  /** 运行时长(兼容性字段) */
  duration: Duration;

  /**
   * 节点结束时间(兼容性字段)
   * @format int64
   * @example 16480246278910
   */
  endAt: number;

  /**
   * 节点结束时间
   * @format int64
   * @example 16480246278910
   */
  endTime: number;

  /** 错误信息 */
  errors: TaskError[];

  /** 流程执行id */
  executionId: string;

  /** 节点表单结构 */
  form: Form;

  /** 节点表单Code */
  formCode: string;

  /** 节点表单数据 */
  formData: any;

  /** 节点id */
  id: string;

  /** 节点名称 */
  name: string;

  /** 流程业务id */
  processBusinessKey: string;

  /** 流程类型 */
  processCategory: string;

  /** 流程模版id */
  processDefinitionId: string;

  /** 流程模版key */
  processDefinitionKey: string;

  /** 流程表单数据 */
  processFormData: any;

  /** 流程启动用户 */
  processInitiator: string;

  /** 流程id */
  processInstanceId: string;

  /** 流程名称 */
  processName: string;

  /**
   * 流程启动时间
   * @format int64
   * @example 16480246278910
   */
  processStartDate: number;

  /** 流程状态 */
  processStatus: "CANCELLED" | "COMPLETED" | "CREATED" | "RUNNING" | "SUSPENDED";

  /** 同流程业务id(兼容性字段) */
  processUid: string;

  /** 节点返回表单结构（仅适用于服务任务类节点） */
  resultForm: Form;

  /** 节点返回表单数据（仅适用于服务任务类节点） */
  resultFormCode: string;

  /** 节点返回表单数据（仅适用于服务任务类节点） */
  resultFormData: any;

  /**
   * 节点开始时间(兼容性字段)
   * @format int64
   * @example 16480246278910
   */
  startAt: number;

  /**
   * 节点开始时间
   * @format int64
   * @example 16480246278910
   */
  startTime: number;

  /**
   * 是否已开始(兼容性字段)
   * @example false
   */
  started: boolean;

  /** 节点状态 */
  status: "ASSIGNED" | "CANCELLED" | "COMPLETED" | "CREATED" | "DELETED" | "SUSPENDED";

  /** 节点子任务列表 */
  subTaskList: ProcessTask[];

  /**
   * 是否处于中断状态(兼容性字段)
   * @example false
   */
  suspended: boolean;

  /** 节点定义key */
  taskDefinitionKey: string;

  /** 任务id */
  taskId: string;

  /** 节点类型 */
  type: string;
}

export class QueryCountResponse {
  /**
   * 数量
   * @format int32
   */
  count: number;

  /** 各个任务 */
  detail: Record<string, number>[];

  /** 用户名 */
  user: string;
}

export class QueryDepartmentCountResponse {
  /**
   * 数量
   * @format int32
   */
  count: number;

  /** 部门代码 */
  department: string;
}

export class QueryMultipleTaskCountByDeptRequest {
  /** 部门代码列表 */
  departments?: string[];

  /** 任务标识 */
  tasks?: TaskSpecific[];
}

export class QueryMultipleTaskCountRequest {
  /** 任务标识 */
  tasks?: TaskSpecific[];

  /** 用户名列表 */
  users?: string[];
}

export class QuerySingleTaskCountByDeptRequest {
  /** 部门代码列表 */
  departments?: string[];

  /** 任务标识 */
  task?: TaskSpecific;
}

export class QuerySingleTaskCountRequest {
  /** 任务标识 */
  task?: TaskSpecific;

  /** 用户名列表 */
  users?: string[];
}

export class SubscribeRuleReq {
  department?: string;
  enable?: boolean;
  excludeUsers?: string[];
  id?: string;
  includeSubDepartment?: boolean;
  includeUsers?: string[];
  permission?: string;
  policeType?: string;
  processDefinitions?: ProcessSubscribeRule[];
  processDepartments?: string[];
  roleName?: string;
  title?: string;
}

export class SubscribeRuleRes {
  department: string;
  enable: boolean;
  excludeUsers: string[];
  id: string;
  includeSubDepartment: boolean;
  includeUsers: string[];
  permission: string;
  policeType: string;
  processDefinitions: ProcessSubscribeRule[];
  processDepartments: string[];
  roleName: string;
  title: string;
}

export class TaskError {
  /** 错误码 */
  code: string;

  /** 流程任务标识 */
  connectorType: string;

  /** 错误提示信息 */
  message: string;

  /**
   * 错误发生时间
   * @format int64
   * @example 16480246278910
   */
  time: number;
}

export class TaskSpecific {
  /** 流程KEY */
  processDefinitionKey?: string;

  /** 任务节点KEY */
  taskDefinitionKey?: string;
}

export class TemporalUnit {
  dateBased: boolean;
  duration: Duration;
  durationEstimated: boolean;
  timeBased: boolean;
}

export class DroppedEventParams {
  /** 是否删除 */
  deleted?: boolean;

  /** ID */
  id?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /**
   * 时间起始
   * @format int64
   */
  timeBegin?: number;

  /**
   * 时间截止
   * @format int64
   */
  timeEnd?: number;
}

export class DroppedEventRecoverParams {
  /**
   * begin
   * @format int64
   */
  begin?: number;

  /**
   * end
   * @format int64
   */
  end?: number;
}

export class IntegrationContextParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 服务任务节点KEY */
  clientId?: string;

  /** 服务任务类型 */
  connectorType?: string;

  /** ID */
  id?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 流程模版KEY */
  processDefinitionKey?: string;

  /** 流程模版ID */
  processInstanceId?: string;

  /** 状态 */
  status?: string[];

  /**
   * 时间起始
   * @format int64
   */
  timeBegin?: number;

  /**
   * 时间截止
   * @format int64
   */
  timeEnd?: number;
}

export class HistoryCumulateCountParams {
  /** day */
  day: string;

  /**
   * count
   * @format int64
   */
  count?: number;
}

export class HistoryWaitingCountParams {
  /** day */
  day: string;

  /**
   * count
   * @format int64
   */
  count?: number;
}

export class DoMigrationParams {
  /**
   * size
   * @format int32
   */
  size: number;

  /** delete */
  delete: boolean;
}

export class MigrationScheduleToggleParams {
  /** open */
  open?: boolean;
}

export class ProcessParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CandidateForMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CandidateForMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CcToMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CcToMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CompletedByMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CompletedByMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class CountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class DetailByUidByUidParams {
  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** uid */
  uid: string;
}

export class DetailByIdParams {
  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** id */
  id: string;
}

export class InvolvedByMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class InvolvedByMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class SubmitByMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class SubmitByMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class WaitingForMeParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class WaitingForMeCountParams {
  /** 业务ID。等同于UID */
  businessKey?: string;

  /** 流程撤销人。支持多选 */
  cancelUser?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /** 部门代码。支持多选 */
  department?: string[];

  /** 排除子流程 */
  excludeSubProcess?: boolean;

  /** 按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** ID */
  id?: string;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 关联人员(审批人或流程发起人)。支持多选 */
  involvedUser?: string[];

  /** 流程名称。需要自行添加 % 进行模糊匹配 */
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 父流程编号 */
  parentId?: string;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程模版ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  startTimeBegin?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  startTimeEnd?: number;

  /** 流程状态。支持多选 */
  status?: string[];

  /** 内部任务审批人 */
  taskAssignee?: string;

  /** 内部任务候选人 */
  taskCandidateUser?: string;

  /** 内部任务节点KEY匹配。支持多选 */
  taskDefinitionKey?: string[];

  /** 内部任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 内部任务状态 */
  taskStatus?: string[];

  /** UID */
  uid?: string;

  /** 流程发起人。支持多选 */
  user?: string[];

  /** 多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含抄送人列表 */
  withCcTo?: boolean;

  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含任务的表单结构 */
  withTaskForm?: boolean;

  /** 返回结果包含任务的表单数据 */
  withTaskFormData?: boolean;

  /** 返回结果包含任务列表 */
  withTasks?: boolean;
}

export class GetQueryEventSubscribeRuleParams {
  department?: string;
  enable?: boolean;
  id?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
}

export class TaskParams {
  /** 审批人。支持多选 */
  assignee?: string[];

  /** 审批人或候选人。支持多选 */
  assigneeOrCandidate?: string[];

  /** 等同于processUid */
  businessKey?: string;

  /** 候选审批人。支持多选 */
  candidate?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /**
   * 任务创建时间起始
   * @format int64
   */
  createdDateFrom?: number;

  /**
   * 任务创建时间截止
   * @format int64
   */
  createdDateTo?: number;

  /** 流程关联部门代码。支持多选 */
  department?: string[];

  /** 是否按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** 包含子部门 */
  includeSubDepartment?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  processStartDateFrom?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  processStartDateTo?: number;

  /** 流程创建用户 */
  processStartUser?: string;

  /** 流程状态。支持多选 */
  processStatus?: string[];

  /** 流程UID */
  processUid?: string;

  /** 流程多参数匹配时的判定逻辑, 默认为And */
  processVariablesMatchCondition?: "And" | "Or";

  /** 任务节点KEY。支持多选 */
  taskDefinitionKey?: string[];

  /** 任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 任务节点状态。支持多选 */
  taskStatus?: string[];

  /** 任务多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含任务节点表单结构 */
  withForm?: boolean;

  /** 返回结果包含任务节点表单数据 */
  withFormData?: boolean;

  /** 返回结果包含流程表单数据 */
  withProcessFormData?: boolean;
}

export class AssigneeOrCandidateParams {
  /** 审批人或候选人。不支持多选! */
  assigneeOrCandidate: string;

  /** 等同于processUid */
  businessKey?: string;

  /**
   * 任务创建时间起始
   * @format int64
   */
  createdDateFrom?: number;

  /**
   * 任务创建时间截止
   * @format int64
   */
  createdDateTo?: number;

  /** 流程关联部门代码。支持多选 */
  department?: string[];

  /** 是否按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  processStartDateFrom?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  processStartDateTo?: number;

  /** 流程创建用户 */
  processStartUser?: string;

  /** 流程UID */
  processUid?: string;

  /** 任务节点KEY。支持多选 */
  taskDefinitionKey?: string[];

  /** 任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 返回结果包含任务节点表单结构 */
  withForm?: boolean;

  /** 返回结果包含任务节点表单数据 */
  withFormData?: boolean;

  /** 返回结果包含流程表单数据 */
  withProcessFormData?: boolean;
}

export class AssigneeOrCandidateCountParams {
  /** 审批人或候选人。不支持多选! */
  assigneeOrCandidate: string;

  /** 等同于processUid */
  businessKey?: string;

  /**
   * 任务创建时间起始
   * @format int64
   */
  createdDateFrom?: number;

  /**
   * 任务创建时间截止
   * @format int64
   */
  createdDateTo?: number;

  /** 流程关联部门代码。支持多选 */
  department?: string[];

  /** 是否按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** 包含子部门 */
  includeSubDepartment?: boolean;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  processStartDateFrom?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  processStartDateTo?: number;

  /** 流程创建用户 */
  processStartUser?: string;

  /** 流程UID */
  processUid?: string;

  /** 任务节点KEY。支持多选 */
  taskDefinitionKey?: string[];

  /** 任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 返回结果包含任务节点表单结构 */
  withForm?: boolean;

  /** 返回结果包含任务节点表单数据 */
  withFormData?: boolean;

  /** 返回结果包含流程表单数据 */
  withProcessFormData?: boolean;
}

export class CountParams7 {
  /** 审批人。支持多选 */
  assignee?: string[];

  /** 审批人或候选人。支持多选 */
  assigneeOrCandidate?: string[];

  /** 等同于processUid */
  businessKey?: string;

  /** 候选审批人。支持多选 */
  candidate?: string[];

  /** 抄送人。不支持多选 */
  ccToUser?: string;

  /**
   * 任务创建时间起始
   * @format int64
   */
  createdDateFrom?: number;

  /**
   * 任务创建时间截止
   * @format int64
   */
  createdDateTo?: number;

  /** 流程关联部门代码。支持多选 */
  department?: string[];

  /** 是否按当前用户管理部门查询 */
  filterByAdminDepartment?: boolean;

  /** 包含子部门 */
  includeSubDepartment?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 流程模版ID */
  processDefinitionId?: string;

  /** 流程模版KEY。支持多选 */
  processDefinitionKey?: string[];

  /** 流程ID */
  processInstanceId?: string;

  /**
   * 流程启动时间起始
   * @format int64
   */
  processStartDateFrom?: number;

  /**
   * 流程启动时间截止
   * @format int64
   */
  processStartDateTo?: number;

  /** 流程创建用户 */
  processStartUser?: string;

  /** 流程状态。支持多选 */
  processStatus?: string[];

  /** 流程UID */
  processUid?: string;

  /** 流程多参数匹配时的判定逻辑, 默认为And */
  processVariablesMatchCondition?: "And" | "Or";

  /** 任务节点KEY。支持多选 */
  taskDefinitionKey?: string[];

  /** 任务节点KEY排除。支持多选 */
  taskDefinitionKeyNotIn?: string[];

  /** 任务节点状态。支持多选 */
  taskStatus?: string[];

  /** 任务多参数匹配时的判定逻辑, 默认为And */
  variablesMatchCondition?: "And" | "Or";

  /** 返回结果包含任务节点表单结构 */
  withForm?: boolean;

  /** 返回结果包含任务节点表单数据 */
  withFormData?: boolean;

  /** 返回结果包含流程表单数据 */
  withProcessFormData?: boolean;
}

export class DetailByIdParams9 {
  /** 返回结果包含表单结构 */
  withForm?: boolean;

  /** 返回结果包含表单数据 */
  withFormData?: boolean;

  /** 返回结果包含流程表单数据 */
  withProcessFormData?: boolean;

  /** id */
  id: string;
}

import { AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  url: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  params?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  ResponseType?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  ResponseType?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

interface HttpClient {
  request: <T = any, _E = any>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}

/**
 * @title 流程查询模块
 * @version 1.0
 * @baseUrl http://192.168.200.12:5000
 */
class Api {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  manage = {
    /**
     * No description
     *
     * @tags manage
     * @name DroppedEvent
     * @summary 异常抛弃的事件数据分页查询
     * @request GET:/auth-bpmn-query/manage/dropped-event
     * @response `200` `PageResultDroppedEventEntity` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    droppedEvent: (query: DroppedEventParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultDroppedEventEntity, void>({
        url: `/auth-bpmn-query/manage/dropped-event`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name DroppedEventRecover
     * @summary 尝试重新处理时间范围内的异常事件，默认为当天
     * @request POST:/auth-bpmn-query/manage/dropped-event/recover
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    droppedEventRecover: (query: DroppedEventRecoverParams, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/dropped-event/recover`,
        method: "POST",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name PostDroppedEventRecoverById
     * @summary 尝试重新处理指定异常事件
     * @request POST:/auth-bpmn-query/manage/dropped-event/recover/{id}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postDroppedEventRecoverById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/dropped-event/recover/${id}`,
        method: "POST",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name DeleteDroppedEventRecoverById
     * @summary 删除异常事件
     * @request DELETE:/auth-bpmn-query/manage/dropped-event/recover/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteDroppedEventRecoverById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/dropped-event/recover/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name CacheClear
     * @summary 清除全部缓存
     * @request GET:/auth-bpmn-query/manage/cache-clear
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    cacheClear: (config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/cache-clear`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name CacheClearByName
     * @summary 清除缓存
     * @request GET:/auth-bpmn-query/manage/cache-clear/{name}
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    cacheClearByName: (name: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/cache-clear/${name}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name CacheClearByNameAndKey
     * @summary 清除指定key的缓存项目
     * @request GET:/auth-bpmn-query/manage/cache-clear/{name}/{key}
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    cacheClearByNameAndKey: (name: string, key: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/cache-clear/${name}/${key}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name CacheRefreshByNameAndKey
     * @summary 重新加载指定key的缓存项目
     * @request GET:/auth-bpmn-query/manage/cache-refresh/{name}/{key}
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    cacheRefreshByNameAndKey: (name: string, key: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/cache-refresh/${name}/${key}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name CacheStats
     * @summary getCacheStats
     * @request GET:/auth-bpmn-query/manage/cache-stats
     * @response `200` `Record<string, CacheStatsInfo>` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    cacheStats: (config: AxiosRequestConfig = {}) =>
      this.http.request<Record<string, CacheStatsInfo>, void>({
        url: `/auth-bpmn-query/manage/cache-stats`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name HistoryCumulateCount
     * @summary listCumulateCount
     * @request GET:/auth-bpmn-query/manage/history/cumulate-count
     * @response `200` `(CountData)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    historyCumulateCount: (query: HistoryCumulateCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<CountData[], void>({
        url: `/auth-bpmn-query/manage/history/cumulate-count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name HistoryWaitingCount
     * @summary listWaitingCount
     * @request GET:/auth-bpmn-query/manage/history/waiting-count
     * @response `200` `(CountData)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    historyWaitingCount: (query: HistoryWaitingCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<CountData[], void>({
        url: `/auth-bpmn-query/manage/history/waiting-count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name HistoryWaitingCountReset
     * @summary resetWaitingCount
     * @request POST:/auth-bpmn-query/manage/history/waiting-count/reset
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    historyWaitingCountReset: (config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/history/waiting-count/reset`,
        method: "POST",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name PutProcessStatusByIdAndStatus
     * @summary putProcessStatus
     * @request PUT:/auth-bpmn-query/manage/process/{id}/status/{status}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putProcessStatusByIdAndStatus: (id: string, status: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/process/${id}/status/${status}`,
        method: "PUT",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name StatusHandlingCount
     * @summary getEventHandlingCount
     * @request GET:/auth-bpmn-query/manage/status/handling-count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    statusHandlingCount: (config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/manage/status/handling-count`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name PutTaskStatusByIdAndStatus
     * @summary putTaskStatus
     * @request PUT:/auth-bpmn-query/manage/task/{id}/status/{status}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putTaskStatusByIdAndStatus: (id: string, status: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/task/${id}/status/${status}`,
        method: "PUT",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name GetQueryEventSubscribeRule
     * @summary 列出消息订阅规则
     * @request GET:/auth-bpmn-query/manage/query-event-subscribe-rule
     * @response `200` `PageResultSubscribeRule` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getQueryEventSubscribeRule: (query: GetQueryEventSubscribeRuleParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultSubscribeRule, void>({
        url: `/auth-bpmn-query/manage/query-event-subscribe-rule`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name PostQueryEventSubscribeRule
     * @summary 保存或修改规则
     * @request POST:/auth-bpmn-query/manage/query-event-subscribe-rule
     * @response `200` `string` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postQueryEventSubscribeRule: (data: SubscribeRuleReq, config: AxiosRequestConfig = {}) =>
      this.http.request<string, void>({
        url: `/auth-bpmn-query/manage/query-event-subscribe-rule`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name DeleteQueryEventSubscribeRuleById
     * @summary 删除规则
     * @request DELETE:/auth-bpmn-query/manage/query-event-subscribe-rule/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteQueryEventSubscribeRuleById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/manage/query-event-subscribe-rule/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * No description
     *
     * @tags manage
     * @name QueryEventSubscribeRuleSubscribersById
     * @summary 查看规则下的用户列表
     * @request GET:/auth-bpmn-query/manage/query-event-subscribe-rule/{id}/subscribers
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    queryEventSubscribeRuleSubscribersById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth-bpmn-query/manage/query-event-subscribe-rule/${id}/subscribers`,
        method: "GET",
        ...config,
      }),
  };
  inner = {
    /**
     * No description
     *
     * @tags inner
     * @name FormDataProcessFormDataById
     * @summary getProcessFormData
     * @request GET:/auth-bpmn-query/inner/form-data/process/{id}/form-data
     * @response `200` `Number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    formDataProcessFormDataById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Number, void>({
        url: `/auth-bpmn-query/inner/form-data/process/${id}/form-data`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags inner
     * @name DoMigration
     * @summary doMigration
     * @request POST:/auth-bpmn-query/inner/do-migration
     * @response `200` `number` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    doMigration: (query: DoMigrationParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/inner/do-migration`,
        method: "POST",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags inner
     * @name MigrationScheduleToggle
     * @summary toggleMigrationSchedule
     * @request POST:/auth-bpmn-query/inner/migration-schedule-toggle
     * @response `200` `boolean` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    migrationScheduleToggle: (query: MigrationScheduleToggleParams, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth-bpmn-query/inner/migration-schedule-toggle`,
        method: "POST",
        params: query,
        ...config,
      }),
  };
  integrationContext = {
    /**
     * No description
     *
     * @tags integrationContext
     * @name IntegrationContext
     * @summary 服务任务执行记录分页查询
     * @request GET:/auth-bpmn-query/integration-context
     * @response `200` `PageResultIntegrationContext` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    integrationContext: (query: IntegrationContextParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultIntegrationContext, void>({
        url: `/auth-bpmn-query/integration-context`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  process = {
    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags process
     * @name Process
     * @summary 通用流程查询
     * @request GET:/auth-bpmn-query/process
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    process: (query: ProcessParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CandidateForMe
     * @summary 当前用户为候选人的流程
     * @request GET:/auth-bpmn-query/process/candidate-for-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    candidateForMe: (query: CandidateForMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/candidate-for-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CandidateForMeCount
     * @summary 当前用户为候选人的流程[数量]
     * @request GET:/auth-bpmn-query/process/candidate-for-me/count
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    candidateForMeCount: (query: CandidateForMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/candidate-for-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CcToMe
     * @summary 抄送当前用户的流程
     * @request GET:/auth-bpmn-query/process/cc-to-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    ccToMe: (query: CcToMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/cc-to-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CcToMeCount
     * @summary 抄送当前用户的流程[数量]
     * @request GET:/auth-bpmn-query/process/cc-to-me/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    ccToMeCount: (query: CcToMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/cc-to-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CompletedByMe
     * @summary 当前用户审批过的流程
     * @request GET:/auth-bpmn-query/process/completed-by-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    completedByMe: (query: CompletedByMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/completed-by-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name CompletedByMeCount
     * @summary 当前用户审批过的流程[数量]
     * @request GET:/auth-bpmn-query/process/completed-by-me/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    completedByMeCount: (query: CompletedByMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/completed-by-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags process
     * @name Count
     * @summary 通用流程查询(数量)
     * @request GET:/auth-bpmn-query/process/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    count: (query: CountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name DetailByUidByUid
     * @summary 流程详情查询（按businessKey/uid）
     * @request GET:/auth-bpmn-query/process/detail-by-uid/{uid}
     * @response `200` `ProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    detailByUidByUid: ({ uid, ...query }: DetailByUidByUidParams, config: AxiosRequestConfig = {}) =>
      this.http.request<ProcessDTO, void>({
        url: `/auth-bpmn-query/process/detail-by-uid/${uid}`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name DetailById
     * @summary 流程详情查询
     * @request GET:/auth-bpmn-query/process/detail/{id}
     * @response `200` `ProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    detailById: ({ id, ...query }: DetailByIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<ProcessDTO, void>({
        url: `/auth-bpmn-query/process/detail/${id}`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name InvolvedByMe
     * @summary 当前用户参与的流程(流程发起人或审批人)
     * @request GET:/auth-bpmn-query/process/involved-by-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    involvedByMe: (query: InvolvedByMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/involved-by-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name InvolvedByMeCount
     * @summary 当前用户参与的流程[数量]
     * @request GET:/auth-bpmn-query/process/involved-by-me/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    involvedByMeCount: (query: InvolvedByMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/involved-by-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name SubmitByMe
     * @summary 当前用户发起的流程
     * @request GET:/auth-bpmn-query/process/submit-by-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    submitByMe: (query: SubmitByMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/submit-by-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name SubmitByMeCount
     * @summary 当前用户发起的流程[数量]
     * @request GET:/auth-bpmn-query/process/submit-by-me/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    submitByMeCount: (query: SubmitByMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/submit-by-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name WaitingForMe
     * @summary 待当前用户审批的流程
     * @request GET:/auth-bpmn-query/process/waiting-for-me
     * @response `200` `PageResultProcessDTO` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    waitingForMe: (query: WaitingForMeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessDTO, void>({
        url: `/auth-bpmn-query/process/waiting-for-me`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags process
     * @name WaitingForMeCount
     * @summary 待用户审批的流程[数量]
     * @request GET:/auth-bpmn-query/process/waiting-for-me/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    waitingForMeCount: (query: WaitingForMeCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/process/waiting-for-me/count`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  taskCount = {
    /**
     * No description
     *
     * @tags taskCount
     * @name PostRedisRecord
     * @summary 获取用户处理中的流程Id, 任务Id
     * @request POST:/auth-bpmn-query/task-count/redis-record
     * @response `200` `FindRedisRecordResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postRedisRecord: (data: FindRedisRecordRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<FindRedisRecordResponse, void>({
        url: `/auth-bpmn-query/task-count/redis-record`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name DeleteRedisRecord
     * @summary 删除redis记录
     * @request DELETE:/auth-bpmn-query/task-count/redis-record
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteRedisRecord: (data: DeleteRedisRecordRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/task-count/redis-record`,
        method: "DELETE",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name RunningSingleTaskDepartment
     * @summary 根据部门代码获取处理中的单个任务数量
     * @request POST:/auth-bpmn-query/task-count/running-Single-task-department
     * @response `200` `(QueryDepartmentCountResponse)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    runningSingleTaskDepartment: (data: QuerySingleTaskCountByDeptRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<QueryDepartmentCountResponse[], void>({
        url: `/auth-bpmn-query/task-count/running-Single-task-department`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name RunningMultipleTaskCount
     * @summary 根据用户名批量获取处理中的多个任务数量
     * @request POST:/auth-bpmn-query/task-count/running-multiple-task-count
     * @response `200` `(QueryCountResponse)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    runningMultipleTaskCount: (data: QueryMultipleTaskCountRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<QueryCountResponse[], void>({
        url: `/auth-bpmn-query/task-count/running-multiple-task-count`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name RunningMultipleTaskDepartment
     * @summary 根据部门代码获取处理中的多个任务数量
     * @request POST:/auth-bpmn-query/task-count/running-multiple-task-department
     * @response `200` `(QueryDepartmentCountResponse)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    runningMultipleTaskDepartment: (data: QueryMultipleTaskCountByDeptRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<QueryDepartmentCountResponse[], void>({
        url: `/auth-bpmn-query/task-count/running-multiple-task-department`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name RunningSingleTaskCount
     * @summary 根据用户名批量获取处理中的单个任务数量
     * @request POST:/auth-bpmn-query/task-count/running-single-task-count
     * @response `200` `(QueryCountResponse)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    runningSingleTaskCount: (data: QuerySingleTaskCountRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<QueryCountResponse[], void>({
        url: `/auth-bpmn-query/task-count/running-single-task-count`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name GetByUser
     * @summary 根据用户名获取redisKey
     * @request GET:/auth-bpmn-query/task-count/{user}
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getByUser: (user: string, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth-bpmn-query/task-count/${user}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags taskCount
     * @name PutByUser
     * @summary 重新整理用户处理中的流程和任务的redisRecord
     * @request PUT:/auth-bpmn-query/task-count/{user}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putByUser: (user: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth-bpmn-query/task-count/${user}`,
        method: "PUT",
        ...config,
      }),
  };
  task = {
    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags task
     * @name Task
     * @summary 流程任务节点分页查询
     * @request GET:/auth-bpmn-query/task
     * @response `200` `PageResultProcessTaskWithProcessInfo` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    task: (query: TaskParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultProcessTaskWithProcessInfo, void>({
        url: `/auth-bpmn-query/task`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags task
     * @name AssigneeOrCandidate
     * @summary 查询待处理的流程任务节点。不支持分页
     * @request GET:/auth-bpmn-query/task/assignee-or-candidate
     * @response `200` `(ProcessTaskWithProcessInfo)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    assigneeOrCandidate: (query: AssigneeOrCandidateParams, config: AxiosRequestConfig = {}) =>
      this.http.request<ProcessTaskWithProcessInfo[], void>({
        url: `/auth-bpmn-query/task/assignee-or-candidate`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags task
     * @name AssigneeOrCandidateCount
     * @summary 查询待处理的流程任务节点数量
     * @request GET:/auth-bpmn-query/task/assignee-or-candidate/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    assigneeOrCandidateCount: (query: AssigneeOrCandidateCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/task/assignee-or-candidate/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：bpmn:process:basic
     *
     * @tags task
     * @name Count
     * @summary 流程任务节点数量查询
     * @request GET:/auth-bpmn-query/task/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    count: (query: CountParams7, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth-bpmn-query/task/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags task
     * @name DetailById
     * @summary 获取流程任务节点详情
     * @request GET:/auth-bpmn-query/task/detail/{id}
     * @response `200` `ProcessTaskWithProcessInfo` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    detailById: ({ id, ...query }: DetailByIdParams9, config: AxiosRequestConfig = {}) =>
      this.http.request<ProcessTaskWithProcessInfo, void>({
        url: `/auth-bpmn-query/task/detail/${id}`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
}

import { httpClient } from "../utils/request";

export const authBpmnQueryApi = new Api(httpClient);
