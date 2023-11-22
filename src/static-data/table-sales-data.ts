import { DateTime } from 'luxon';

export interface Order {
  name: string;
  status: 'ready' | 'pending' | 'warn';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'Capacitor Bank',
    status: 'pending',
    timestamp: DateTime.local().minus({ minutes: 2 }).toRelative()!
  },
  {
    name: 'Combined Instrument Transformer',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 6 }).toRelative()!
  },
  {
    name: 'Combined Capacitor Potential Device',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()!
  },
  {
    name: 'Current Transformer',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 17 }).toRelative()!
  }
];
