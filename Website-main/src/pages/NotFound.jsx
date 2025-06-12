const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Page not found</p>
        <a
          href="/"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
