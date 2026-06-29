const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xwibxqsapuookpmvaglh.supabase.co';
const supabaseKey = 'sb_publishable_BuOKl-6KKDuiAeK6eEYo9Q_H1f7xLsw'; // Let's try anon key or service key

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.from('site_settings').select('*').eq('id', 1).single();
  if (error) {
    console.error('Error fetching:', error);
  } else {
    console.log('Columns in site_settings:', Object.keys(data));
    console.log('Values:', data);
  }
}

run();
