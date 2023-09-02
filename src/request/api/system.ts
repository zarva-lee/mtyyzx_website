// 系统配置相关接口
import { get } from "../http";

// 系统配置
export const websiteConfigPort = () => get("/api/index-info");

