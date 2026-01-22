import React from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 border border-red-500/50 text-center">
                        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">เกิดข้อผิดพลาด</h2>
                        <p className="text-gray-400 mb-6">
                            มีบางอย่างผิดพลาดในการโหลดหน้าเว็บ กรุณารีเฟรชหน้าเว็บอีกครั้ง
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                        >
                            รีเฟรชหน้าเว็บ
                        </button>
                        {process.env.NODE_ENV === 'development' && (
                            <details className="mt-4 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500">รายละเอียดข้อผิดพลาด</summary>
                                <pre className="mt-2 text-xs text-red-400 overflow-auto bg-gray-900 p-4 rounded">
                                    {this.state.error?.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
