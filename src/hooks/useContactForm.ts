import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useContactForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchParams = new URLSearchParams(location.search);
    const formType = searchParams.get('form');

    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (formType === 'contact' && formRef.current && !formRef.current.contains(e.target as Node)) {
                navigate(location.pathname);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [formType, navigate]);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = "7425049510:AAHxsDSNayHM4UG6mN2Sydmiae4-8wKT6b0";
        const chat_id = "-4241124565";
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Ім'я: ${formData.fullName}, Email: ${formData.email}, Повідомлення: ${formData.message}`;

        const api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.onreadystatechange = () => {
            if (api.readyState === 4) {
                setLoading(false);
                if (api.status === 200) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                        navigate(location.pathname);
                        setFormData({
                            fullName: "",
                            email: "",
                            message: ""
                        });
                    }, 1500); 
                } else {
                    setError("Помилка при відправці форми. Спробуйте ще раз.");
                }
            }
        };
        api.send();
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return {
        formData,
        loading,
        success,
        error,
        formRef,
        formType,
        handleInputChange,
        handleSubmitForm,
        location
    };
};
