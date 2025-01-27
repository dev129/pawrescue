// alert.jsx

const Alert = ({ 
    children, 
    variant = 'default', 
    className = '', 
    icon 
  }) => {
    const variants = {
      default: 'bg-gray-100 text-gray-800 border-gray-200',
      error: 'bg-red-50 text-red-800 border-red-200',
      warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      success: 'bg-green-50 text-green-800 border-green-200',
      info: 'bg-blue-50 text-blue-800 border-blue-200'
    };
  
    const baseStyles = 'relative w-full rounded-lg border p-4 mb-4 flex items-start gap-3';
    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;
  
    return (
      <div role="alert" className={combinedClasses}>
        {icon && <span className="mt-0.5">{icon}</span>}
        {children}
      </div>
    );
  };
  
  const AlertTitle = ({ children, className = '' }) => {
    const baseStyles = 'mb-1 font-medium leading-none tracking-tight';
    const combinedClasses = `${baseStyles} ${className}`;
  
    return (
      <h5 className={combinedClasses}>
        {children}
      </h5>
    );
  };
  
  const AlertDescription = ({ children, className = '' }) => {
    const baseStyles = 'text-sm [&_p]:leading-relaxed';
    const combinedClasses = `${baseStyles} ${className}`;
  
    return (
      <div className={combinedClasses}>
        {children}
      </div>
    );
  };
  
  export { Alert, AlertTitle, AlertDescription };