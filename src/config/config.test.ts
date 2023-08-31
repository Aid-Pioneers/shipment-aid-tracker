import { supabaseUrl } from './config';

test('Reads in the correct configuration in test mode', () => {
    expect(supabaseUrl).toBe('http://localhost:54321');
  });
