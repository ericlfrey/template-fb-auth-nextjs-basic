import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/utils/context/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <ProtectedRoute>
      <div className="flex py-2 container mx-auto">
        <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
          <h2 className="text-2xl font-semibold">{`Welcome, ${user.email}. You are logged in!`}</h2>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
