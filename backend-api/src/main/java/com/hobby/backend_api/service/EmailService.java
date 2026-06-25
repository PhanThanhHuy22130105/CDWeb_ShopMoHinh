package com.hobby.backend_api.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOtpEmail(String toEmail, String fullName, String otp) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom("no-reply@c3hobby.vn");
        helper.setTo(toEmail);
        helper.setSubject("[C3 Hobby] Mã xác nhận đặt lại mật khẩu của bạn");
        helper.setText(buildHtml(fullName, otp), true);

        mailSender.send(message);
    }

    private String buildHtml(String fullName, String otp) {
        return """
                <!DOCTYPE html>
                <html lang="vi">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title>Đặt lại mật khẩu</title>
                </head>
                <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
                  <table width="100%%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
                    <tr>
                      <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                          <!-- HEADER -->
                          <tr>
                            <td style="background:#1a1a2e;padding:32px 40px;text-align:center;">
                              <p style="margin:0;font-size:11px;color:#ff4757;letter-spacing:4px;text-transform:uppercase;font-weight:700;">C3 HOBBY GUNDAM SHOP</p>
                              <h1 style="margin:8px 0 0;font-size:26px;color:#ffffff;font-weight:900;letter-spacing:2px;text-transform:uppercase;">
                                ĐẶT LẠI MẬT KHẨU
                              </h1>
                            </td>
                          </tr>

                          <!-- BODY -->
                          <tr>
                            <td style="padding:40px;">
                              <p style="margin:0 0 16px;font-size:15px;color:#444;line-height:1.6;">
                                Xin chào, <strong style="color:#1a1a2e;">%s</strong>!
                              </p>
                              <p style="margin:0 0 24px;font-size:15px;color:#444;line-height:1.6;">
                                Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn tại <strong>C3 Hobby</strong>.
                                Vui lòng sử dụng mã OTP dưới đây để tiếp tục:
                              </p>

                              <!-- OTP BOX -->
                              <table width="100%%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                                <tr>
                                  <td align="center">
                                    <div style="display:inline-block;background:#f8f8f8;border:2px dashed #ff4757;border-radius:4px;padding:20px 40px;">
                                      <p style="margin:0 0 4px;font-size:11px;color:#888;letter-spacing:3px;text-transform:uppercase;">Mã xác nhận OTP</p>
                                      <p style="margin:0;font-size:42px;font-weight:900;color:#ff4757;letter-spacing:12px;font-family:'Courier New',monospace;">%s</p>
                                    </div>
                                  </td>
                                </tr>
                              </table>

                              <p style="margin:0 0 8px;font-size:13px;color:#888;text-align:center;">
                                ⏱ Mã có hiệu lực trong <strong>5 phút</strong>.
                              </p>

                              <!-- DIVIDER -->
                              <table width="100%%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                                <tr><td style="border-top:1px solid #eeeeee;"></td></tr>
                              </table>

                              <p style="margin:0 0 8px;font-size:13px;color:#888;line-height:1.6;">
                                Nếu bạn <strong>không</strong> thực hiện yêu cầu này, hãy bỏ qua email này.
                                Mật khẩu của bạn sẽ không bị thay đổi.
                              </p>
                              <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">
                                Để bảo mật tài khoản, <strong>không chia sẻ mã OTP</strong> này với bất kỳ ai.
                              </p>
                            </td>
                          </tr>

                          <!-- FOOTER -->
                          <tr>
                            <td style="background:#f8f8f8;padding:24px 40px;text-align:center;border-top:1px solid #eeeeee;">
                              <p style="margin:0 0 4px;font-size:12px;color:#aaa;">
                                © 2026 C3 Hobby Gundam Shop. Tất cả quyền được bảo lưu.
                              </p>
                              <p style="margin:0;font-size:11px;color:#ccc;">
                                Email này được gửi tự động, vui lòng không trả lời.
                              </p>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>
                  </table>
                </body>
                </html>
                """.formatted(fullName, otp);
    }
}
