import type { MessageSchema } from '../i18n'

export const ja: MessageSchema = {
  ctrlCenter: 'コントロールセンター',
  msgCenter: '通知センター',
  noContent: 'コンテンツなし',
  searchHint: 'キーワード検索...',
  allSites: 'すべてのサイト',
  siteManage: 'サイト管理',
  comment: 'コメント',
  page: 'ページ',
  user: 'ユーザー',
  site: 'サイト',
  transfer: '移行',
  settings: '設定',
  all: 'すべて',
  pending: '保留中',
  personal: '個人',
  mentions: 'メンション',
  mine: '私の',
  admin: '管理者',
  create: '新規作成',
  import: 'インポート',
  export: 'エクスポート',
  settingSaved: '設定が保存されました',
  settingSaveFailed: '設定の保存に失敗しました',
  settingNotice: '注：一部の設定は手動で再起動する必要がある場合があります',
  apply: '適用',
  updateComplete: '更新完了',
  updateReady: '更新準備完了...',
  opFailed: '操作に失敗しました',
  updateTitle: 'タイトルを更新',
  uploading: 'アップロード中',
  cancel: 'キャンセル',
  back: '戻る',
  cacheClear: 'キャッシュクリア',
  cacheWarm: 'キャッシュ予熱',
  editTitle: 'タイトル編集',
  switchKey: 'キー変更',
  commentAllowAll: 'すべてのユーザーがコメント可能',
  commentOnlyAdmin: '管理者のみがコメント可能',
  config: '設定ファイル',
  envVarControlHint: '環境変数 {key} によって制御されます',
  userAdminHint: 'このユーザーは管理者権限を持っています',
  userInConfHint: 'このユーザーは設定ファイルに存在します',
  edit: '編集',
  delete: '削除',
  siteCount: '合計 {count} サイト',
  createSite: 'サイト作成',
  siteName: 'サイト名',
  siteUrls: 'サイトURL',
  multiSepHint: '複数の場合はカンマで区切ってください',
  add: '追加',
  rename: '名前を変更',
  inputHint: '内容を入力...',
  userCreate: 'ユーザー作成',
  userEdit: 'ユーザー編集',
  userInConfCannotEditHint:
    '設定ファイル内のユーザーはオンライン編集に対応していません。手動で設定ファイルを編集してください',
  userDeleteConfirm:
    'この操作により、ユーザー：「{name}」メール：「{email}」のすべてのコメントが削除されます。これには、そのコメントに対する他のユーザーからの返信も含まれます。続行しますか？',
  userDeleteManuallyHint:
    'ユーザーはデータベースから削除されました。手動で設定ファイルを編集し、ユーザーを削除してください',
  pageDeleteConfirm:
    'ページ "{title}" を削除してもよろしいですか？すべての関連データも削除されます',
  siteDeleteConfirm: 'サイト "{name}" を削除してもよろしいですか？すべての関連データも削除されます',
  siteNameInputHint: 'サイト名を入力してください',
  comments: 'コメント',
  last: '最近',
  show: '表示',
  username: 'ユーザー名',
  email: 'メール',
  link: 'リンク',
  badgeText: 'バッジテキスト',
  badgeColor: 'バッジカラー',
  role: '役割',
  normal: '通常',
  password: 'パスワード',
  passwordEmptyHint: '空欄の場合はパスワードが変更されません',
  emailNotify: 'メール通知',
  enabled: '有効',
  disabled: '無効',
  save: '保存',
  dataFile: 'データファイル',
  artransfer: '変換ツール',
  targetSiteName: 'ターゲットサイト名',
  targetSiteURL: 'ターゲットサイトURL',
  payload: '起動パラメータ',
  optional: 'オプション',
  uploadReadyToImport: 'ファイルが正常にアップロードされ、インポートを開始できます',
  artransferToolHint: '{link} を使用してコメントデータを Artrans 形式に変換します',
  moreDetails: '詳細を見る',
  loginFailure: 'ログイン中にエラーが発生しました',
  login: 'ログイン',
  logout: 'ログアウト',
  logoutConfirm: 'ログアウトしてもよろしいですか？',
  loginSelectHint: 'ログインするアカウントを選択してください：',
}

export default ja
