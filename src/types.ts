export interface AppSettings {
  downloadUrl: string;
  contactUrl?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "shield" | "zap" | "qr" | "settings";
}

export interface SmartphoneButton {
  id: string;
  label: string;
  iconName: "pen" | "scan" | "config-open" | "config-create";
}
