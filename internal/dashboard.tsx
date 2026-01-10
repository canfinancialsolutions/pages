import { useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) window.location.href = '/';
    };
    checkSession();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">Internal Dashboard</h1>
      {/* Paste your existing dashboard code here */}
    </div>
  );
}
