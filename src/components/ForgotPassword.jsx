import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const ForgotPassword = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const key = searchParams.get("key");

  const validatePasswordMatch = (pass, confirmPass) => {
    if (confirmPass && pass !== confirmPass) {
      setPasswordMatch(false);
      return false;
    } else {
      setPasswordMatch(true);
      return true;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword) {
      validatePasswordMatch(e.target.value, confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswordMatch(password, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePasswordMatch(password, confirmPassword)) {
      setError(t('forgotPassword.error.mismatch'));
      return;
    }

    try {
      const response = await fetch("http://api-dev.nextgoat.io/users/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "next-goat-token": key
        },
        body: JSON.stringify({
          password: password
        }),
      });

      if (!response.ok) {
        throw new Error(t('forgotPassword.error.failed'));
      }

      setSuccess(true);
    } catch (err) {
      console.error("Reset password error:", err);
      
      // If HTTPS fails, try HTTP as a fallback
      if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
        try {
          // Only attempt HTTP fallback if we're on HTTP ourselves
          if (window.location.protocol === 'http:') {
            const httpResponse = await fetch("http://api-dev.nextgoat.io/users/reset-password", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "next-goat-token": key
              },
              body: JSON.stringify({
                password: password
              }),
            });
            
            if (!httpResponse.ok) {
              throw new Error(t('forgotPassword.error.failed'));
            }
            
            setSuccess(true);
            return;
          }
          
          setError(t('forgotPassword.error.secureConnection') || 
                  'This page is loaded over HTTPS but the API requires HTTP. Try accessing this page via HTTP instead.');
        } catch (httpErr) {
          console.error("HTTP fallback failed:", httpErr);
          setError(t('forgotPassword.error.allConnectionsFailed') || 
                  'Failed to connect to the server through secure and insecure connections. Please try again later.');
        }
      } else {
        setError(err.message || t('forgotPassword.error.unknown') || 'An unknown error occurred');
      }
    }
  };

  if (!key) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-50">
        <div className="w-full max-w-md rounded-lg bg-black p-8 shadow-lg text-blue-50">
          <h1 className="mb-6 text-center text-2xl font-bold font-zentry">
            {t('forgotPassword.invalidTitle')}
          </h1>
          <p className="text-center text-blue-50/70 font-circular-web">
            {t('forgotPassword.invalidMessage')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md rounded-lg bg-black p-8 shadow-lg text-blue-50">
        <h1 className="mb-6 text-center text-2xl font-bold font-zentry">{t('forgotPassword.title')}</h1>
        
        {success ? (
          <div className="text-center text-yellow-300 font-circular-web">
            {t('forgotPassword.success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium font-circular-web">
                {t('forgotPassword.newPassword')}
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 w-full rounded-md border border-blue-50/20 bg-transparent p-2 text-blue-50 focus:border-violet-300 focus:ring-1 focus:ring-violet-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium font-circular-web">
                {t('forgotPassword.confirmPassword')}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`mt-1 w-full rounded-md border ${!passwordMatch ? 'border-red-500' : 'border-blue-50/20'} bg-transparent p-2 text-blue-50 focus:border-violet-300 focus:ring-1 focus:ring-violet-300`}
                required
              />
              {!passwordMatch && (
                <p className="text-red-500 text-sm mt-1">{t('forgotPassword.error.mismatch')}</p>
              )}
            </div>

            {error && (
              <div className="text-yellow-300 font-circular-web">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-violet-300 px-4 py-2 text-black hover:bg-violet-300/80 font-circular-web transition-colors duration-300"
            >
              {t('forgotPassword.resetButton')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;