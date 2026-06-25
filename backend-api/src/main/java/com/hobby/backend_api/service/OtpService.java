package com.hobby.backend_api.service;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    private static final long OTP_TTL_MS = 5 * 60 * 1000; // 5 phút
    private static final int OTP_LENGTH = 6;

    private record OtpEntry(String otp, long expiresAt) {}

    private final Map<String, OtpEntry> store = new ConcurrentHashMap<>();
    private final SecureRandom random = new SecureRandom();

    public String generateAndStore(String email) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < OTP_LENGTH; i++) {
            sb.append(random.nextInt(10));
        }
        String otp = sb.toString();
        store.put(email.toLowerCase(), new OtpEntry(otp, System.currentTimeMillis() + OTP_TTL_MS));
        return otp;
    }

    public boolean verify(String email, String otp) {
        OtpEntry entry = store.get(email.toLowerCase());
        if (entry == null) return false;
        if (System.currentTimeMillis() > entry.expiresAt()) {
            store.remove(email.toLowerCase());
            return false;
        }
        return entry.otp().equals(otp);
    }

    public void invalidate(String email) {
        store.remove(email.toLowerCase());
    }
}
