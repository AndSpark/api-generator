export class AccessToken {
  /**
   * 有效期至
   * @format int64
   */
  expiredAt: number;

  /** Access Token */
  token: string;
}

export class BindPhoneRequest {
  code?: string;
}

export class ChangePasswordForm {
  newPassword?: string;
  oldPassword?: string;
}

export class Config {
  inherit: boolean;
  key: string;
  value: any;
}

export class ConfigWithTimestamp {
  config: Config;

  /** @format int64 */
  time: number;
}

export class Department {
  bmdm: string;
  bmjc: string;
  bmmc: string;
  bz: string;
  digest: EntityDigest;
  disabled: boolean;

  /** @format int64 */
  id: number;

  /** @format int32 */
  jyrs: number;
  leaderPoliceCode: string;

  /** @format int64 */
  leaderPoliceId: number;
  leaderPoliceRealName: string;
  level: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";
  lxdh: string;

  /** @format int64 */
  sjbmId: number;
  sjbmdm: string;
  sjbmjc: string;
  sjbmmc: string;

  /** @format int32 */
  sortIndex: number;
  szdz: string;

  /** @format int32 */
  xqrs: number;
}

export class DepartmentConfig {
  inherit: boolean;
  inheritFrom: string;
  key: string;
  value: any;
}

export class DepartmentCreateBean {
  bmdm?: string;
  bmjc?: string;
  bmmc?: string;
  bz?: string;
  disabled?: boolean;

  /** @format int64 */
  leaderPoliceId?: number;
  level?: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";
  lxdh?: string;

  /** @format int64 */
  parentId?: number;

  /** @format int32 */
  sortIndex?: number;
  szdz?: string;
}

export class DepartmentQueryBean {
  bmdm?: string[];
  disabled?: boolean;
  id?: number[];
  level?: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  parentBmdm?: string;

  /** @format int64 */
  parentId?: number;
}

export class DepartmentSimple {
  bmdm: string;
  bmjc: string;
  bmmc: string;

  /** @format int64 */
  id: number;
  level: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";

  /** @format int32 */
  sortIndex: number;
}

export class DepartmentTree {
  bmdm: string;
  bmjc: string;
  bmmc: string;
  bz: string;
  children: DepartmentTree[];
  digest: EntityDigest;
  hasChildren: boolean;

  /** @format int64 */
  id: number;

  /** @format int32 */
  jyrs: number;
  leaderPoliceCode: string;

  /** @format int64 */
  leaderPoliceId: number;
  leaderPoliceRealName: string;
  leaf: boolean;
  level: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";
  lxdh: string;
  node: Department;

  /** @format int64 */
  sjbmId: number;
  sjbmdm: string;
  sjbmjc: string;
  sjbmmc: string;

  /** @format int32 */
  sortIndex: number;
  szdz: string;

  /** @format int32 */
  xqrs: number;
}

export class DepartmentUpdateBean {
  bmdm?: string;
  bmjc?: string;
  bmmc?: string;
  bz?: string;
  disabled?: boolean;

  /** @format int64 */
  id?: number;

  /** @format int64 */
  leaderPoliceId?: number;
  level?: "DaDui" | "ZhiDui" | "ZhongDui" | "ZongDui";
  lxdh?: string;

  /** @format int64 */
  parentId?: number;

  /** @format int32 */
  sortIndex?: number;
  szdz?: string;
}

export class DictItem {
  disabled: boolean;

  /** @format int64 */
  id: number;

  /** @format int32 */
  index: number;
  key: string;
  value: string;
  "value2": string;
  "value3": string;
  "value4": string;
  "value5": string;
}

export class Dictionary {
  department: string;
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  id: number;

  /** @format int64 */
  lastUpdateTime: number;
  name: string;
  section: string;
  title: string;
}

export class DictionaryCreateBean {
  department?: string;
  description?: string;
  name?: string;
  section?: string;
  title?: string;
}

export class DictionaryUpdateBean {
  department?: string;
  description?: string;
  disabled?: boolean;

  /** @format int64 */
  id?: number;
  name?: string;
  section?: string;
  title?: string;
}

export class DictionaryWithItems {
  department: string;
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  id: number;
  items: DictItem[];

  /** @format int64 */
  lastUpdateTime: number;
  name: string;
  section: string;
  title: string;
}

export class EntityDigest {
  digest: string;
  valid: boolean;
}

export class FileObjectMeta {
  contentType: string;
  fileName: string;
  id: string;

  /** @format int64 */
  size: number;
}

export class IPBlock {
  digest: EntityDigest;
  enable: boolean;

  /** @format int64 */
  id: number;
  ip: string;
}

export class IdCardLoginForm {
  /** 部门代码 */
  department?: string;

  /** 身份证明号码 */
  idCardNumber?: string;

  /** 短信验证码 */
  messageCode?: string;

  /** 短信验证码请求ID */
  messageRequestId?: string;

  /** 手机号码 */
  phone?: string;
}

export type InputStream = any;

export class Ledger {
  action: string;
  app: string;
  category: "AUTO" | "CREATE" | "DELETE" | "EVENT" | "OTHER" | "READ" | "UPDATE";
  core: boolean;
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  end: number;
  exception: string;
  externalAppId: string;

  /** @format int64 */
  id: number;
  ip: string;
  isExternalUser: boolean;
  level: "DANGER" | "ERROR" | "INFO" | "WARNING";
  message: string;
  operator: string;
  permissionType: "Auditing" | "Common" | "Security" | "System" | "Work";
  regular: boolean;
  request: string;
  response: string;

  /** @format int64 */
  start: number;
  status: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  targetId: string;
  targetType: string;

  /** @format int64 */
  time: number;
  type: "LOGIN" | "OPERATE" | "SAFETY";
  url: string;
  userAgent: string;
}

export class LedgerSimple {
  action: string;
  app: string;
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  end: number;
  exception: string;
  externalAppId: string;

  /** @format int64 */
  id: number;
  ip: string;
  isExternalUser: boolean;
  level: "DANGER" | "ERROR" | "INFO" | "WARNING";
  message: string;
  operator: string;
  permissionType: "Auditing" | "Common" | "Security" | "System" | "Work";

  /** @format int64 */
  start: number;
  status: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  url: string;
}

export class LedgerWriteRequest {
  /** 动作标识 */
  action?: string;

  /** 应用标识 */
  app?: string;

  /** 具体台账内容，建议传json字符串 */
  content?: string;

  /** 动作描述信息 */
  description?: string;

  /**
   * 动作完成时间
   * @format int64
   */
  endTime?: number;

  /**
   * 动作发生时间
   * @format int64
   */
  startTime?: number;

  /** 目标ID */
  targetId?: string;

  /** 目标类型 */
  targetType?: string;
}

export class LocationUploadRequest {
  /** 坐标点（高德坐标） */
  point?: Point;

  /** 用户名 */
  username?: string;
}

export class LoginResponse {
  /** 仅外部平台登录时返回 */
  openId: string;
  token: Token;
  user: UserSimpleWithAuth;
}

export class MessageBody {
  action?: string;
  data?: any;
}

export class MessageSendRequest {
  appKey?: string;
  mobile?: string;
  text?: string;
}

export class MultiUserTrackQuery {
  correction?: string;
  day?: string;
  gap?: string;
  recoup?: string;

  /** @format int32 */
  size?: number;
  usernameList?: string[];
}

export class MultiUserTrackTimeRangeQuery {
  correction?: string;
  gap?: string;
  recoup?: string;

  /** @format int32 */
  size?: number;
  userQueryList?: UserTrackQuery[];
}

export class PasswordForm {
  password?: string;
}

export class Permission {
  code: string;
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  id: number;
  options: PermissionOptions;
  section: string;
  title: string;
  type: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class PermissionOptions {
  enable: boolean;
  isCore: boolean;
  isRegular: boolean;

  /** @format int32 */
  ordered: number;
  policeOnly: boolean;
}

export class PhoneLoginForm {
  /** 短信验证码 */
  messageCode?: string;

  /** 短信验证码请求ID */
  messageRequestId?: string;

  /** 手机号码 */
  phone?: string;
}

export class Point {
  /** @format double */
  accuracy: number;

  /** @format double */
  direction: number;

  /** @format double */
  height: number;

  /** @format double */
  latitude: number;

  /** @format double */
  longitude: number;

  /** @format double */
  speed: number;

  /** @format int64 */
  time: number;
}

export class Police {
  bgdh: string;
  bmdm: string;
  bmjc: string;
  bmmc: string;
  bzlx: string;

  /** @format int64 */
  cgsj: number;

  /** @format int64 */
  csrq: number;

  /** @format int64 */
  departmentId: number;
  digest: EntityDigest;
  gender: "Female" | "Male" | "Other" | "Unknown";

  /** @format int64 */
  id: number;
  jb: string;
  jg: string;
  jtzz: string;
  jx: string;
  jylx: string;
  ldjb: string;

  /** @format int64 */
  leaderPoliceId: number;
  mz: string;
  phone: string;
  policeCode: string;
  policeType: string;
  position: string;

  /** @format int64 */
  rdsj: number;

  /** @format int64 */
  rdtsj: number;

  /** @format int64 */
  rxzsj: number;
  sfzmhm: string;
  sgcldj: string;

  /** @format int32 */
  sortIndex: number;
  xl: string;
  xm: string;
  ywgw: string;
  zd: string;
  zfzgdj: string;
  zw: string;
  zy: string;
  zzmm: string;
}

export class PoliceCreateBean {
  bgdh?: string;
  bzlx?: string;

  /** @format int64 */
  cgsj?: number;

  /** @format int64 */
  csrq?: number;

  /** @format int64 */
  departmentId?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";
  jb?: string;
  jg?: string;
  jtzz?: string;
  jx?: string;
  jylx?: string;
  ldjb?: string;
  mz?: string;
  phone?: string;
  policeCode?: string;
  policeType?: string;
  position?: string;

  /** @format int64 */
  rdsj?: number;

  /** @format int64 */
  rdtsj?: number;

  /** @format int64 */
  rxzsj?: number;
  sfzmhm?: string;
  sgcldj?: string;

  /** @format int32 */
  sortIndex?: number;
  xl?: string;
  xm?: string;
  ywgw?: string;
  zd?: string;
  zfzgdj?: string;
  zw?: string;
  zy?: string;
  zzmm?: string;
}

export class PoliceImportResultDetail {
  message: string;
  phone: string;
  policeCode: string;
  policeType: string;
  sfzmhm: string;
  success: boolean;
  xm: string;
}

export class PoliceQueryBean {
  departmentCode?: string[];
  departmentId?: number[];
  id?: number[];
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  phone?: string;
  phoneLike?: string;
  policeCodeIn?: string[];
  policeCodeLike?: string;
  policeType?: string;
  position?: string;
  positionLike?: string;
  sfzmhm?: string;
  sfzmhmIn?: string[];
  sfzmhmLike?: string;
  xm?: string;
  xmLike?: string;
}

export class PoliceUpdateBean {
  bgdh?: string;
  bzlx?: string;

  /** @format int64 */
  cgsj?: number;

  /** @format int64 */
  csrq?: number;

  /** @format int64 */
  departmentId?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";

  /** @format int64 */
  id?: number;
  jb?: string;
  jg?: string;
  jtzz?: string;
  jx?: string;
  jylx?: string;
  ldjb?: string;
  mz?: string;
  phone?: string;
  policeCode?: string;
  policeType?: string;
  position?: string;

  /** @format int64 */
  rdsj?: number;

  /** @format int64 */
  rdtsj?: number;

  /** @format int64 */
  rxzsj?: number;
  sfzmhm?: string;
  sgcldj?: string;

  /** @format int32 */
  sortIndex?: number;
  xl?: string;
  xm?: string;
  ywgw?: string;
  zd?: string;
  zfzgdj?: string;
  zw?: string;
  zy?: string;
  zzmm?: string;
}

export class PoliceUserCreateBean {
  avatar?: string;

  /** @format int64 */
  departmentId?: number;
  email?: string;

  /** @format int64 */
  expire?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";
  idCardNumber?: string;
  password?: string;

  /** @format int64 */
  passwordExpire?: number;
  phone?: string;
  policeCode?: string;
  policeType?: string;
  position?: string;
  realName?: string;

  /** @format int64 */
  roleId?: number;

  /** @format int32 */
  sortIndex?: number;
  username?: string;
}

export class PoliceUserUpdateBean {
  avatar?: string;

  /** @format int64 */
  departmentId?: number;
  email?: string;

  /** @format int64 */
  expire?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";

  /** @format int64 */
  id?: number;
  idCardNumber?: string;

  /** @format int64 */
  passwordExpire?: number;
  phone?: string;
  policeCode?: string;
  policeType?: string;
  position?: string;
  realName?: string;

  /** @format int64 */
  roleId?: number;

  /** @format int32 */
  sortIndex?: number;
  username?: string;
}

export class ReadUserConfigRequest {
  keys?: string[];
  usernames?: string[];
}

export class ReasonForm {
  reason?: string;
}

export class Resource {
  description: string;

  /** @format binary */
  file: File;
  filename: string;
  inputStream: InputStream;
  open: boolean;
  readable: boolean;

  /** @format uri */
  uri: string;

  /** @format url */
  url: string;
}

export class Role {
  description: string;
  digest: EntityDigest;

  /** @format int64 */
  id: number;
  name: string;
  parentRoles: Role[];
  permissions: Permission[];

  /** @format int32 */
  priority: number;
  roleType: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class RoleCreateBean {
  description?: string;
  name?: string;
  parentRoleIds?: number[];
  permissions?: string[];

  /** @format int32 */
  priority?: number;
  roleType?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class RoleUpdateBean {
  description?: string;

  /** @format int64 */
  id?: number;
  name?: string;
  parentRoleIds?: number[];
  permissions?: string[];

  /** @format int32 */
  priority?: number;
  roleType?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class SendResponse {
  code: string;
  message: string;
  sid: string;
}

export class SmsVerifyCheckRequest {
  code?: string;
  phone?: string;
  requestId?: string;
}

export class SmsVerifyRequest {
  appKey?: string;
  phone?: string;
}

export class ThirdPlatformEntity {
  appKey: string;
  appSecret: string;
  description: string;
  id: string;
  permissions: string[];
  platform: "Mock" | "Wechat" | "ZheLiBan";
}

export class ThirdPlatformLoginRequest {
  /** 应用ID */
  appId: string;

  /** 票据(Ticket/Code) */
  code: string;

  /** 是否为外部用户 */
  external?: boolean;
}

export class TimeRange {
  /** @format int64 */
  timeBegin?: number;

  /** @format int64 */
  timeEnd?: number;
}

export class Token {
  external: boolean;
  externalAppId: string;
  refreshToken: string;

  /** @format int64 */
  refreshTokenExpire: number;
  token: string;

  /** @format int64 */
  tokenExpire: number;
}

export class User {
  adminDepartmentList: DepartmentSimple[];

  /** @format int64 */
  createTime: number;
  digest: EntityDigest;

  /** @format int64 */
  editTime: number;

  /** @format int64 */
  id: number;
  isDeleted: boolean;
  password: string;
  permissions: Permission[];

  /** @format int32 */
  priority: number;
  profile: UserProfile;
  restriction: UserRestriction;
  status: UserStatus;
  username: string;
}

export class UserConfigs {
  configs: any;
  username: string;
}

export class UserCreateBean {
  avatar?: string;
  email?: string;

  /** @format int64 */
  expire?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";
  idCardNumber?: string;
  password?: string;

  /** @format int64 */
  passwordExpire?: number;
  phone?: string;

  /** @format int64 */
  policeId?: number;
  realName?: string;

  /** @format int64 */
  roleId?: number;
  username?: string;
}

export class UserLocation {
  /** @format double */
  accuracy: number;

  /** @format double */
  direction: number;

  /** @format double */
  height: number;

  /** @format double */
  latitude: number;

  /** @format int64 */
  locationTime: number;

  /** @format double */
  longitude: number;

  /** @format double */
  speed: number;

  /** @format int64 */
  time: number;
  username: string;
}

export class UserLocationQueryBean {
  /** 根据可管理部门id查询。支持多选 */
  adminDepartmentId?: number[];

  /** 根据部门代码查询。支持多选 */
  department?: string[];

  /** 根据部门id查询。支持多选 */
  departmentId?: number[];

  /** 根据Email查询 */
  email?: string;
  emailLike?: string;

  /** 是否根据当前用户的管理部门进行过滤 */
  filterByAdminDepartment?: boolean;

  /** 根据id查询。支持多选 */
  id?: number[];

  /** 身份证号查询。支持多选 */
  idCardNumber?: string[];
  idCardNumberLike?: string;
  includeNone?: boolean;

  /** 是否包含子部门(根据department参数，自动补充子部门) */
  includeSubDepartment?: boolean;

  /** 是否为已删除用户 */
  isDeleted?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 根据权限code查询 */
  permissionCode?: string;

  /**
   * 根据权限id查询
   * @format int64
   */
  permissionId?: number;

  /** 根据手机号查询 */
  phone?: string;
  phoneLike?: string;

  /** 根据警号模糊查询 */
  policeCodeLike?: string;

  /**
   * 根据警员id查询
   * @format int64
   */
  policeId?: number;

  /** 根据警员类型查询 */
  policeType?: string;

  /** 根据姓名查询 */
  realName?: string;
  realNameLike?: string;

  /**
   * 根据角色id查询
   * @format int64
   */
  roleId?: number;

  /** 根据角色id查询 */
  roleIdIn?: number[];

  /** 根据角色名称查询 */
  roleName?: string;

  /** 根据角色名称批量查询 */
  roleNameIn?: string[];

  /** 根据用户名查询。支持多选 */
  username?: string[];

  /** 用户名模糊查询 */
  usernameLike?: string;
}

export class UserLocationRequest {
  includeNone?: boolean;
  usernames?: string[];
}

export class UserLocationTrace {
  /** @format double */
  distance: number;
  points: Point[];

  /** @format int32 */
  total: number;
  username: string;
}

export class UserOrganizationUpdateBean {
  /** @format int64 */
  id?: number;

  /** @format int64 */
  policeId?: number;
}

export class UserProfile {
  avatar: string;
  department: Department;
  digest: EntityDigest;
  email: string;

  /** @format int64 */
  expire: number;
  gender: "Female" | "Male" | "Other" | "Unknown";
  idCardNumber: string;

  /** @format int64 */
  passwordExpire: number;
  phone: string;
  police: Police;
  realName: string;
  role: Role;
}

export class UserProfileUpdateBean {
  avatar?: string;
  email?: string;
  gender?: "Female" | "Male" | "Other" | "Unknown";

  /** @format int64 */
  id?: number;
  idCardNumber?: string;
  phone?: string;
  realName?: string;
}

export class UserQueryBean {
  /** 根据可管理部门id查询。支持多选 */
  adminDepartmentId?: number[];

  /** 根据部门代码查询。支持多选 */
  department?: string[];

  /** 根据部门id查询。支持多选 */
  departmentId?: number[];

  /** 根据Email查询 */
  email?: string;
  emailLike?: string;

  /** 是否根据当前用户的管理部门进行过滤 */
  filterByAdminDepartment?: boolean;

  /** 根据id查询。支持多选 */
  id?: number[];

  /** 身份证号查询。支持多选 */
  idCardNumber?: string[];
  idCardNumberLike?: string;

  /** 是否包含子部门(根据department参数，自动补充子部门) */
  includeSubDepartment?: boolean;

  /** 是否为已删除用户 */
  isDeleted?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 根据权限code查询 */
  permissionCode?: string;

  /**
   * 根据权限id查询
   * @format int64
   */
  permissionId?: number;

  /** 根据手机号查询 */
  phone?: string;
  phoneLike?: string;

  /** 根据警号模糊查询 */
  policeCodeLike?: string;

  /**
   * 根据警员id查询
   * @format int64
   */
  policeId?: number;

  /** 根据警员类型查询 */
  policeType?: string;

  /** 根据姓名查询 */
  realName?: string;
  realNameLike?: string;

  /**
   * 根据角色id查询
   * @format int64
   */
  roleId?: number;

  /** 根据角色id查询 */
  roleIdIn?: number[];

  /** 根据角色名称查询 */
  roleName?: string;

  /** 根据角色名称批量查询 */
  roleNameIn?: string[];

  /** 根据用户名查询。支持多选 */
  username?: string[];

  /** 用户名模糊查询 */
  usernameLike?: string;
}

export class UserRestriction {
  allowIp: string[];
  allowLoginDays: string;
  allowLoginTimeRange: string;
  allowMultiLogin: boolean;
  changePasswordFlag: boolean;
  digest: EntityDigest;
}

export class UserSimpleEx {
  departmentCode: string;
  departmentName: string;

  /** @format int64 */
  id: number;
  idCardNumber: string;
  phone: string;
  policeCode: string;
  policeType: string;
  realName: string;
  username: string;
}

export class UserSimpleWithAuth {
  adminDepartments: string[];
  departmentCode: string;
  departmentName: string;

  /** @format int64 */
  expire: number;

  /** @format int64 */
  id: number;
  idCardNumber: string;
  isLocked: boolean;

  /** @format int64 */
  passwordExpire: number;
  permissions: string[];
  phone: string;
  policeCode: string;
  policeType: string;
  realName: string;

  /** @format int64 */
  roleId: number;
  roleName: string;
  username: string;
}

export class UserSimpleWithLocation {
  departmentCode: string;
  departmentName: string;

  /** @format int64 */
  id: number;
  idCardNumber: string;
  location: Point;
  phone: string;
  policeCode: string;
  policeType: string;
  realName: string;
  username: string;
}

export class UserStatus {
  digest: EntityDigest;
  isLocked: boolean;
  lastLoginIp: string;

  /** @format int64 */
  lastLoginTime: number;
  lastLoginUserAgent: string;
  lockedReason: string;
}

export class UserTrackQuery {
  timeRanges?: TimeRange[];
  username?: string;
}

export class UserUpdateBean {
  avatar?: string;
  email?: string;

  /** @format int64 */
  expire?: number;
  gender?: "Female" | "Male" | "Other" | "Unknown";

  /** @format int64 */
  id?: number;
  idCardNumber?: string;

  /** @format int64 */
  passwordExpire?: number;
  phone?: string;

  /** @format int64 */
  policeId?: number;
  realName?: string;

  /** @format int64 */
  roleId?: number;
}

export class UsernamePasswordLoginForm {
  password?: string;
  username?: string;
}

export class WebSocketBrokerStats {
  clientInboundExecutorStatsInfo: string;
  clientOutboundExecutorStatsInfo: string;

  /** @format int64 */
  loggingPeriod: number;
  sockJsTaskSchedulerStatsInfo: string;
  stompBrokerRelayStatsInfo: string;
  stompSubProtocolStatsInfo: string;
  webSocketSessionStatsInfo: string;
}

export class DesensitizePageResultPolice {
  list: Police[];

  /** @format int64 */
  total: number;
}

export class DesensitizePageResultUser {
  list: User[];

  /** @format int64 */
  total: number;
}

export class ImportResultPoliceImportResultDetail {
  details: PoliceImportResultDetail[];
}

export class MessageBodyWithReceiverObject {
  action?: string;
  data?: any;
  users?: string[];
}

export class PageResultDictionary {
  list: Dictionary[];

  /** @format int64 */
  total: number;
}

export class PageResultIPBlock {
  list: IPBlock[];

  /** @format int64 */
  total: number;
}

export class PageResultLedgerSimple {
  list: LedgerSimple[];

  /** @format int64 */
  total: number;
}

export class PageResultThirdPlatformEntity {
  list: ThirdPlatformEntity[];

  /** @format int64 */
  total: number;
}

export class PageResultUserSimpleEx {
  list: UserSimpleEx[];

  /** @format int64 */
  total: number;
}

export class PageResultUserSimpleWithLocation {
  list: UserSimpleWithLocation[];

  /** @format int64 */
  total: number;
}

export class PageResultString {
  list: string[];

  /** @format int64 */
  total: number;
}

export class GetDictionaryParams {
  department?: string;
  includeAllParentDepartment?: boolean;
  includeGlobal?: boolean;
  name?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  section?: string;
  title?: string;
}

export class FindByNameParams {
  /** department */
  department?: string;

  /** name */
  name: string;
}

export class ItemsParams {
  /** department */
  department?: string;

  /** excludeDisabled */
  excludeDisabled?: boolean;

  /** name */
  name: string;
}

export class WithItemsParams {
  /** department */
  department?: string;

  /** excludeDisabled */
  excludeDisabled?: boolean;

  /** name */
  name: string;
}

export class ItemsByDictionaryIdParams {
  /** excludeDisabled */
  excludeDisabled?: boolean;

  /**
   * dictionaryId
   * @format int64
   */
  dictionaryId: number;
}

export type PutItemsByIdPayload = DictItem[];

export class DeleteItemsByIdParams {
  /** itemIds */
  itemIds: number[];

  /**
   * id
   * @format int64
   */
  id: number;
}

export class IpBlockParams {
  enable?: boolean;
  ip?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
}

export class LoginLedgerParams {
  action?: string[];
  categories?: "AUTO" | "CREATE" | "DELETE" | "EVENT" | "OTHER" | "READ" | "UPDATE";
  core?: boolean;
  description?: string;
  external?: boolean;
  externalAppId?: string;
  levels?: "DANGER" | "ERROR" | "INFO" | "WARNING";
  loginMethods?: "IdCard" | "Logout" | "Phone" | "ThirdPlatform" | "Username" | "UsernamePassword";
  operator?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  permissionTypes?: "Auditing" | "Common" | "Security" | "System" | "Work";
  regular?: boolean;
  scope?: string;
  status?: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  targetId?: string;
  targetType?: string;

  /** @format int64 */
  timeBegin?: number;

  /** @format int64 */
  timeEnd?: number;
  type?: "LOGIN" | "OPERATE" | "SAFETY";
  url?: string;
}

export class LoginLedgerSelfParams {
  action?: string[];
  categories?: "AUTO" | "CREATE" | "DELETE" | "EVENT" | "OTHER" | "READ" | "UPDATE";
  core?: boolean;
  description?: string;
  external?: boolean;
  externalAppId?: string;
  levels?: "DANGER" | "ERROR" | "INFO" | "WARNING";
  loginMethods?: "IdCard" | "Logout" | "Phone" | "ThirdPlatform" | "Username" | "UsernamePassword";
  operator?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  permissionTypes?: "Auditing" | "Common" | "Security" | "System" | "Work";
  regular?: boolean;
  scope?: string;
  status?: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  targetId?: string;
  targetType?: string;

  /** @format int64 */
  timeBegin?: number;

  /** @format int64 */
  timeEnd?: number;
  type?: "LOGIN" | "OPERATE" | "SAFETY";
  url?: string;
}

export class OperateLedgerParams {
  action?: string[];
  categories?: "AUTO" | "CREATE" | "DELETE" | "EVENT" | "OTHER" | "READ" | "UPDATE";
  core?: boolean;
  description?: string;
  external?: boolean;
  externalAppId?: string;
  levels?: "DANGER" | "ERROR" | "INFO" | "WARNING";
  loginMethods?: "IdCard" | "Logout" | "Phone" | "ThirdPlatform" | "Username" | "UsernamePassword";
  operator?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  permissionTypes?: "Auditing" | "Common" | "Security" | "System" | "Work";
  regular?: boolean;
  scope?: string;
  status?: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  targetId?: string;
  targetType?: string;

  /** @format int64 */
  timeBegin?: number;

  /** @format int64 */
  timeEnd?: number;
  type?: "LOGIN" | "OPERATE" | "SAFETY";
  url?: string;
}

export class SafetyLedgerParams {
  action?: string[];
  categories?: "AUTO" | "CREATE" | "DELETE" | "EVENT" | "OTHER" | "READ" | "UPDATE";
  core?: boolean;
  description?: string;
  external?: boolean;
  externalAppId?: string;
  levels?: "DANGER" | "ERROR" | "INFO" | "WARNING";
  loginMethods?: "IdCard" | "Logout" | "Phone" | "ThirdPlatform" | "Username" | "UsernamePassword";
  operator?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  permissionTypes?: "Auditing" | "Common" | "Security" | "System" | "Work";
  regular?: boolean;
  scope?: string;
  status?: "FAILED" | "FORBIDDEN" | "NO_AUTHENTICATION" | "NO_PERMISSION" | "SUCCESS";
  targetId?: string;
  targetType?: string;

  /** @format int64 */
  timeBegin?: number;

  /** @format int64 */
  timeEnd?: number;
  type?: "LOGIN" | "OPERATE" | "SAFETY";
  url?: string;
}

export class ByIdParams {
  /** type */
  type: "LOGIN" | "OPERATE" | "SAFETY";

  /**
   * id
   * @format int64
   */
  id: number;
}

export class GetTraceByUsernameParams {
  /** day */
  day: string;

  /**
   * pageIndex
   * @format int32
   */
  pageIndex?: number;

  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;

  /** username */
  username: string;
}

export class LieyingGetTraceByUsernameParams {
  /** correction */
  correction?: string;

  /** day */
  day: string;

  /** gap */
  gap?: string;

  /**
   * pageIndex
   * @format int32
   */
  pageIndex?: number;

  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;

  /** recoup */
  recoup?: string;

  /** username */
  username: string;
}

export class LieyingTraceOfMineParams {
  /** correction */
  correction?: string;

  /** 日期，格式：YYYY-MM-DD */
  day: string;

  /** gap */
  gap?: string;

  /**
   * pageIndex
   * @format int32
   */
  pageIndex?: number;

  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;

  /** recoup */
  recoup?: string;
}

export class TraceOfMineParams {
  /** 日期，格式：YYYY-MM-DD */
  day: string;

  /**
   * pageIndex
   * @format int32
   */
  pageIndex?: number;

  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;
}

export class GetDepartmentParams {
  bmdm?: string[];
  disabled?: boolean;
  id?: number[];
  level?: "中队" | "大队" | "总队" | "支队";
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  parentBmdm?: string;

  /** @format int64 */
  parentId?: number;
}

export class DepartmentExistParams {
  bmdm?: string[];
  disabled?: boolean;
  id?: number[];
  level?: "中队" | "大队" | "总队" | "支队";
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  parentBmdm?: string;

  /** @format int64 */
  parentId?: number;
}

export class DepartmentTreeParams {
  /**
   * parentId
   * @format int64
   */
  parentId?: number;
}

export class GetPoliceParams {
  departmentCode?: string[];
  departmentId?: number[];
  id?: number[];
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  phone?: string;
  phoneLike?: string;
  policeCodeIn?: string[];
  policeCodeLike?: string;
  policeType?: string;
  position?: string;
  positionLike?: string;
  sfzmhm?: string;
  sfzmhmIn?: string[];
  sfzmhmLike?: string;
  xm?: string;
  xmLike?: string;
}

export class PoliceExistParams {
  departmentCode?: string[];
  departmentId?: number[];
  id?: number[];
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  phone?: string;
  phoneLike?: string;
  policeCodeIn?: string[];
  policeCodeLike?: string;
  policeType?: string;
  position?: string;
  positionLike?: string;
  sfzmhm?: string;
  sfzmhmIn?: string[];
  sfzmhmLike?: string;
  xm?: string;
  xmLike?: string;
}

export class PoliceFindByJybhParams {
  /** code */
  code: string;

  /** type */
  type: string;
}

export class PoliceImportParams {
  autoCreateUser?: boolean;
  defaultPassword?: string;
  errorPolicy?: "override" | "rollback" | "skip";
  passwordPolicy?: string;
  policeConflictPolicy?: "override" | "rollback" | "skip";
  policeIdentification?: string;
  usernameConflictPolicy?: "override" | "rollback" | "skip";
  usernamePolicy?: string;
  usernamePrefix?: string;
  usernameSuffix?: string;
}

export class GetPermissionParams {
  code?: string;
  codeLike?: string;
  descriptionLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  scope?: string;
  sectionLike?: string;
  titleLike?: string;
  type?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class ExistParams {
  code?: string;
  codeLike?: string;
  descriptionLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
  scope?: string;
  sectionLike?: string;
  titleLike?: string;
  type?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class RequestShortAuthenticationParams {
  /**
   * 有效期，单位秒。默认180秒
   * @format int32
   */
  duration?: number;
}

export class GetRoleParams {
  descriptionLike?: string;
  idIn?: number[];
  name?: string;
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  parentId?: number;

  /** @format int64 */
  permissionId?: number;
  scope?: string;
  type?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class ExistParams9 {
  descriptionLike?: string;
  idIn?: number[];
  name?: string;
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  parentId?: number;

  /** @format int64 */
  permissionId?: number;
  scope?: string;
  type?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class ListParams {
  descriptionLike?: string;
  idIn?: number[];
  name?: string;
  nameLike?: string;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  parentId?: number;

  /** @format int64 */
  permissionId?: number;
  scope?: string;
  type?: "Auditing" | "Common" | "Security" | "System" | "Work";
}

export class GetConfigParams {
  /** keys */
  keys: string[];
}

export class GetConfigCurrentUserParams {
  /** keys */
  keys: string[];
}

export class PostConfigCurrentUserParams {
  /** expire */
  expire?: string;
}

export class ConfigCurrentUserDepartmentParams {
  /** keys */
  keys: string[];
}

export class GetConfigDepartmentParams {
  /** department */
  department: string;

  /** keys */
  keys: string[];
}

export class PostConfigDepartmentParams {
  /** department */
  department: string;
}

export class GetConfigDepartmentConfigParams {
  /** department */
  department: string;

  /** keys */
  keys: string[];
}

export type PostConfigDepartmentConfigPayload = Record<string, Config>;

export class PostConfigDepartmentConfigParams {
  /** department */
  department: string;
}

export class ConfigHistoryParams {
  /** 部门代码 */
  department?: string;

  /** 配置KEY */
  key: string;

  /**
   * size
   * @format int32
   */
  size?: number;

  /** 用户名 */
  username?: string;
}

export class GetConfigUserParams {
  /** keys */
  keys: string[];

  /** username */
  username: string;
}

export class PostConfigUserParams {
  /** expire */
  expire?: string;

  /** username */
  username: string;
}

export class ToOssParams {
  /** bucket */
  bucket?: string;

  /** overwrite */
  overwrite?: boolean;
}

export class ByIdParams5 {
  /** format */
  format?: string;

  /** id */
  id: string;
}

export class ThumbnailByIdParams {
  /**
   * h
   * @format int32
   */
  h?: number;

  /**
   * q
   * @format int32
   */
  q?: number;

  /**
   * w
   * @format int32
   */
  w?: number;

  /** id */
  id: string;
}

export class GetThirdPlatformParams {
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;
}

export class AccessTokenByIdParams {
  /** reset */
  reset?: boolean;

  /** id */
  id: string;
}

export class RefreshParams {
  /** refresh */
  refresh: string;
}

export class GetUserParams {
  /** 根据可管理部门id查询。支持多选 */
  adminDepartmentId?: number[];

  /** 根据部门代码查询。支持多选 */
  department?: string[];

  /** 根据部门id查询。支持多选 */
  departmentId?: number[];

  /** 根据Email查询 */
  email?: string;
  emailLike?: string;

  /** 是否根据当前用户的管理部门进行过滤 */
  filterByAdminDepartment?: boolean;

  /** 根据id查询。支持多选 */
  id?: number[];

  /** 身份证号查询。支持多选 */
  idCardNumber?: string[];
  idCardNumberLike?: string;

  /** 是否包含子部门(根据department参数，自动补充子部门) */
  includeSubDepartment?: boolean;

  /** 是否为已删除用户 */
  isDeleted?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 根据权限code查询 */
  permissionCode?: string;

  /**
   * 根据权限id查询
   * @format int64
   */
  permissionId?: number;

  /** 根据手机号查询 */
  phone?: string;
  phoneLike?: string;

  /** 根据警号模糊查询 */
  policeCodeLike?: string;

  /**
   * 根据警员id查询
   * @format int64
   */
  policeId?: number;

  /** 根据警员类型查询 */
  policeType?: string;

  /** 根据姓名查询 */
  realName?: string;
  realNameLike?: string;

  /**
   * 根据角色id查询
   * @format int64
   */
  roleId?: number;

  /** 根据角色id查询 */
  roleIdIn?: number[];

  /** 根据角色名称查询 */
  roleName?: string;

  /** 根据角色名称批量查询 */
  roleNameIn?: string[];

  /** 根据用户名查询。支持多选 */
  username?: string[];

  /** 用户名模糊查询 */
  usernameLike?: string;
}

export class ExistParams3 {
  /** 根据可管理部门id查询。支持多选 */
  adminDepartmentId?: number[];

  /** 根据部门代码查询。支持多选 */
  department?: string[];

  /** 根据部门id查询。支持多选 */
  departmentId?: number[];

  /** 根据Email查询 */
  email?: string;
  emailLike?: string;

  /** 是否根据当前用户的管理部门进行过滤 */
  filterByAdminDepartment?: boolean;

  /** 根据id查询。支持多选 */
  id?: number[];

  /** 身份证号查询。支持多选 */
  idCardNumber?: string[];
  idCardNumberLike?: string;

  /** 是否包含子部门(根据department参数，自动补充子部门) */
  includeSubDepartment?: boolean;

  /** 是否为已删除用户 */
  isDeleted?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 根据权限code查询 */
  permissionCode?: string;

  /**
   * 根据权限id查询
   * @format int64
   */
  permissionId?: number;

  /** 根据手机号查询 */
  phone?: string;
  phoneLike?: string;

  /** 根据警号模糊查询 */
  policeCodeLike?: string;

  /**
   * 根据警员id查询
   * @format int64
   */
  policeId?: number;

  /** 根据警员类型查询 */
  policeType?: string;

  /** 根据姓名查询 */
  realName?: string;
  realNameLike?: string;

  /**
   * 根据角色id查询
   * @format int64
   */
  roleId?: number;

  /** 根据角色id查询 */
  roleIdIn?: number[];

  /** 根据角色名称查询 */
  roleName?: string;

  /** 根据角色名称批量查询 */
  roleNameIn?: string[];

  /** 根据用户名查询。支持多选 */
  username?: string[];

  /** 用户名模糊查询 */
  usernameLike?: string;
}

export class GetListParams {
  /** 根据可管理部门id查询。支持多选 */
  adminDepartmentId?: number[];

  /** 根据部门代码查询。支持多选 */
  department?: string[];

  /** 根据部门id查询。支持多选 */
  departmentId?: number[];

  /** 根据Email查询 */
  email?: string;
  emailLike?: string;

  /** 是否根据当前用户的管理部门进行过滤 */
  filterByAdminDepartment?: boolean;

  /** 根据id查询。支持多选 */
  id?: number[];

  /** 身份证号查询。支持多选 */
  idCardNumber?: string[];
  idCardNumberLike?: string;

  /** 是否包含子部门(根据department参数，自动补充子部门) */
  includeSubDepartment?: boolean;

  /** 是否为已删除用户 */
  isDeleted?: boolean;
  orderBy?: string[];

  /** @format int32 */
  pageIndex?: number;

  /** @format int32 */
  pageSize?: number;

  /** 根据权限code查询 */
  permissionCode?: string;

  /**
   * 根据权限id查询
   * @format int64
   */
  permissionId?: number;

  /** 根据手机号查询 */
  phone?: string;
  phoneLike?: string;

  /** 根据警号模糊查询 */
  policeCodeLike?: string;

  /**
   * 根据警员id查询
   * @format int64
   */
  policeId?: number;

  /** 根据警员类型查询 */
  policeType?: string;

  /** 根据姓名查询 */
  realName?: string;
  realNameLike?: string;

  /**
   * 根据角色id查询
   * @format int64
   */
  roleId?: number;

  /** 根据角色id查询 */
  roleIdIn?: number[];

  /** 根据角色名称查询 */
  roleName?: string;

  /** 根据角色名称批量查询 */
  roleNameIn?: string[];

  /** 根据用户名查询。支持多选 */
  username?: string[];

  /** 用户名模糊查询 */
  usernameLike?: string;
}

export type ListSimpleByRealnamePayload = string[];

export type PutAdminDepartmentByIdPayload = number[];

export type PutPermissionsByIdPayload = string[];

export class MessageSessionOnlineUsersParams {
  /** topic */
  topic?: string;
}

export class MessageSessionOnlineUsersCountParams {
  /** topic */
  topic?: string;
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
 * @title 授权服务
 * @version 1.0
 * @baseUrl //192.168.200.12:5000
 *
 * 授权服务
 */
class Api {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  captcha = {
    /**
     * No description
     *
     * @tags captcha
     * @name Captcha
     * @summary 基于用户session id生成关联的验证码图片
     * @request GET:/auth/captcha
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    captcha: (config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/captcha`,
        method: "GET",
        ...config,
      }),
  };
  checkPassword = {
    /**
     * @description 可用于平台内部敏感数据显示时的二次验证过程中
     *
     * @tags checkPassword
     * @name PutCheckPassword
     * @summary 检验用户密码是否输入正确
     * @request PUT:/auth/check-password
     * @response `200` `boolean` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putCheckPassword: (form: PasswordForm, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/check-password`,
        method: "PUT",
        data: form,
        ...config,
      }),
  };
  countOnlineUser = {
    /**
     * No description
     *
     * @tags countOnlineUser
     * @name CountOnlineUser
     * @summary 获取当前在线用户数量
     * @request GET:/auth/count-online-user
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    countOnlineUser: (config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/count-online-user`,
        method: "GET",
        ...config,
      }),
  };
  dictionary = {
    /**
     * @description 所需权限：dictionary:list
     *
     * @tags dictionary
     * @name GetDictionary
     * @summary 根据字典信息分页列表
     * @request GET:/auth/dictionary
     * @response `200` `PageResultDictionary` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getDictionary: (query: GetDictionaryParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultDictionary, void>({
        url: `/auth/dictionary`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:create
     *
     * @tags dictionary
     * @name PostDictionary
     * @summary 新增字典
     * @request POST:/auth/dictionary
     * @response `200` `Dictionary` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postDictionary: (bean: DictionaryCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Dictionary, void>({
        url: `/auth/dictionary`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:find
     *
     * @tags dictionary
     * @name FindByName
     * @summary 根据字典名称获取字典信息
     * @request GET:/auth/dictionary/find-by-name
     * @response `200` `Dictionary` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    findByName: (query: FindByNameParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Dictionary, void>({
        url: `/auth/dictionary/find-by-name`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:find
     *
     * @tags dictionary
     * @name Items
     * @summary 根据字典名称获取字典项目
     * @request GET:/auth/dictionary/items
     * @response `200` `(DictItem)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    items: (query: ItemsParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DictItem[], void>({
        url: `/auth/dictionary/items`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:find
     *
     * @tags dictionary
     * @name WithItems
     * @summary 根据字典名称获取字典详情
     * @request GET:/auth/dictionary/with-items
     * @response `200` `DictionaryWithItems` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    withItems: (query: WithItemsParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DictionaryWithItems, void>({
        url: `/auth/dictionary/with-items`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:find
     *
     * @tags dictionary
     * @name ItemsByDictionaryId
     * @summary 根据字典id获取字典项目
     * @request GET:/auth/dictionary/{dictionaryId}/items
     * @response `200` `(DictItem)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    itemsByDictionaryId: ({ dictionaryId, ...query }: ItemsByDictionaryIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DictItem[], void>({
        url: `/auth/dictionary/${dictionaryId}/items`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:find
     *
     * @tags dictionary
     * @name GetById
     * @summary 根据id获取字典信息
     * @request GET:/auth/dictionary/{id}
     * @response `200` `Dictionary` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Dictionary, void>({
        url: `/auth/dictionary/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:update
     *
     * @tags dictionary
     * @name PutById
     * @summary 修改字典
     * @request PUT:/auth/dictionary/{id}
     * @response `200` `Dictionary` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putById: (id: number, bean: DictionaryUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Dictionary, void>({
        url: `/auth/dictionary/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:delete
     *
     * @tags dictionary
     * @name DeleteById
     * @summary 删除字典
     * @request DELETE:/auth/dictionary/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/dictionary/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:create、dictionary:update (OR)
     *
     * @tags dictionary
     * @name PutItemsById
     * @summary 修改字段项目
     * @request PUT:/auth/dictionary/{id}/items
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putItemsById: (id: number, items: PutItemsByIdPayload, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/dictionary/${id}/items`,
        method: "PUT",
        data: items,
        ...config,
      }),

    /**
     * @description 批量删除字典项目<br>所需权限：dictionary:create、dictionary:update (OR)
     *
     * @tags dictionary
     * @name DeleteItemsById
     * @summary 批量删除字典项目
     * @request DELETE:/auth/dictionary/{id}/items
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteItemsById: ({ id, ...query }: DeleteItemsByIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/dictionary/${id}/items`,
        method: "DELETE",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：dictionary:create、dictionary:update (OR)
     *
     * @tags dictionary
     * @name DeleteItemsByIdAndItemId
     * @summary 删除字典项目
     * @request DELETE:/auth/dictionary/{id}/items/{itemId}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteItemsByIdAndItemId: (id: number, itemId: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/dictionary/${id}/items/${itemId}`,
        method: "DELETE",
        ...config,
      }),
  };
  ipBlock = {
    /**
     * @description 所需权限：ip:block:list
     *
     * @tags ipBlock
     * @name IpBlock
     * @summary 查询IP黑名单
     * @request GET:/auth/ip-block
     * @response `200` `PageResultIPBlock` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    ipBlock: (query: IpBlockParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultIPBlock, void>({
        url: `/auth/ip-block`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：ip:block:delete
     *
     * @tags ipBlock
     * @name DeleteById
     * @summary 删除黑名单
     * @request DELETE:/auth/ip-block/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ip-block/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * @description 所需权限：ip:block:disable
     *
     * @tags ipBlock
     * @name PutDisableById
     * @summary 操作IP黑名单失效
     * @request PUT:/auth/ip-block/{id}/disable
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putDisableById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ip-block/${id}/disable`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：ip:block:enable
     *
     * @tags ipBlock
     * @name PutEnableById
     * @summary 操作IP黑名单失效
     * @request PUT:/auth/ip-block/{id}/enable
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putEnableById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ip-block/${id}/enable`,
        method: "PUT",
        ...config,
      }),

    /**
     * No description
     *
     * @tags ipBlock
     * @name GetByIp
     * @summary 查询IP是否在黑名单中
     * @request GET:/auth/ip-block/{ip}
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getByIp: (ip: string, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/ip-block/${ip}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：ip:block:add
     *
     * @tags ipBlock
     * @name PutByIp
     * @summary 添加IP到黑名单
     * @request PUT:/auth/ip-block/{ip}
     * @response `200` `IPBlock` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putByIp: (ip: string, config: AxiosRequestConfig = {}) =>
      this.http.request<IPBlock, void>({
        url: `/auth/ip-block/${ip}`,
        method: "PUT",
        ...config,
      }),
  };
  ledger = {
    /**
     * @description 所需权限：ledger:login:list
     *
     * @tags ledger
     * @name LoginLedger
     * @summary 查询登陆台账
     * @request GET:/auth/ledger/login-ledger
     * @response `200` `PageResultLedgerSimple` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginLedger: (query: LoginLedgerParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultLedgerSimple, void>({
        url: `/auth/ledger/login-ledger`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags ledger
     * @name LoginLedgerSelf
     * @summary 当前用户登陆日志
     * @request GET:/auth/ledger/login-ledger-self
     * @response `200` `PageResultLedgerSimple` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginLedgerSelf: (query: LoginLedgerSelfParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultLedgerSimple, void>({
        url: `/auth/ledger/login-ledger-self`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：ledger:operation:list
     *
     * @tags ledger
     * @name OperateLedger
     * @summary 查询操作台账
     * @request GET:/auth/ledger/operate-ledger
     * @response `200` `PageResultLedgerSimple` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    operateLedger: (query: OperateLedgerParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultLedgerSimple, void>({
        url: `/auth/ledger/operate-ledger`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：ledger:safety:list
     *
     * @tags ledger
     * @name SafetyLedger
     * @summary 查询安全记录台账
     * @request GET:/auth/ledger/safety-ledger
     * @response `200` `PageResultLedgerSimple` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    safetyLedger: (query: SafetyLedgerParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultLedgerSimple, void>({
        url: `/auth/ledger/safety-ledger`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags ledger
     * @name Write
     * @summary 写操作日志
     * @request POST:/auth/ledger/write
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    write: (request: LedgerWriteRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ledger/write`,
        method: "POST",
        data: request,
        ...config,
      }),

    /**
     * @description 所需权限：ledger:login:list
     *
     * @tags ledger
     * @name ById
     * @summary 查询台账详情
     * @request GET:/auth/ledger/{id}
     * @response `200` `Ledger` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    byId: ({ id, ...query }: ByIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Ledger, void>({
        url: `/auth/ledger/${id}`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  location = {
    /**
     * No description
     *
     * @tags location
     * @name GetLocationByUsername
     * @summary 返回指定用户的当前位置
     * @request GET:/auth/location/get-location/{username}
     * @response `200` `UserLocation` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getLocationByUsername: (username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocation, void>({
        url: `/auth/location/get-location/${username}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：user:trajectory:list
     *
     * @tags location
     * @name GetTraceByUsername
     * @summary 返回指定用户某个时间段内的位置信息
     * @request GET:/auth/location/get-trace/{username}
     * @response `200` `UserLocationTrace` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getTraceByUsername: ({ username, ...query }: GetTraceByUsernameParams, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocationTrace, void>({
        url: `/auth/location/get-trace/${username}`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:trajectory:list
     *
     * @tags location
     * @name LieyingGetTraceByTimeRangeMultiUser
     * @summary [猎鹰]返回批量用户指定时间区间的轨迹信息
     * @request POST:/auth/location/lieying/get-trace-by-time-range/multi-user
     * @response `200` `(UserLocationTrace)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    lieyingGetTraceByTimeRangeMultiUser: (request: MultiUserTrackTimeRangeQuery, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocationTrace[], void>({
        url: `/auth/location/lieying/get-trace-by-time-range/multi-user`,
        method: "POST",
        data: request,
        ...config,
      }),

    /**
     * @description 不支持跨天查询<br>所需权限：user:trajectory:list
     *
     * @tags location
     * @name LieyingGetTraceMultiUser
     * @summary [猎鹰]返回多个用户指定日期的轨迹信息
     * @request POST:/auth/location/lieying/get-trace/multi-user
     * @response `200` `(UserLocationTrace)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    lieyingGetTraceMultiUser: (request: MultiUserTrackQuery, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocationTrace[], void>({
        url: `/auth/location/lieying/get-trace/multi-user`,
        method: "POST",
        data: request,
        ...config,
      }),

    /**
     * @description 不支持跨天查询<br>所需权限：user:trajectory:list
     *
     * @tags location
     * @name LieyingGetTraceByUsername
     * @summary [猎鹰]返回指定用户指定日期的轨迹信息
     * @request GET:/auth/location/lieying/get-trace/{username}
     * @response `200` `UserLocationTrace` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    lieyingGetTraceByUsername: (
      { username, ...query }: LieyingGetTraceByUsernameParams,
      config: AxiosRequestConfig = {},
    ) =>
      this.http.request<UserLocationTrace, void>({
        url: `/auth/location/lieying/get-trace/${username}`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 不支持跨天查询
     *
     * @tags location
     * @name LieyingTraceOfMine
     * @summary [猎鹰]获取当前用户的轨迹
     * @request GET:/auth/location/lieying/trace-of-mine
     * @response `200` `UserLocationTrace` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    lieyingTraceOfMine: (query: LieyingTraceOfMineParams, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocationTrace, void>({
        url: `/auth/location/lieying/trace-of-mine`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags location
     * @name List
     * @summary 批量列出用户的当前位置
     * @request POST:/auth/location/list
     * @response `200` `(UserLocation)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    list: (queryBean: UserLocationQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocation[], void>({
        url: `/auth/location/list`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags location
     * @name ListByUsername
     * @summary 批量返回指定用户名的当前位置
     * @request POST:/auth/location/list/by-username
     * @response `200` `(UserLocation)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listByUsername: (request: UserLocationRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocation[], void>({
        url: `/auth/location/list/by-username`,
        method: "POST",
        data: request,
        ...config,
      }),

    /**
     * No description
     *
     * @tags location
     * @name Point
     * @summary 上传坐标点
     * @request POST:/auth/location/point
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    point: (data: Point, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/location/point`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags location
     * @name PublicPoint
     * @summary 上传坐标点
     * @request POST:/auth/location/public/point
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    publicPoint: (data: LocationUploadRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/location/public/point`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags location
     * @name TraceOfMine
     * @summary 获取当前用户的轨迹
     * @request GET:/auth/location/trace-of-mine
     * @response `200` `UserLocationTrace` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    traceOfMine: (query: TraceOfMineParams, config: AxiosRequestConfig = {}) =>
      this.http.request<UserLocationTrace, void>({
        url: `/auth/location/trace-of-mine`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags login
     * @name Login
     * @summary 用户登录
     * @request POST:/auth/login
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    login: (form: UsernamePasswordLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/login`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  loginByIdCard = {
    /**
     * No description
     *
     * @tags loginByIdCard
     * @name LoginByIdCard
     * @summary 身份证登录
     * @request POST:/auth/login-by-id-card
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginByIdCard: (form: IdCardLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/login-by-id-card`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  loginByPhone = {
    /**
     * No description
     *
     * @tags loginByPhone
     * @name LoginByPhone
     * @summary 手机号登录
     * @request POST:/auth/login-by-phone
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginByPhone: (form: PhoneLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/login-by-phone`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  loginByThirdPlatformCode = {
    /**
     * No description
     *
     * @tags loginByThirdPlatformCode
     * @name LoginByThirdPlatformCode
     * @summary 第三方平台票据登陆
     * @request POST:/auth/login-by-third-platform-code
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginByThirdPlatformCode: (form: ThirdPlatformLoginRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/login-by-third-platform-code`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags logout
     * @name Logout
     * @summary 用户注销
     * @request POST:/auth/logout
     * @response `200` `string` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    logout: (config: AxiosRequestConfig = {}) =>
      this.http.request<string, void>({
        url: `/auth/logout`,
        method: "POST",
        ...config,
      }),
  };
  me = {
    /**
     * No description
     *
     * @tags me
     * @name GetMe
     * @summary 获取个人信息
     * @request GET:/auth/me
     * @response `200` `User` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getMe: (config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/me`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags me
     * @name PutMe
     * @summary 修改个人信息
     * @request PUT:/auth/me
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putMe: (body: UserProfileUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/me`,
        method: "PUT",
        data: body,
        ...config,
      }),

    /**
     * No description
     *
     * @tags me
     * @name PutChangePassword
     * @summary 修改个人密码
     * @request PUT:/auth/me/change-password
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putChangePassword: (form: ChangePasswordForm, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/me/change-password`,
        method: "PUT",
        data: form,
        ...config,
      }),
  };
  organization = {
    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name GetDepartment
     * @summary 列出所有部门
     * @request GET:/auth/organization/department
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getDepartment: (query: GetDepartmentParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:create
     *
     * @tags organization
     * @name PostDepartment
     * @summary 创建部门
     * @request POST:/auth/organization/department
     * @response `200` `Department` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postDepartment: (bean: DepartmentCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：department:find
     *
     * @tags organization
     * @name DepartmentByBmdm
     * @summary [按部门代码]根据部门代码获取部门信息
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}
     * @response `200` `Department` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentAllChildrenBmdmByBmdm
     * @summary [按部门代码]获取指定部门的子级部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/all-children-bmdm
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentAllChildrenBmdmByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/all-children-bmdm`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentAllParentByBmdm
     * @summary [按部门代码]获取指定部门的所有上级部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/all-parent
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentAllParentByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/all-parent`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentAllParentBmdmByBmdm
     * @summary [按部门代码]获取指定部门的所有上级部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/all-parent-bmdm
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentAllParentBmdmByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/all-parent-bmdm`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentBrothersByBmdm
     * @summary [按部门代码]获取指定部门的兄弟部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/brothers
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentBrothersByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/brothers`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentChildrenByBmdm
     * @summary [按部门代码]获取指定部门的子部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/children
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentChildrenByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/children`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentParentByBmdm
     * @summary [按部门代码]获取指定部门的父部门
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/parent
     * @response `200` `Department` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentParentByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/parent`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name DepartmentTreeByBmdm
     * @summary [按部门代码]获取指定部门的子部门树. bmdm不得为空
     * @request GET:/auth/organization/department/by-bmdm/{bmdm}/tree
     * @response `200` `DepartmentTree` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentTreeByBmdm: (bmdm: string, config: AxiosRequestConfig = {}) =>
      this.http.request<DepartmentTree, void>({
        url: `/auth/organization/department/by-bmdm/${bmdm}/tree`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name DepartmentExist
     * @summary 查询指定条件的部门是否存在
     * @request GET:/auth/organization/department/exist
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentExist: (query: DepartmentExistParams, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/organization/department/exist`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:create
     *
     * @tags organization
     * @name DepartmentImport
     * @summary 导入部门
     * @request POST:/auth/organization/department/import
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentImport: (file: any, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/organization/department/import`,
        method: "POST",
        data: file,
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentList
     * @summary 列出所有部门
     * @request POST:/auth/organization/department/list
     * @response `200` `(Department)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentList: (queryBean: DepartmentQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/list`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name DepartmentResetDigest
     * @summary 重置数据签名
     * @request GET:/auth/organization/department/reset-digest
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentResetDigest: (config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/organization/department/reset-digest`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name DepartmentTree
     * @summary 获取指定部门的子部门树. 若不指定部门，则列出所有根级部门展开的树
     * @request GET:/auth/organization/department/tree
     * @response `200` `DepartmentTree` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentTree: (query: DepartmentTreeParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DepartmentTree, void>({
        url: `/auth/organization/department/tree`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:find
     *
     * @tags organization
     * @name GetDepartmentById
     * @summary 根据id获取部门信息
     * @request GET:/auth/organization/department/{id}
     * @response `200` `Department` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getDepartmentById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:update
     *
     * @tags organization
     * @name PutDepartmentById
     * @summary 修改部门
     * @request PUT:/auth/organization/department/{id}
     * @response `200` `Department` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putDepartmentById: (id: number, bean: DepartmentUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：department:delete
     *
     * @tags organization
     * @name DeleteDepartmentById
     * @summary 删除部门
     * @request DELETE:/auth/organization/department/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteDepartmentById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/organization/department/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentAllParentById
     * @summary 获取指定部门的所有上级部门
     * @request GET:/auth/organization/department/{id}/all-parent
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentAllParentById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/${id}/all-parent`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentBrothersById
     * @summary 获取指定部门的兄弟部门
     * @request GET:/auth/organization/department/{id}/brothers
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentBrothersById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/${id}/brothers`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentChildrenById
     * @summary 获取指定部门的子部门
     * @request GET:/auth/organization/department/{id}/children
     * @response `200` `(Department)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentChildrenById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Department[], void>({
        url: `/auth/organization/department/${id}/children`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：department:list
     *
     * @tags organization
     * @name DepartmentParentById
     * @summary 获取指定部门的父部门
     * @request GET:/auth/organization/department/{id}/parent
     * @response `200` `Department` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    departmentParentById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Department, void>({
        url: `/auth/organization/department/${id}/parent`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：police:list
     *
     * @tags organization
     * @name GetPolice
     * @summary 列出警员
     * @request GET:/auth/organization/police
     * @response `200` `DesensitizePageResultPolice` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getPolice: (query: GetPoliceParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DesensitizePageResultPolice, void>({
        url: `/auth/organization/police`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：police:create
     *
     * @tags organization
     * @name PostPolice
     * @summary 创建警员
     * @request POST:/auth/organization/police
     * @response `200` `Police` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postPolice: (bean: PoliceCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Police, void>({
        url: `/auth/organization/police`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name PoliceExist
     * @summary 查询指定条件的警员是否存在
     * @request GET:/auth/organization/police/exist
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeExist: (query: PoliceExistParams, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/organization/police/exist`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：police:find
     *
     * @tags organization
     * @name PoliceFindByJybh
     * @summary 根据警号和类型获取警员信息
     * @request GET:/auth/organization/police/find-by-jybh
     * @response `200` `Police` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeFindByJybh: (query: PoliceFindByJybhParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Police, void>({
        url: `/auth/organization/police/find-by-jybh`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：police:create
     *
     * @tags organization
     * @name PoliceImport
     * @summary 导入警员
     * @request POST:/auth/organization/police/import
     * @response `200` `ImportResultPoliceImportResultDetail` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeImport: (query: PoliceImportParams, file: any, config: AxiosRequestConfig = {}) =>
      this.http.request<ImportResultPoliceImportResultDetail, void>({
        url: `/auth/organization/police/import`,
        method: "POST",
        params: query,
        data: file,
        ...config,
      }),

    /**
     * @description 所需权限：police:list
     *
     * @tags organization
     * @name PoliceList
     * @summary 列出警员
     * @request POST:/auth/organization/police/list
     * @response `200` `DesensitizePageResultPolice` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeList: (queryBean: PoliceQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<DesensitizePageResultPolice, void>({
        url: `/auth/organization/police/list`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags organization
     * @name PutPoliceSyncCurrentUserPolice
     * @summary 同步当前用户绑定的警员信息
     * @request PUT:/auth/organization/police/sync-current-user-police
     * @response `200` `Police` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putPoliceSyncCurrentUserPolice: (config: AxiosRequestConfig = {}) =>
      this.http.request<Police, void>({
        url: `/auth/organization/police/sync-current-user-police`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：police:find
     *
     * @tags organization
     * @name GetPoliceById
     * @summary 根据id获取警员信息
     * @request GET:/auth/organization/police/{id}
     * @response `200` `Police` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getPoliceById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Police, void>({
        url: `/auth/organization/police/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：police:update
     *
     * @tags organization
     * @name PutPoliceById
     * @summary 修改警员信息
     * @request PUT:/auth/organization/police/{id}
     * @response `200` `Police` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putPoliceById: (id: number, bean: PoliceUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Police, void>({
        url: `/auth/organization/police/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：police:delete
     *
     * @tags organization
     * @name DeletePoliceById
     * @summary 删除警员
     * @request DELETE:/auth/organization/police/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deletePoliceById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/organization/police/${id}`,
        method: "DELETE",
        ...config,
      }),
  };
  permission = {
    /**
     * @description 所需权限：permission:list
     *
     * @tags permission
     * @name GetPermission
     * @summary 列出权限
     * @request GET:/auth/permission
     * @response `200` `(Permission)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getPermission: (query: GetPermissionParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Permission[], void>({
        url: `/auth/permission`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：permission:create
     *
     * @tags permission
     * @name PostPermission
     * @summary 创建权限
     * @request POST:/auth/permission
     * @response `200` `Permission` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postPermission: (bean: Permission, config: AxiosRequestConfig = {}) =>
      this.http.request<Permission, void>({
        url: `/auth/permission`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags permission
     * @name Exist
     * @summary 查询指定条件的权限是否存在
     * @request GET:/auth/permission/exist
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    exist: (query: ExistParams, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/permission/exist`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：permission:find
     *
     * @tags permission
     * @name GetByCode
     * @summary 根据权限编码获取权限信息
     * @request GET:/auth/permission/{code}
     * @response `200` `Permission` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getByCode: (code: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Permission, void>({
        url: `/auth/permission/${code}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：permission:update
     *
     * @tags permission
     * @name PutByCode
     * @summary 修改权限
     * @request PUT:/auth/permission/{code}
     * @response `200` `Permission` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putByCode: (code: string, bean: Permission, config: AxiosRequestConfig = {}) =>
      this.http.request<Permission, void>({
        url: `/auth/permission/${code}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：permission:delete
     *
     * @tags permission
     * @name DeleteByCode
     * @summary 删除权限
     * @request DELETE:/auth/permission/{code}
     * @response `200` `number` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteByCode: (code: string, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/permission/${code}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * @description 所需权限：permission:option:update
     *
     * @tags permission
     * @name PutOptionsByCode
     * @summary 修改权限配置
     * @request PUT:/auth/permission/{code}/options
     * @response `200` `Permission` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putOptionsByCode: (code: string, options: PermissionOptions, config: AxiosRequestConfig = {}) =>
      this.http.request<Permission, void>({
        url: `/auth/permission/${code}/options`,
        method: "PUT",
        data: options,
        ...config,
      }),
  };
  policeLogin = {
    /**
     * No description
     *
     * @tags policeLogin
     * @name PoliceLogin
     * @summary 身份证登录
     * @request POST:/auth/police-login
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeLogin: (form: IdCardLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/police-login`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  policeUser = {
    /**
     * @description 所需权限：police:create
     *
     * @tags policeUser
     * @name PoliceUser
     * @summary 创建警员用户
     * @request POST:/auth/police-user
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeUser: (bean: PoliceUserCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/police-user`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：police:update
     *
     * @tags policeUser
     * @name PutById
     * @summary 修改警员用户信息
     * @request PUT:/auth/police-user/{id}
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putById: (id: number, bean: PoliceUserUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/police-user/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：police:delete
     *
     * @tags policeUser
     * @name PutDeleteById
     * @summary 删除警员用户（软删除）
     * @request PUT:/auth/police-user/{id}/delete
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putDeleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/police-user/${id}/delete`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：police:restore
     *
     * @tags policeUser
     * @name PutRestoreById
     * @summary 恢复警员用户
     * @request PUT:/auth/police-user/{id}/restore
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putRestoreById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/police-user/${id}/restore`,
        method: "PUT",
        ...config,
      }),
  };
  requestShortAuthentication = {
    /**
     * @description 凭据效力等同于当前用户授权，该token不可刷新，有效期结束后失效
     *
     * @tags requestShortAuthentication
     * @name RequestShortAuthentication
     * @summary 申领临时凭据
     * @request GET:/auth/request-short-authentication
     * @response `200` `string` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    requestShortAuthentication: (query: RequestShortAuthenticationParams, config: AxiosRequestConfig = {}) =>
      this.http.request<string, void>({
        url: `/auth/request-short-authentication`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  role = {
    /**
     * @description 所需权限：role:list
     *
     * @tags role
     * @name GetRole
     * @summary 列出角色
     * @request GET:/auth/role
     * @response `200` `(Role)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getRole: (query: GetRoleParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Role[], void>({
        url: `/auth/role`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：role:create
     *
     * @tags role
     * @name PostRole
     * @summary 创建角色
     * @request POST:/auth/role
     * @response `200` `Role` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postRole: (bean: RoleCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Role, void>({
        url: `/auth/role`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags role
     * @name Exist
     * @summary 查询指定条件的角色是否存在
     * @request GET:/auth/role/exist
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    exist: (query: ExistParams9, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/role/exist`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：role:list
     *
     * @tags role
     * @name List
     * @summary 列出角色
     * @request GET:/auth/role/list
     * @response `200` `(Role)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    list: (query: ListParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Role[], void>({
        url: `/auth/role/list`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：role:find
     *
     * @tags role
     * @name GetById
     * @summary 根据id获取角色信息
     * @request GET:/auth/role/{id}
     * @response `200` `Role` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<Role, void>({
        url: `/auth/role/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：role:update
     *
     * @tags role
     * @name PutById
     * @summary 修改角色
     * @request PUT:/auth/role/{id}
     * @response `200` `Role` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putById: (id: number, bean: RoleUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<Role, void>({
        url: `/auth/role/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：role:delete
     *
     * @tags role
     * @name DeleteById
     * @summary 删除角色
     * @request DELETE:/auth/role/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/role/${id}`,
        method: "DELETE",
        ...config,
      }),
  };
  settings = {
    /**
     * @description 所需权限：global:config:read
     *
     * @tags settings
     * @name GetConfig
     * @summary 读取系统配置
     * @request GET:/auth/settings/config
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfig: (query: GetConfigParams, config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：global:config:write
     *
     * @tags settings
     * @name PostConfig
     * @summary 写入系统配置
     * @request POST:/auth/settings/config
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfig: (configs: object, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/settings/config`,
        method: "POST",
        data: configs,
        ...config,
      }),

    /**
     * @description 所需权限：auth:config:read
     *
     * @tags settings
     * @name GetConfigAuth
     * @summary 读取Auth模块配置
     * @request GET:/auth/settings/config/auth
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfigAuth: (config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config/auth`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：auth:config:write
     *
     * @tags settings
     * @name PostConfigAuth
     * @summary 写入Auth模块配置
     * @request POST:/auth/settings/config/auth
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfigAuth: (configs: object, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/settings/config/auth`,
        method: "POST",
        data: configs,
        ...config,
      }),

    /**
     * @description 所需权限：user:self:config:read
     *
     * @tags settings
     * @name GetConfigCurrentUser
     * @summary 读取当前用户配置
     * @request GET:/auth/settings/config/current-user
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfigCurrentUser: (query: GetConfigCurrentUserParams, config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config/current-user`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:self:config:write
     *
     * @tags settings
     * @name PostConfigCurrentUser
     * @summary 写入当前用户配置
     * @request POST:/auth/settings/config/current-user
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfigCurrentUser: (query: PostConfigCurrentUserParams, configs: object, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/settings/config/current-user`,
        method: "POST",
        params: query,
        data: configs,
        ...config,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name ConfigCurrentUserDepartment
     * @summary 读取当前用户所在部门的配置
     * @request GET:/auth/settings/config/current-user-department
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    configCurrentUserDepartment: (query: ConfigCurrentUserDepartmentParams, config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config/current-user-department`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:config:read
     *
     * @tags settings
     * @name GetConfigDepartment
     * @summary 读取部门配置
     * @request GET:/auth/settings/config/department
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfigDepartment: (query: GetConfigDepartmentParams, config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config/department`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:config:write
     *
     * @tags settings
     * @name PostConfigDepartment
     * @summary 写入部门配置
     * @request POST:/auth/settings/config/department
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfigDepartment: (query: PostConfigDepartmentParams, configs: object, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/settings/config/department`,
        method: "POST",
        params: query,
        data: configs,
        ...config,
      }),

    /**
     * @description 所需权限：department:config:read
     *
     * @tags settings
     * @name GetConfigDepartmentConfig
     * @summary 读取部门配置(新)
     * @request GET:/auth/settings/config/department-config
     * @response `200` `Record<string, DepartmentConfig>` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfigDepartmentConfig: (query: GetConfigDepartmentConfigParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Record<string, DepartmentConfig>, void>({
        url: `/auth/settings/config/department-config`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：department:config:write
     *
     * @tags settings
     * @name PostConfigDepartmentConfig
     * @summary 写入部门配置(新)
     * @request POST:/auth/settings/config/department-config
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfigDepartmentConfig: (
      query: PostConfigDepartmentConfigParams,
      configs: PostConfigDepartmentConfigPayload,
      config: AxiosRequestConfig = {},
    ) =>
      this.http.request<void, void>({
        url: `/auth/settings/config/department-config`,
        method: "POST",
        params: query,
        data: configs,
        ...config,
      }),

    /**
     * @description 若传入username，则返回用户配置变更记录；若传入department，则返回部门配置变更记录；否则返回系统配置变更记录。最多保留最近的200次变更记录<br>所需权限：global:config:read、user:config:read、department:config:read (OR)
     *
     * @tags settings
     * @name ConfigHistory
     * @summary 查询配置变更历史
     * @request GET:/auth/settings/config/history
     * @response `200` `(ConfigWithTimestamp)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    configHistory: (query: ConfigHistoryParams, config: AxiosRequestConfig = {}) =>
      this.http.request<ConfigWithTimestamp[], void>({
        url: `/auth/settings/config/history`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:config:read
     *
     * @tags settings
     * @name GetConfigUser
     * @summary 读取用户配置
     * @request GET:/auth/settings/config/user
     * @response `200` `InputStream` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getConfigUser: (query: GetConfigUserParams, config: AxiosRequestConfig = {}) =>
      this.http.request<InputStream, void>({
        url: `/auth/settings/config/user`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:config:write
     *
     * @tags settings
     * @name PostConfigUser
     * @summary 写入用户配置
     * @request POST:/auth/settings/config/user
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postConfigUser: (query: PostConfigUserParams, configs: object, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/settings/config/user`,
        method: "POST",
        params: query,
        data: configs,
        ...config,
      }),

    /**
     * @description 所需权限：user:config:read
     *
     * @tags settings
     * @name ConfigUsers
     * @summary 读取用户配置（批量）
     * @request POST:/auth/settings/config/users
     * @response `200` `(UserConfigs)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    configUsers: (request: ReadUserConfigRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<UserConfigs[], void>({
        url: `/auth/settings/config/users`,
        method: "POST",
        data: request,
        ...config,
      }),
  };
  smsVerify = {
    /**
     * No description
     *
     * @tags smsVerify
     * @name Check
     * @summary 检查短信验证码有效性
     * @request POST:/auth/sms-verify/check
     * @response `200` `boolean` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    check: (request: SmsVerifyCheckRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/sms-verify/check`,
        method: "POST",
        data: request,
        ...config,
      }),

    /**
     * No description
     *
     * @tags smsVerify
     * @name Send
     * @summary 发送短信验证码
     * @request POST:/auth/sms-verify/send
     * @response `200` `string` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    send: (request: SmsVerifyRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<string, void>({
        url: `/auth/sms-verify/send`,
        method: "POST",
        data: request,
        ...config,
      }),
  };
  sms = {
    /**
     * No description
     *
     * @tags sms
     * @name Send
     * @summary 发送短信
     * @request POST:/auth/sms/send
     * @response `200` `SendResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    send: (request: MessageSendRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<SendResponse, void>({
        url: `/auth/sms/send`,
        method: "POST",
        data: request,
        ...config,
      }),
  };
  staticResource = {
    /**
     * No description
     *
     * @tags staticResource
     * @name ExcelByFile
     * @summary 下载警员导入模版
     * @request GET:/auth/static-resource/excel/{file}
     * @response `200` `Resource` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    excelByFile: (file: string, config: AxiosRequestConfig = {}) =>
      this.http.request<Resource, void>({
        url: `/auth/static-resource/excel/${file}`,
        method: "GET",
        ...config,
      }),
  };
  storageTransfer = {
    /**
     * No description
     *
     * @tags storageTransfer
     * @name ToOss
     * @summary 文件迁移
     * @request POST:/auth/storage-transfer/to-oss
     * @response `200` `number` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    toOss: (query: ToOssParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/storage-transfer/to-oss`,
        method: "POST",
        params: query,
        ...config,
      }),
  };
  storage = {
    /**
     * No description
     *
     * @tags storage
     * @name Upload
     * @summary 文件上传
     * @request POST:/auth/storage/upload
     * @deprecated
     * @response `200` `string` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    upload: (file: any, config: AxiosRequestConfig = {}) =>
      this.http.request<string, void>({
        url: `/auth/storage/upload`,
        method: "POST",
        data: file,
        ...config,
      }),

    /**
     * @description format: base64/redirect-url
     *
     * @tags storage
     * @name ById
     * @summary 文件下载
     * @request GET:/auth/storage/{id}
     * @deprecated
     * @response `200` `Resource` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    byId: ({ id, ...query }: ByIdParams5, config: AxiosRequestConfig = {}) =>
      this.http.request<Resource, void>({
        url: `/auth/storage/${id}`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags storage
     * @name MetaById
     * @summary 文件元信息
     * @request GET:/auth/storage/{id}/meta
     * @deprecated
     * @response `200` `FileObjectMeta` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    metaById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<FileObjectMeta, void>({
        url: `/auth/storage/${id}/meta`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags storage
     * @name ThumbnailById
     * @summary 图片缩略图
     * @request GET:/auth/storage/{id}/thumbnail
     * @deprecated
     * @response `200` `Resource` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    thumbnailById: ({ id, ...query }: ThumbnailByIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Resource, void>({
        url: `/auth/storage/${id}/thumbnail`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  thirdPlatform = {
    /**
     * No description
     *
     * @tags thirdPlatform
     * @name GetThirdPlatform
     * @summary page
     * @request GET:/auth/third-platform
     * @response `200` `PageResultThirdPlatformEntity` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getThirdPlatform: (query: GetThirdPlatformParams, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultThirdPlatformEntity, void>({
        url: `/auth/third-platform`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * No description
     *
     * @tags thirdPlatform
     * @name PostThirdPlatform
     * @summary save
     * @request POST:/auth/third-platform
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postThirdPlatform: (data: ThirdPlatformEntity, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/third-platform`,
        method: "POST",
        data: data,
        ...config,
      }),

    /**
     * No description
     *
     * @tags thirdPlatform
     * @name GetById
     * @summary get
     * @request GET:/auth/third-platform/{id}
     * @response `200` `ThirdPlatformEntity` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<ThirdPlatformEntity, void>({
        url: `/auth/third-platform/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags thirdPlatform
     * @name DeleteById
     * @summary delete
     * @request DELETE:/auth/third-platform/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteById: (id: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/third-platform/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * No description
     *
     * @tags thirdPlatform
     * @name AccessTokenById
     * @summary getAccessToken
     * @request GET:/auth/third-platform/{id}/access-token
     * @response `200` `AccessToken` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    accessTokenById: ({ id, ...query }: AccessTokenByIdParams, config: AxiosRequestConfig = {}) =>
      this.http.request<AccessToken, void>({
        url: `/auth/third-platform/${id}/access-token`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  time = {
    /**
     * No description
     *
     * @tags time
     * @name Time
     * @summary 系统当前时间
     * @request GET:/auth/time
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    time: (config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/time`,
        method: "GET",
        ...config,
      }),
  };
  token = {
    /**
     * @description 原有的Token不会立即过期
     *
     * @tags token
     * @name Refresh
     * @summary 刷新Token
     * @request GET:/auth/token/refresh
     * @response `200` `Token` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    refresh: (query: RefreshParams, config: AxiosRequestConfig = {}) =>
      this.http.request<Token, void>({
        url: `/auth/token/refresh`,
        method: "GET",
        params: query,
        ...config,
      }),
  };
  user = {
    /**
     * @description 所需权限：user:list
     *
     * @tags user
     * @name GetUser
     * @summary 列出用户
     * @request GET:/auth/user
     * @response `200` `DesensitizePageResultUser` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getUser: (query: GetUserParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DesensitizePageResultUser, void>({
        url: `/auth/user`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:create
     *
     * @tags user
     * @name PostUser
     * @summary 创建用户
     * @request POST:/auth/user
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postUser: (bean: UserCreateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user`,
        method: "POST",
        data: bean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ClearCacheByUsername
     * @summary 手动清除指定用户名的缓存数据
     * @request GET:/auth/user/clear-cache/{username}
     * @response `200` `void` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    clearCacheByUsername: (username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/clear-cache/${username}`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Exist
     * @summary 查询指定条件的用户是否存在
     * @request GET:/auth/user/exist
     * @response `200` `boolean` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    exist: (query: ExistParams3, config: AxiosRequestConfig = {}) =>
      this.http.request<boolean, void>({
        url: `/auth/user/exist`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name FindByUsernameByUsername
     * @summary 根据用户名获取用户详情
     * @request GET:/auth/user/find-by-username/{username}
     * @response `200` `User` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    findByUsernameByUsername: (username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user/find-by-username/${username}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name FindByUsernameSimpleByUsername
     * @summary 根据用户名获取用户简项目信息
     * @request GET:/auth/user/find-by-username/{username}/simple
     * @response `200` `UserSimpleEx` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    findByUsernameSimpleByUsername: (username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleEx, void>({
        url: `/auth/user/find-by-username/${username}/simple`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：user:list
     *
     * @tags user
     * @name GetList
     * @summary 列出用户
     * @request GET:/auth/user/list
     * @response `200` `DesensitizePageResultUser` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getList: (query: GetListParams, config: AxiosRequestConfig = {}) =>
      this.http.request<DesensitizePageResultUser, void>({
        url: `/auth/user/list`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description 所需权限：user:list
     *
     * @tags user
     * @name PostList
     * @summary 列出用户
     * @request POST:/auth/user/list
     * @response `200` `DesensitizePageResultUser` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    postList: (queryBean: UserQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<DesensitizePageResultUser, void>({
        url: `/auth/user/list`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ListSimpleInfo
     * @summary 请使用 user/list/simple
     * @request POST:/auth/user/list-simple-info
     * @deprecated
     * @response `200` `PageResultUserSimpleEx` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimpleInfo: (queryBean: UserQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultUserSimpleEx, void>({
        url: `/auth/user/list-simple-info`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ListSimple
     * @summary 列出用户简项信息
     * @request POST:/auth/user/list/simple
     * @response `200` `PageResultUserSimpleEx` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimple: (queryBean: UserQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultUserSimpleEx, void>({
        url: `/auth/user/list/simple`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name ListSimpleByRealname
     * @summary 根据用户姓名批量获取用户简项信息
     * @request POST:/auth/user/list/simple-by-realname
     * @response `200` `(UserSimpleEx)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimpleByRealname: (realNameList: ListSimpleByRealnamePayload, config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleEx[], void>({
        url: `/auth/user/list/simple-by-realname`,
        method: "POST",
        data: realNameList,
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name ListSimpleByUsername
     * @summary 根据用户名批量获取用户简项信息
     * @request POST:/auth/user/list/simple-by-username
     * @response `200` `(UserSimpleEx)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimpleByUsername: (userNameList: string[], config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleEx[], void>({
        url: `/auth/user/list/simple-by-username`,
        method: "POST",
        data: userNameList,
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ListSimpleWithLocation
     * @summary 列出用户简项信息(带坐标 / 该接口结果将缓存)
     * @request POST:/auth/user/list/simple-with-location
     * @response `200` `PageResultUserSimpleWithLocation` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimpleWithLocation: (queryBean: UserQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultUserSimpleWithLocation, void>({
        url: `/auth/user/list/simple-with-location`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name ListSimpleWithLocationByUsername
     * @summary 根据用户名批量获取用户简项信息(带坐标)
     * @request POST:/auth/user/list/simple-with-location-by-username
     * @response `200` `(UserSimpleWithLocation)[]` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listSimpleWithLocationByUsername: (userNameList: string[], config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleWithLocation[], void>({
        url: `/auth/user/list/simple-with-location-by-username`,
        method: "POST",
        data: userNameList,
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ListUsername
     * @summary 列出用户名
     * @request POST:/auth/user/list/username
     * @response `200` `PageResultString` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    listUsername: (queryBean: UserQueryBean, config: AxiosRequestConfig = {}) =>
      this.http.request<PageResultString, void>({
        url: `/auth/user/list/username`,
        method: "POST",
        data: queryBean,
        ...config,
      }),

    /**
     * @description 所需权限：user:find
     *
     * @tags user
     * @name GetById
     * @summary 根据id获取用户详情
     * @request GET:/auth/user/{id}
     * @response `200` `User` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user/${id}`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：user:update
     *
     * @tags user
     * @name PutById
     * @summary 修改用户信息
     * @request PUT:/auth/user/{id}
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putById: (id: number, bean: UserUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user/${id}`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：user:destroy
     *
     * @tags user
     * @name DeleteById
     * @summary 删除用户（物理删除，无法恢复）
     * @request DELETE:/auth/user/{id}
     * @response `200` `void` OK
     * @response `204` `void` No Content
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     */
    deleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}`,
        method: "DELETE",
        ...config,
      }),

    /**
     * No description
     *
     * @tags user
     * @name GetAdminDepartmentById
     * @summary 获取用户可管理部门列表
     * @request GET:/auth/user/{id}/admin-department
     * @response `200` `(number)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    getAdminDepartmentById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<number[], void>({
        url: `/auth/user/${id}/admin-department`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：user:admin:department:manage
     *
     * @tags user
     * @name PutAdminDepartmentById
     * @summary 设置用户可管理部门列表
     * @request PUT:/auth/user/{id}/admin-department
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putAdminDepartmentById: (id: number, beans: PutAdminDepartmentByIdPayload, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/admin-department`,
        method: "PUT",
        data: beans,
        ...config,
      }),

    /**
     * @description 所需权限：user:password:change
     *
     * @tags user
     * @name PutChangePasswordById
     * @summary 修改密码
     * @request PUT:/auth/user/{id}/change-password
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putChangePasswordById: (id: number, form: ChangePasswordForm, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/change-password`,
        method: "PUT",
        data: form,
        ...config,
      }),

    /**
     * @description 所需权限：user:delete
     *
     * @tags user
     * @name PutDeleteById
     * @summary 删除用户（软删除）
     * @request PUT:/auth/user/{id}/delete
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putDeleteById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/delete`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：user:lock
     *
     * @tags user
     * @name PutLockById
     * @summary 锁定用户
     * @request PUT:/auth/user/{id}/lock
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putLockById: (id: number, form: ReasonForm, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/lock`,
        method: "PUT",
        data: form,
        ...config,
      }),

    /**
     * @description 所需权限：user:update
     *
     * @tags user
     * @name PutOrganizationById
     * @summary 修改用户部门警员关联信息
     * @request PUT:/auth/user/{id}/organization
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putOrganizationById: (id: number, bean: UserOrganizationUpdateBean, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user/${id}/organization`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：user:permission:manage
     *
     * @tags user
     * @name PutPermissionsById
     * @summary 设置用户额外权限
     * @request PUT:/auth/user/{id}/permissions
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putPermissionsById: (id: number, permissions: PutPermissionsByIdPayload, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/permissions`,
        method: "PUT",
        data: permissions,
        ...config,
      }),

    /**
     * @description 所需权限：user:password:reset
     *
     * @tags user
     * @name PutResetPasswordById
     * @summary 重置密码
     * @request PUT:/auth/user/{id}/reset-password
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putResetPasswordById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/reset-password`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：user:restore
     *
     * @tags user
     * @name PutRestoreById
     * @summary 恢复用户
     * @request PUT:/auth/user/{id}/restore
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putRestoreById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/restore`,
        method: "PUT",
        ...config,
      }),

    /**
     * @description 所需权限：user:restriction:update
     *
     * @tags user
     * @name PutRestrictionById
     * @summary 修改用户限制配置
     * @request PUT:/auth/user/{id}/restriction
     * @response `200` `User` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putRestrictionById: (id: number, bean: UserRestriction, config: AxiosRequestConfig = {}) =>
      this.http.request<User, void>({
        url: `/auth/user/${id}/restriction`,
        method: "PUT",
        data: bean,
        ...config,
      }),

    /**
     * @description 所需权限：user:unlock
     *
     * @tags user
     * @name PutUnlockById
     * @summary 解锁用户
     * @request PUT:/auth/user/{id}/unlock
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    putUnlockById: (id: number, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/user/${id}/unlock`,
        method: "PUT",
        ...config,
      }),
  };
  userExternal = {
    /**
     * No description
     *
     * @tags userExternal
     * @name BindPhone
     * @summary 通过第三方接口自动绑定手机号
     * @request POST:/auth/user-external/bind-phone
     * @response `200` `UserSimpleWithAuth` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    bindPhone: (data: BindPhoneRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleWithAuth, void>({
        url: `/auth/user-external/bind-phone`,
        method: "POST",
        data: data,
        ...config,
      }),
  };
  v2 = {
    /**
     * No description
     *
     * @tags v2
     * @name Login
     * @summary 用户登录
     * @request POST:/auth/v2/login
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    login: (form: UsernamePasswordLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/v2/login`,
        method: "POST",
        data: form,
        ...config,
      }),

    /**
     * No description
     *
     * @tags v2
     * @name LoginByPhone
     * @summary 手机号登录
     * @request POST:/auth/v2/login-by-phone
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginByPhone: (form: PhoneLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/v2/login-by-phone`,
        method: "POST",
        data: form,
        ...config,
      }),

    /**
     * No description
     *
     * @tags v2
     * @name LoginByThirdPlatformCode
     * @summary 第三方平台票据登陆
     * @request POST:/auth/v2/login-by-third-platform-code
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    loginByThirdPlatformCode: (form: ThirdPlatformLoginRequest, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/v2/login-by-third-platform-code`,
        method: "POST",
        data: form,
        ...config,
      }),

    /**
     * No description
     *
     * @tags v2
     * @name Logout
     * @summary 用户注销
     * @request POST:/auth/v2/logout
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    logout: (config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/v2/logout`,
        method: "POST",
        ...config,
      }),

    /**
     * No description
     *
     * @tags v2
     * @name Me
     * @summary 获取个人信息
     * @request GET:/auth/v2/me
     * @response `200` `UserSimpleWithAuth` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    me: (config: AxiosRequestConfig = {}) =>
      this.http.request<UserSimpleWithAuth, void>({
        url: `/auth/v2/me`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags v2
     * @name PoliceLogin
     * @summary 身份证登录
     * @request POST:/auth/v2/police-login
     * @response `200` `LoginResponse` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    policeLogin: (form: IdCardLoginForm, config: AxiosRequestConfig = {}) =>
      this.http.request<LoginResponse, void>({
        url: `/auth/v2/police-login`,
        method: "POST",
        data: form,
        ...config,
      }),
  };
  ws = {
    /**
     * @description /user/topic/ 前缀为用户订阅；/topic/ 前缀为广播订阅
     *
     * @tags ws
     * @name MessageSessionOnlineUsers
     * @summary 返回在线用户列表
     * @request GET:/auth/ws/message-session/online-users
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSessionOnlineUsers: (query: MessageSessionOnlineUsersParams, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth/ws/message-session/online-users`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description /user/topic/ 前缀为用户订阅；/topic/ 前缀为广播订阅
     *
     * @tags ws
     * @name MessageSessionOnlineUsersCount
     * @summary 返回在线用户数
     * @request GET:/auth/ws/message-session/online-users/count
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSessionOnlineUsersCount: (query: MessageSessionOnlineUsersCountParams, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/ws/message-session/online-users/count`,
        method: "GET",
        params: query,
        ...config,
      }),

    /**
     * @description /user/topic/ 前缀为用户订阅；/topic/ 前缀为广播订阅
     *
     * @tags ws
     * @name MessageSessionTopicByUsername
     * @summary 返回指定用户的订阅列表
     * @request GET:/auth/ws/message-session/{username}/topic
     * @response `200` `(string)[]` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSessionTopicByUsername: (username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<string[], void>({
        url: `/auth/ws/message-session/${username}/topic`,
        method: "GET",
        ...config,
      }),

    /**
     * @description 所需权限：message:broadcast
     *
     * @tags ws
     * @name MessageBroadcastByTopic
     * @summary 发送广播消息
     * @request POST:/auth/ws/message/broadcast/{topic}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageBroadcastByTopic: (topic: string, payload: MessageBody, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ws/message/broadcast/${topic}`,
        method: "POST",
        data: payload,
        ...config,
      }),

    /**
     * @description 所需权限：message:send-user-batch
     *
     * @tags ws
     * @name MessageSendBatchByTopic
     * @summary 向批量用户发送消息
     * @request POST:/auth/ws/message/send-batch/{topic}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSendBatchByTopic: (topic: string, payload: MessageBodyWithReceiverObject, config: AxiosRequestConfig = {}) =>
      this.http.request<void, void>({
        url: `/auth/ws/message/send-batch/${topic}`,
        method: "POST",
        data: payload,
        ...config,
      }),

    /**
     * @description 所需权限：message:send-user
     *
     * @tags ws
     * @name MessageSendByUsernameAndTopic
     * @summary 向指定用户发送消息
     * @request POST:/auth/ws/message/send/{username}/{topic}
     * @response `200` `void` OK
     * @response `201` `void` Created
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSendByUsernameAndTopic: (
      topic: string,
      username: string,
      payload: MessageBody,
      config: AxiosRequestConfig = {},
    ) =>
      this.http.request<void, void>({
        url: `/auth/ws/message/send/${username}/${topic}`,
        method: "POST",
        data: payload,
        ...config,
      }),

    /**
     * No description
     *
     * @tags ws
     * @name MessageSendCountByUsernameAndTopic
     * @summary 获取指定用户和Topic的累计消息数量
     * @request GET:/auth/ws/message/send/{username}/{topic}/count
     * @deprecated
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSendCountByUsernameAndTopic: (topic: string, username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/ws/message/send/${username}/${topic}/count`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags ws
     * @name MessageSendCountAndClearByUsernameAndTopic
     * @summary 获取指定用户和Topic的累计消息数量。获取后数量自动清零
     * @request GET:/auth/ws/message/send/{username}/{topic}/count-and-clear
     * @deprecated
     * @response `200` `number` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    messageSendCountAndClearByUsernameAndTopic: (topic: string, username: string, config: AxiosRequestConfig = {}) =>
      this.http.request<number, void>({
        url: `/auth/ws/message/send/${username}/${topic}/count-and-clear`,
        method: "GET",
        ...config,
      }),

    /**
     * No description
     *
     * @tags ws
     * @name Stats
     * @summary 状态信息
     * @request GET:/auth/ws/stats
     * @response `200` `WebSocketBrokerStats` OK
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     */
    stats: (config: AxiosRequestConfig = {}) =>
      this.http.request<WebSocketBrokerStats, void>({
        url: `/auth/ws/stats`,
        method: "GET",
        ...config,
      }),
  };
}

import { httpClient } from "../utils/request";

export const authApi = new Api(httpClient);
