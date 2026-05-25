// 用戶和角色
export type Role = 'ROLE-01' | 'ROLE-02' | 'ROLE-03' | 'ROLE-04' | 'ROLE-05';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

// 建案
export interface Project {
  id: string;
  name: string;
  code: string;
  status: 'active' | 'closed';
  startDate: string;
  endDate: string;
  totalUnits: number;
}

// 買家
export interface Buyer {
  id: string;
  projectId: string;
  unitNo: string;
  ownerName: string;
  ownerIdLast4: string;
  phone: string;
  email?: string;
  layout: string;
  size: number;
  floor: number;
  facing: string;
  createdAt: string;
}

// 申請項目
export interface ApplicationItem {
  id: string;
  code: string;
  name: string;
  category: string;
  location: string;
  fee: number;
  description?: string;
  attachmentUrls?: string[];
}

// 申請
export interface Application {
  id: string;
  buyerId: string;
  projectId: string;
  version: number;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rework' | 'confirmed';
  items: ApplicationItem[];
  totalAddOn: number;
  totalRefund: number;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  reviewComment?: string;
  preConfirmDeadline?: string;
  preConfirmStatus?: 'pending' | 'confirmed' | 'auto-confirmed';
}

// 通知
export interface Notification {
  id: string;
  projectId: string;
  type: 'global' | 'single-unit';
  targetBuyerIds?: string[];
  title: string;
  content: string;
  channel: 'line' | 'email' | 'in-app';
  status: 'draft' | 'scheduled' | 'sent' | 'pending' | 'failed';
  sentAt?: string;
  sender?: User;
  recipientScope?: 'global' | 'specific-units' | 'specific-buyers';
  recipientCount?: number;
}

// 儀表板統計
export interface DashboardStats {
  totalSubmitted: number;
  underReview: number;
  approved: number;
  needsRework: number;
  needsConfirmation: number;
  totalAddOn: number;
  totalRefund: number;
}

// 報表資料
export interface ReportData {
  id: string;
  title: string;
  generatedAt: Date;
  reportType: 'applications' | 'buyers' | 'financials' | 'timeline';
  dateRange: { from: Date; to: Date };
  groupBy?: 'daily' | 'weekly' | 'monthly' | 'status' | 'category';
  data: any[];
  chartData?: any;
  summary?: { [key: string]: any };
}

// 報表記錄
export interface Report {
  id: string;
  title: string;
  reportType: 'applications' | 'buyers' | 'financials' | 'timeline';
  generatedAt: Date;
  dateRange: { from: Date; to: Date };
  generatedBy?: User;
  status: 'completed' | 'processing' | 'failed';
  fileSize?: number;
  downloadUrl?: string;
}
