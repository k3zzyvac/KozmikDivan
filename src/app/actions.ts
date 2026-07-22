"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlist(email: string, referredBy?: string) {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Geçersiz e-posta adresi." };
  }

  try {
    const { error } = await supabase.from("waitlist").insert([
      {
        email: email.trim().toLowerCase(),
        referred_by: referredBy || null,
      },
    ]);

    if (error) {
      // Postgres error code for unique key violation (duplicate email)
      if (error.code === "23505") {
        return { success: false, error: "Bu e-posta adresi zaten kayıtlı!" };
      }
      console.error("Supabase insert error:", error);
      return { success: false, error: "Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error joining waitlist:", err);
    return { success: false, error: "Sistemde bir hata oluştu." };
  }
}
