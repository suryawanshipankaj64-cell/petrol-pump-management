export default function Home() {
  return (
    <div className="card max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent mb-8">
        Welcome to Petrol Pump Management
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">⛽</div>
          <h3 className="text-2xl font-bold mb-2">Fuel Management</h3>
          <p>Track stock levels & generate bills</p>
        </div>
        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
          <p>Revenue trends & sales reports</p>
        </div>
        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-2xl font-bold mb-2">Employee Management</h3>
          <p>Attendance & salary tracking</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn-primary text-lg px-8 py-3">
          Get Started →
        </button>
      </div>
    </div>
  );
}

