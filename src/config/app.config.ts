interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Chichi Owner'],
  customerRoles: ['Chichi Visitors'],
  tenantRoles: ['Chichi Owner', 'Chichi Manager', 'Chichi Staff', 'Chichi Chef', 'Chichi Customer'],
  tenantName: 'Chichi',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'View table reservations', 'View user info'],
  ownerAbilities: ['Manage chichi', 'Manage restaurant', 'Manage table reservations', 'Manage menus'],
  getQuoteUrl: 'https://app.roq.ai/proposal/2a7d921f-bbd9-4050-9f30-0462196ac2ee',
};
