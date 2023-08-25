import { supabaseUrl, supabaseKey } from './config';

test('Reads in the correct configuration in test mode', () => {
    expect(supabaseUrl == 'localhost:5432');
  });
