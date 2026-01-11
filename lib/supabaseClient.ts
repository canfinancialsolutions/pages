---

### ✅ **pages/internal/dashboard.tsx** (with Supabase Auth)
```tsx
import { useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        window.location.href = '/'; // Redirect to home if not authenticated
      }
    };
    checkSession();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Internal Dashboard</h1>
      {/* Paste your existing dashboard code here */}
    </div>
  );
}
