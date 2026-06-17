export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ ok: boolean; message: string }> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId || formId === "your-form-id") {
    return {
      ok: false,
      message:
        "Contact form is not configured yet. Please set NEXT_PUBLIC_FORMSPREE_ID in .env.local",
    };
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { ok: true, message: "Message sent! I'll get back to you soon." };
  }

  const error = await response.json().catch(() => null);
  return {
    ok: false,
    message:
      error?.error || "Something went wrong. Please try again or email me directly.",
  };
}
