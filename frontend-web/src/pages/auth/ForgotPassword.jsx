import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Send, ShieldCheck, Lock, Eye, EyeOff, RotateCcw } from 'lucide-react';

const API = 'http://localhost:8080/api/auth';

const STEPS = {
  EMAIL: 1,
  OTP: 2,
  RESET: 3,
};

export default function ForgotPassword() {
  const [step, setStep] = useState(STEPS.EMAIL);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const post = async (endpoint, body) => {
    const res = await fetch(`${API}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (!res.ok) throw new Error(text);
    return text;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await post('forgot-password', { email });
      setStep(STEPS.OTP);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const next = [...otp];
    for (let i = 0; i < 6; i++) next[i] = pasted[i] ?? '';
    setOtp(next);
    const focusIndex = Math.min(pasted.length, 5);
    otpRefs.current[focusIndex]?.focus();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpStr = otp.join('');
    if (otpStr.length < 6) { setError('Nhập đủ 6 chữ số OTP!'); return; }
    setError('');
    setLoading(true);
    try {
      await post('verify-otp', { email, otp: otpStr });
      setStep(STEPS.RESET);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { setError('Mật khẩu xác nhận không khớp!'); return; }
    if (newPassword.length < 6) { setError('Mật khẩu phải có ít nhất 6 ký tự!'); return; }
    setError('');
    setLoading(true);
    try {
      await post('reset-password', { email, otp: otp.join(''), newPassword });
      setSuccess('Đặt lại mật khẩu thành công! Đang chuyển hướng...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const stepLabel = ['', 'Nhập Email', 'Xác nhận OTP', 'Mật khẩu mới'];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-bg-surface border border-brand-gray p-8 rounded-sm shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-12 bg-accent-red"></div>
        <div className="absolute top-0 left-0 w-12 h-1 bg-accent-red"></div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all
                ${step >= s ? 'bg-accent-red text-white' : 'bg-brand-gray text-brand-slate'}`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`h-0.5 w-10 transition-all ${step > s ? 'bg-accent-red' : 'bg-brand-gray'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
            Recover <span className="text-accent-red">Access</span>
          </h2>
          <p className="text-brand-slate text-sm mt-2">{stepLabel[step]}</p>
        </div>

        {/* STEP 1: Email */}
        {step === STEPS.EMAIL && (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Email đăng ký</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors"
                  placeholder="pilot@c3gundam.com"
                />
              </div>
            </div>

            {error && <p className="text-accent-red text-sm font-bold text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-red hover:bg-[#d6002d] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Send size={18} /> {loading ? 'Đang gửi...' : 'Gửi mã OTP'}
            </button>
          </form>
        )}

        {/* STEP 2: OTP */}
        {step === STEPS.OTP && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest text-center">
                Nhập mã 6 chữ số đã gửi đến
              </label>
              <p className="text-accent-red text-xs font-bold text-center mb-4">{email}</p>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    onPaste={handleOtpPaste}
                    className="w-11 h-14 text-center text-xl font-black bg-white border border-brand-gray focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors rounded-sm"
                  />
                ))}
              </div>
            </div>

            {error && <p className="text-accent-red text-sm font-bold text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-red hover:bg-[#d6002d] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ShieldCheck size={18} /> {loading ? 'Đang xác nhận...' : 'Xác nhận OTP'}
            </button>

            <button
              type="button"
              onClick={() => { setOtp(['','','','','','']); handleSendOtp({ preventDefault: () => {} }); }}
              className="w-full text-sm text-brand-slate hover:text-accent-red flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw size={14} /> Gửi lại mã
            </button>
          </form>
        )}

        {/* STEP 3: New Password */}
        {step === STEPS.RESET && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Mật khẩu mới</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-10 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors"
                  placeholder="Tối thiểu 6 ký tự"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-gray hover:text-brand-dark"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Xác nhận mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
            </div>

            {error && <p className="text-accent-red text-sm font-bold text-center">{error}</p>}
            {success && <p className="text-green-600 text-sm font-bold text-center">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-red hover:bg-[#d6002d] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ShieldCheck size={18} /> {loading ? 'Đang cập nhật...' : 'Đặt lại mật khẩu'}
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link to="/login" className="text-sm text-brand-slate hover:text-accent-red flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
