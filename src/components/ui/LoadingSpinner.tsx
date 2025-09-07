interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-sage-200 border-t-sage-600 rounded-full animate-spin`}
        aria-label="Loading"
      />
    </div>
  )
}

// Alternative coffee-themed spinner
export function CoffeeSpinner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-3 h-3 bg-brown-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-brown-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-3 h-3 bg-brown-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  )
}