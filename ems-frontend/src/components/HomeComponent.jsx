import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
    const navigator = useNavigate();

    return (
        <div className="d-flex align-items-center" style={{
            minHeight: '90vh',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)',
            color: 'white',
            borderRadius: '0 0 50px 50px' // Soft curve at the bottom
        }}>
            <div className="container text-center">
                <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
                    Empowering Your <span style={{ color: '#60a5fa' }}>Workforce</span>
                </h1>
                <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
                    A modern management suite designed for full-stack excellence. 
                    Manage employees, departments, and operations with precision.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <button 
                        className="btn btn-light btn-lg px-5 py-3 fw-bold shadow"
                        onClick={() => navigator('/employees')}
                    >
                        View Employees
                    </button>
                    <button 
                        className="btn btn-light btn-lg px-5 py-3 fw-bold shadow"
                        onClick={() => navigator('/add-department')}
                    >
                        + New Department
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;