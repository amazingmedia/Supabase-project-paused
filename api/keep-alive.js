import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  try {
    // !!! အရေးကြီး: 'your_table_name' နေရာမှာ သင့် Supabase DB ထဲက table နာမည် အမှန်ကို ပြောင်းထည့်ပါ
    moon_data
    const { error, count } = await supabase
      .from('your_table_name')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    console.log('Supabase database pinged successfully. Table count:', count);
    res.status(200).json({ message: 'Supabase database pinged successfully.', count: count });

  } catch (error) {
    console.error('Error pinging Supabase:', error.message);
    res.status(500).json({ message: 'Error pinging Supabase.', error: error.message });
  }
}