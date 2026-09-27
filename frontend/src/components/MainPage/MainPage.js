import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/app/register');
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="display-4 fw-bold">GiftLink</h1>
            <p className="lead mt-3">
                Give away what you no longer need. Find what you're looking for &mdash; for free.
            </p>
            <button className="btn btn-primary btn-lg mt-3" onClick={goToRegister}>
                Get Started
            </button>
        </div>
    );
}

export default MainPage;
