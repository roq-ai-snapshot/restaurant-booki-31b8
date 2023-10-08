const mapping: Record<string, string> = {
  chichis: 'chichi',
  employees: 'employee',
  menus: 'menu',
  restaurants: 'restaurant',
  'table-reservations': 'table_reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
